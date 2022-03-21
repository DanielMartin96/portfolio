import React, { FC, ReactElement } from "react";

type ButtonProps = {
  color?: string;
  children: string;
};

const Button: FC<ButtonProps> = ({ color = "red", children }): ReactElement => {
  return (
    <button
      className={`px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-${color}-600 rounded-md hover:bg-${color}-500 focus:outline-none focus:ring focus:ring-${color}-300 focus:ring-opacity-80`}
    >
      {children}
    </button>
  );
};

export default Button;
