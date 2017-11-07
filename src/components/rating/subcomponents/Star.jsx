import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon, {TYPE, ICON_COLOR} from '../../icons/Icon';

const Star = ({size, checked, onClick}) => {
  const starClass = classnames('sg-rate-box__star', {
    'sg-rate-box__star--checked': checked
  });

  return (
    <span className={starClass} onClick={onClick}>
      <Icon type={TYPE.STAR} size={size} color={ICON_COLOR.ADAPTIVE} />
    </span>
  );
};

Star.propTypes = {
  size: PropTypes.number,
  checked: PropTypes.bool,
  onClick: PropTypes.func.isRequired
};

export default Star;
