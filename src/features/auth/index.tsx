import { Navigate, Outlet } from "react-router-dom";
import { styled } from "styled-components";
import { useUser } from "../../common/hooks/useUser";

export default function Auth() {
  const { checkToken } = useUser();
  return (
    <>
      {checkToken() ? (
        <Navigate to="/manage-user" />
      ) : (
        <BgAuth>
          <ContainerForm>
            <WrapperForm>
              <Outlet />
            </WrapperForm>
          </ContainerForm>
        </BgAuth>
      )}
    </>
  );
}

const BgAuth = styled.div`
  /* width: 100%; */
  height: 100vh;
  padding: 0px max(5em, 50vw - 24.2em);
  background: linear-gradient(
    270deg,
    #134ba4 -0.73%,
    #2b5cab 54.15%,
    #36517c 100%
  );
`;
const ContainerForm = styled.div`
  height: 100%;
  padding: 0px 8.62em;
  background-color: var(--white);
  border-radius: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
const WrapperForm = styled.div`
  width: 37.1em;
`;
