import React from 'react';
import PropTypes from 'prop-types';
import Badge, {BADGE_SIZE, BADGE_COLOR} from './subcomponents/Badge';
import Text, {TEXT_SIZE, TEXT_COLOR, TEXT_WEIGHT} from '../text/Text';

export const TEXT_BADGE_SIZE = BADGE_SIZE;
export const TEXT_BADGE_COLOR = {
  NORMAL: {BADGE: BADGE_COLOR.NORMAL, TEXT: TEXT_COLOR.DEFAULT},
  PEACH: {BADGE: BADGE_COLOR.PEACH, TEXT: TEXT_COLOR.WHITE},
  MUSTARD: {BADGE: BADGE_COLOR.MUSTARD, TEXT: TEXT_COLOR.WHITE},
  MINT: {BADGE: BADGE_COLOR.MINT, TEXT: TEXT_COLOR.WHITE},
  MINT_SECONDARY: {BADGE: BADGE_COLOR.MINT_SECONDARY, TEXT: TEXT_COLOR.WHITE},
  BLUE_SECONDARY: {BADGE: BADGE_COLOR.BLUE_SECONDARY, TEXT: TEXT_COLOR.WHITE},
  BLUE: {BADGE: BADGE_COLOR.BLUE, TEXT: TEXT_COLOR.WHITE},
  GRAY_SECONDARY: {BADGE: BADGE_COLOR.GRAY_SECONDARY, TEXT: TEXT_COLOR.WHITE},
  MINT_SECONDARY_LIGHT: {BADGE: BADGE_COLOR.MINT_SECONDARY_LIGHT, TEXT: TEXT_COLOR.MINT},
  PEACH_SECONDARY_LIGHT: {BADGE: BADGE_COLOR.PEACH_SECONDARY_LIGHT, TEXT: TEXT_COLOR.PEACH},
  BLUE_SECONDARY_LIGHT: {BADGE: BADGE_COLOR.BLUE_SECONDARY_LIGHT, TEXT: TEXT_COLOR.BLUE},
  LAVENDER: {BADGE: BADGE_COLOR.LAVENDER, TEXT: TEXT_COLOR.WHITE}
};

const TextBadge = ({
  children,
  color = TEXT_BADGE_COLOR.NORMAL,
  size = BADGE_SIZE.NORMAL,
  rounded,
  withAnimation,
  className,
  ...props
}) => {
  const textSize = size === BADGE_SIZE.LARGE ? TEXT_SIZE.NORMAL : TEXT_SIZE.XSMALL;

  return (
    <Badge
      {...props}
      className={className}
      color={color.BADGE}
      size={size}
      rounded={rounded}
      withAnimation={withAnimation}
    >
      <Text size={textSize} weight={TEXT_WEIGHT.BOLD} color={color.TEXT}>{children}</Text>
    </Badge>
  );
};

TextBadge.propTypes = {
  color: PropTypes.oneOf(Object.values(TEXT_BADGE_COLOR)),
  size: PropTypes.oneOf(Object.values(BADGE_SIZE)),
  children: PropTypes.string.isRequired,
  rounded: PropTypes.bool,
  withAnimation: PropTypes.bool,
  className: PropTypes.string
};

export default TextBadge;
