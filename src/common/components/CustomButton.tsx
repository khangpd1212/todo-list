import { Button, ButtonProps } from "antd";
import { ReactNode } from "react";
import { styled } from "styled-components";

interface CustomButtonProps {
  children: ReactNode;
}
export default function CustomButton(props: ButtonProps & CustomButtonProps) {
  return <ButtonStyle {...props}>{props.children}</ButtonStyle>;
}

const ButtonStyle = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-radius: 8px;
  width: 100%;
  &.ant-btn-primary {
    background-color: var(--primary);
    font-size: 16px;
    font-weight: 600;
    padding: 22px 0px;
    color: var(--white);
  }
  &.ant-btn-primary:hover {
    background-color: #2e466e;
  }
`;