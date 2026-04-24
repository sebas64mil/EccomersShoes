import React from "react";
import PropTypes from "prop-types";
import { FaBeer } from "react-icons/fa";

/* ---------------- SIZE ---------------- */
const sizeClasses = {
  large: "text-3xl px-7 py-4",
  medium: "text-xl px-6 py-3",
  small: "text-sm px-4 py-2",
};

const iconSizeClasses = {
  large: "text-3xl",
  medium: "text-xl",
  small: "text-sm",
};

/* ---------------- COLORS (INDIGO SYSTEM) ---------------- */
const baseButton =
  "relative inline-flex items-center justify-center font-semibold border border-indigo-950 text-white transition-all duration-300 overflow-hidden";

/* fondo animado */
const bgEffect =
  "bg-indigo-950 bg-[length:200%] bg-[position:200%] hover:bg-[position:40%]";

/* hover general */
const hoverEffect =
  "hover:bg-indigo-700 hover:border-indigo-700";

/* ---------------- STATES ---------------- */
const states = {
  enabled: `
    ${baseButton}
    ${bgEffect}
    ${hoverEffect}
    active:scale-95
  `,

  pressed: `
    ${baseButton}
    bg-indigo-700
    border-indigo-700
    active:scale-95
  `,

  disabled: `
    ${baseButton}
    bg-gray-300
    text-gray-500
    cursor-not-allowed
    opacity-60
  `,

  text: `
    bg-transparent
    text-indigo-950
    hover:text-indigo-700
    hover:underline
    border-none
    shadow-none
  `,
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

  /* ---------------- ICON LAYOUT ---------------- */
  let flexClass = "flex-row";
  if (iconPosition === "top") flexClass = "flex-col";
  if (iconPosition === "bottom") flexClass = "flex-col";

  return (
    <button
      className={`
        ${states[state]}
        ${sizeClasses[size]}
        flex ${flexClass}
        w-fit min-w-0
        focus:outline-none
        focus:ring-2 focus:ring-indigo-700
      `}
      disabled={isDisabled}
      {...props}
    >
      {/* ICON ONLY */}
      {onlyIcon && icon && (
        <IconComponent className={iconSizeClasses[size]} />
      )}

      {/* NORMAL BUTTON */}
      {!onlyIcon && (
        <>
          {icon && iconPosition === "top" && (
            <IconComponent className={`${iconSizeClasses[size]} mb-1`} />
          )}

          {icon && iconPosition === "left" && (
            <IconComponent className={`${iconSizeClasses[size]} mr-2`} />
          )}

          <p className="m-0">{children}</p>

          {icon && iconPosition === "bottom" && (
            <IconComponent className={`${iconSizeClasses[size]} mt-1`} />
          )}

          {icon && iconPosition === "right" && (
            <IconComponent className={`${iconSizeClasses[size]} ml-2`} />
          )}
        </>
      )}
    </button>
  );
}

/* ---------------- PROP TYPES ---------------- */
Button.propTypes = {
  children: PropTypes.node,
  size: PropTypes.oneOf(["large", "medium", "small"]),
  state: PropTypes.oneOf(["enabled", "pressed", "disabled", "text"]),
  icon: PropTypes.elementType,
  iconPosition: PropTypes.oneOf(["left", "right", "top", "bottom"]),
  onlyIcon: PropTypes.bool,
};