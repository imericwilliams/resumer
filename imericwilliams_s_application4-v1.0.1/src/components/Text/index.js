import React from "react";
const variantClasses = {
  h1: "font-bold md:text-[48px] sm:text-[48px] text-[97px]",
  h2: "font-bold md:text-[48px] sm:text-[48px] text-[61px]",
  h3: "font-bold sm:text-[38px] md:text-[44px] text-[48px]",
  h4: "sm:text-[30px] md:text-[32px] text-[34px]",
  h5: "sm:text-[20px] md:text-[22px] text-[24px]",
  h6: "text-[20px]",
  body1: "text-[16px]",
};
const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
