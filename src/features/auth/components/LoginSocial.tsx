import { styled } from "styled-components";
import { ReactComponent as IconFb } from "../../../assets/icons/fb.svg";
import { ReactComponent as IconGoogle } from "../../../assets/icons/google.svg";

interface LoginSocialProps {
  subtitle: string;
}

export default function LoginSocial({ subtitle }: LoginSocialProps) {
  return (
    <>
      <Subtitle>{subtitle}</Subtitle>
      <ContainerIconSocial>
        <IconGoogle />
        <IconFb />
      </ContainerIconSocial>
    </>
  );
}

const Subtitle = styled.h3`
  font-size: 24px;
  color: var(--gray500);
`;
const ContainerIconSocial = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 32px;
  justify-content: center;
  padding-bottom: 16px;
`;
