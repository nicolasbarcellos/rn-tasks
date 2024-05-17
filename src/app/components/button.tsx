import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import React, { ReactNode } from "react";

type ButtonProps = TouchableOpacityProps & {
  children: ReactNode;
};

type ButtonIconProps = {
  children: ReactNode;
};

function Button({ children, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity
      className="rounded-md items-center justify-center p-4"
      activeOpacity={0.7}
      {...rest}
    >
      {children}
    </TouchableOpacity>
  );
}

function ButtonIcon({ children }: ButtonIconProps) {
  return children;
}

Button.Icon = ButtonIcon;

export { Button };
