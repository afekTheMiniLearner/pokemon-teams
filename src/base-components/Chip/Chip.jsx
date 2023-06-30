import React from "react";
import PropTypes from "prop-types";

import { MuiChip } from "./Chip.styled";

export default function Chip({
  avatar,
  color,
  deleteIcon,
  href,
  icon,
  label,
  onClick,
  onDelete,
  size,
  variant,
  ...props
}) {
  return (
    <MuiChip
      avatar={avatar}
      color={color}
      deleteIcon={deleteIcon}
      href={href}
      icon={icon}
      label={label}
      onClick={onClick}
      onDelete={onDelete}
      size={size}
      variant={variant}
      {...props}
    />
  );
}

Chip.propTypes = {
  avatar: PropTypes.node,
  color: PropTypes.string,
  deleteIcon: PropTypes.node,
  href: PropTypes.string,
  icon: PropTypes.node,
  label: PropTypes.string,
  onClick: PropTypes.func,
  onDelete: PropTypes.func,
  size: PropTypes.string,
  variant: PropTypes.string,
};

Chip.defaultProps = {
  avatar: undefined,
  color: undefined,
  deleteIcon: undefined,
  href: undefined,
  icon: undefined,
  label: undefined,
  onClick: undefined,
  onDelete: undefined,
  size: undefined,
  variant: undefined,
};
