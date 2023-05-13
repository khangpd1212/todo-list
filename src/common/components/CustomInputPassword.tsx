import { Input } from "antd";
import { PasswordProps } from "antd/es/input";
import { styled } from "styled-components";

export default function CustomInputPassword(props: PasswordProps) {
  return <StyleInputPassword {...props} />;
}

const StyleInputPassword = styled(Input.Password)`
  background-color: var(--gray200);
  padding: 12px 16px;
  border-radius: 12px;
  .ant-input {
    background-color: inherit;
  }
`;
