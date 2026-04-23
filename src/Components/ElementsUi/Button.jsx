import React from "react";
import PropTypes from "prop-types";
import { FaBeer } from "react-icons/fa";

const sizeClasses = {
  large: "px-8 py-3 text-lg",
  medium: "px-6 py-2 text-base",
  small: "px-4 py-1 text-sm",
};

const stateClasses = {
  enabled: "bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800",
  pressed: "bg-blue-800 text-white",
  disabled: "bg-gray-300 text-gray-500 cursor-not-allowed",
};

export default function Button({
  children,
  size = "medium",
  state = "enabled",
  icon,
  iconPosition = "left",
  onlyIcon = false,
  ...props
}) {
  const isDisabled = state === "disabled";
  const IconComponent = icon || FaBeer;

  return (
    <button
      className={`inline-flex items-center justify-center font-semibold rounded transition-colors duration-200 gap-2 focus:outline-none focus:ring-2 focus:ring-blue-400 ${sizeClasses[size]} ${stateClasses[state]}`}
      disabled={isDisabled}
      {...props}
    >
      {icon && iconPosition === "left" && <IconComponent className="text-xl mr-2" />}
      {!onlyIcon && <span>{children}</span>}
      {icon && iconPosition === "right" && <IconComponent className="text-xl ml-2" />}
      {onlyIcon && icon && <IconComponent className="text-xl" />}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  size: PropTypes.oneOf(["large", "medium", "small"]),
  state: PropTypes.oneOf(["enabled", "pressed", "disabled"]),
  icon: PropTypes.elementType,
  iconPosition: PropTypes.oneOf(["left", "right"]),
  onlyIcon: PropTypes.bool,
};
