import { TextInput, TextInputProps } from "react-native";
import React from "react";

import { clsx } from "clsx";

type InputProps = TextInputProps & {
  isFocused: boolean;
};

export function Input({ isFocused = false, ...rest }: InputProps) {
  return (
    <TextInput
      className={clsx(
        "flex-1 text-base text-gray-100 border border-gray-700 bg-gray-500 rounded-md p-4",
        isFocused && "border-purpleDark"
      )}
      {...rest}
    />
  );
}
