import React from "react";
import PropTypes from "prop-types";
import { FaBeer } from "react-icons/fa";

const sizeClasses = {
  large: "text-3xl",
  medium: "text-xl",
  small: "text-sm",
};

const iconSizeClasses = {
  large: "text-3xl",
  medium: "text-xl",
  small: "text-sm",
};

const stateClasses = {
  enabled: "bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800",
  pressed: "bg-blue-800 text-white",
  disabled: "bg-gray-300 text-gray-500 cursor-not-allowed",
  text: "bg-transparent text-blue-600 hover:text-blue-800 hover:underline active:text-blue-900 shadow-none",
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

  // Determinar dirección del layout solo para top/bottom
  let flexClass = "flex-row";
  if (iconPosition === "top") flexClass = "flex-col";
  if (iconPosition === "bottom") flexClass = "flex-col";

  return (
    <button
      className={`inline-flex items-center justify-center font-semibold p-[0.3rem] rounded transition-colors duration-200 min-w-0 w-fit focus:outline-none focus:ring-2 focus:ring-blue-400 ${sizeClasses[size]} ${stateClasses[state]} ${state === "text" ? "p-0 bg-transparent shadow-none" : ""} flex ${flexClass}`}
      disabled={isDisabled}
      {...props}
    >
      {onlyIcon && icon && <IconComponent className={iconSizeClasses[size]} />}
      {!onlyIcon && (
        <>
          {/* Icono arriba */}
          {icon && iconPosition === "top" && <IconComponent className={`${iconSizeClasses[size]} mb-1`} />}
          {/* Icono izquierda */}
          {icon && iconPosition === "left" && <IconComponent className={`${iconSizeClasses[size]} mr-2`} />}
          {/* Texto */}
          <p className="m-0">{children}</p>
          {/* Icono abajo */}
          {icon && iconPosition === "bottom" && <IconComponent className={`${iconSizeClasses[size]} mt-1`} />}
          {/* Icono derecha */}
          {icon && iconPosition === "right" && <IconComponent className={`${iconSizeClasses[size]} ml-2`} />}
        </>
      )}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  size: PropTypes.oneOf(["large", "medium", "small"]),
  state: PropTypes.oneOf(["enabled", "pressed", "disabled", "text"]),
  icon: PropTypes.elementType,
  iconPosition: PropTypes.oneOf(["left", "right", "top", "bottom"]),
  onlyIcon: PropTypes.bool,
};
