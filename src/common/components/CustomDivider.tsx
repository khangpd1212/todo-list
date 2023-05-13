import { Divider } from "antd";
import { styled } from "styled-components";
import { ReactNode } from "react";
export default function CustomDivider(props: { children: ReactNode }) {
  const { children } = props;
  return <StyleDivider>{children}</StyleDivider>;
}

const StyleDivider = styled(Divider)`
  &::after,
  &::before {
    background-color: var(--gray500);
  }
  .ant-divider-inner-text {
    color: var(--gray500);
  }
`;
