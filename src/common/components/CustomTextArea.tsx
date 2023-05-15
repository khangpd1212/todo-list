import React from "react";
import { Input } from "antd";
import { TextAreaProps } from "antd/es/input";
import { styled } from "styled-components";

const { TextArea } = Input;
export default function CustomTextArea(props: TextAreaProps) {
  return <StyleTextArea {...props} />;
}
const StyleTextArea = styled(TextArea)`
  background-color: var(--gray200);
  padding: 12px 16px;
  border-radius: 12px;
`;
