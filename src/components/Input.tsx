import React from "react";

function Input({
  type,
  name,
  placeholder,
  ...rest
}: {
  type: string;
  name: string;
  placeholder: string;
}) {
  return <input type={type} name={name} placeholder={placeholder} {...rest} />;
}

export default Input;
