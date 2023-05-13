import { Input, InputProps } from "antd";
import { styled } from "styled-components";

export default function CustomInput(props: InputProps) {
  return <StyleInput {...props} />;
}

const StyleInput = styled(Input)`
  background-color: var(--gray200);
  padding: 12px 16px;
  border-radius: 12px;
`;
