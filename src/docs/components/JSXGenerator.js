import React from 'react';

function propToString(prop, inJS = false) {
  let result = '';
  let wrapInBraces = !inJS;

  if (React.isValidElement(prop)) {
    result = generateJSX(prop);
  } else if (Array.isArray(prop)) {
    result = '[' + prop
      .map(item => propToString(item, true))
      .join(', ') + ']';
  } else if (typeof prop === 'string') {
    result = JSON.stringify(prop);
    wrapInBraces = false;
  } else {
    result = JSON.stringify(prop);
  }

  return wrapInBraces ? '{' + result + '}' : result;
}

function highestLevelPropToString({propValue, propName, settings}) {
  const propMeta = settings.find(setting => setting.name === propName);

  if (propMeta && typeof propMeta.values === 'object') {

    const propMetaKey = Object.keys(propMeta.values).find(key => propMeta.values[key] === propValue);

    if (propMetaKey) {
      return `{${propName.toUpperCase()}.${propMetaKey}}`;
    }
  }

  return propToString(propValue);
}

function generateJSX(component, settings) {
  if (!React.isValidElement(component)) {
    return component;
  }

  const type = component.type.name || component.type;
  let jsxProps = Object.keys(component.props)
    .filter(key => key !== 'children')
    .filter(key => component.props[key] !== undefined)
    .map(key => {
      if (component.props[key] === true) {
        return key;
      }

      const propValue = component.props[key];
      let formattedPropValue = '';

      if (settings) {
        formattedPropValue = highestLevelPropToString({
          propName: key,
          propValue,
          settings
        });
      } else {
        formattedPropValue = propToString(propValue);
      }

      return `${key}=${formattedPropValue}`;
    })
    .join(' ');

  if (jsxProps) {
    jsxProps = ' ' + jsxProps;
  }

  return React.Children.count(component.props.children) ?
    `<${type}${jsxProps}>${React.Children.map(component.props.children, generateJSX).join('')}</${type}>` :
    `<${type}${jsxProps} />`;
}

export default generateJSX;
