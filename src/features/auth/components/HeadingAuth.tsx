import { styled } from "styled-components";
export interface HeadingAuthProps {
  title: string;
}
export default function HeadingAuth({ title }: HeadingAuthProps) {
  return <HeadingAuthStyle>{title}</HeadingAuthStyle>;
}

const HeadingAuthStyle = styled.h1`
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 16px;
  color: var(--primary);
`;
