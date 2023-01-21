import React from "react";
import PropTypes from "prop-types";

const shapes = { RoundedBorder8: "rounded-radius8" };
const variants = { FillIndigo900: "bg-indigo_900 text-white_A700" };
const sizes = {
  sm: "p-[23px] sm:px-[20px]",
  md: "p-[26px] sm:px-[20px]",
  lg: "sm:px-[20px] px-[25px] py-[29px]",
  xl: "p-[29px] sm:px-[20px]",
  "2xl": "p-[32px] sm:px-[20px]",
  "3xl": "p-[35px] sm:px-[20px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["RoundedBorder8"]),
  variant: PropTypes.oneOf(["FillIndigo900"]),
  size: PropTypes.oneOf(["sm", "md", "lg", "xl", "2xl", "3xl"]),
};
Button.defaultProps = {
  className: "",
  shape: "RoundedBorder8",
  variant: "FillIndigo900",
  size: "sm",
};

export { Button };
