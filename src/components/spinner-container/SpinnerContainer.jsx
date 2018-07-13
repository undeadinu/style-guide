import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Spinner, {SPINNER_SIZE} from '../spinner/Spinner';

export {SPINNER_SIZE} from '../spinner/Spinner';

const SpinnerContainer = ({loading, light, size, full, className, children, ...props}) => {
  const containerClass = classNames('sg-spinner-container', {
    'sg-spinner-container--full': full
  }, className);

  return (
    <div {...props} className={containerClass}>
      {children}
      {loading &&
        <div className="sg-spinner-container__overlay">
          <Spinner light={light} size={size} />
        </div>
      }
    </div>
  );
};

SpinnerContainer.propTypes = {
  loading: PropTypes.bool,
  light: PropTypes.bool,
  size: PropTypes.oneOf(Object.values(SPINNER_SIZE)),
  full: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string
};

export default SpinnerContainer;
