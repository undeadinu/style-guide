import React from 'react';
import Icon, {TYPE, SIZE, ICON_COLOR} from '../Icon';
import DocsActiveBlock, {BACKGROUND_COLOR} from 'components/DocsActiveBlock';

const Icons = () => {

  const SIZE_OPTIONS = SIZE.reduce((result, item) => {
    result[item] = item;
    return result;
  }, {});

  const settings = [
    {
      name: 'type',
      values: TYPE,
      required: true
    },
    {
      name: 'size',
      values: SIZE_OPTIONS
    },
    {
      name: 'color',
      values: ICON_COLOR
    }
  ];

  return (
    <div>
      <DocsActiveBlock settings={settings} backgroundColor={BACKGROUND_COLOR.DARK}>
        <Icon type={TYPE.NOTIFICATIONS} />
      </DocsActiveBlock>
      <DocsActiveBlock settings={settings}>
        <Icon type={TYPE.HEART} color={ICON_COLOR.PEACH} size={46} />
      </DocsActiveBlock>
    </div>
  );
};

export default Icons;
