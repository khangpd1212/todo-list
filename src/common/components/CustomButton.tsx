import { Button, ButtonProps } from "antd";
import { ReactNode } from "react";
import { styled } from "styled-components";

interface CustomButtonProps {
  children: ReactNode;
  isWidthAuto?: boolean;
}
export default function CustomButton(props: ButtonProps & CustomButtonProps) {
  const { children, isWidthAuto, ...propsOther } = props;
  const autoWidth = {
    width: "auto",
  };
  return (
    <ButtonStyle {...propsOther} style={isWidthAuto ? autoWidth : {}}>
      {children}
    </ButtonStyle>
  );
}

const ButtonStyle = styled(Button)`
  height: auto;
  border-radius: 8px;
  width: 100%;
  font-size: 16px;
  padding: 10px 20px;
  &.ant-btn-primary {
    background-color: var(--primary);
    font-weight: 600;
    color: var(--white);
  }
  &.ant-btn-primary:hover {
    background-color: #2e466e;
  }

  &.ant-btn-default {
    color: var(--primary);
    font-weight: 600;
  }

  &.ant-btn-text {
    color: var(--gray500);
  }
`;
