import React from "react";
import Button from "./Button";
import { ButtonInterface } from "../../../interfaces/button.interface";

const index: React.FC<ButtonInterface> = (props) => {
  const { children, ...restProps } = props;
  return <Button {...restProps}>{children}</Button>;
};

export default index;
