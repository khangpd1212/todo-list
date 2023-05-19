import { Form } from "antd";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../common/components/CustomButton";
import CustomDivider from "../../common/components/CustomDivider";
import CustomInput from "../../common/components/CustomInput";
import CustomInputPassword from "../../common/components/CustomInputPassword";
import { useUser } from "../../common/hooks/useUser";
import { AppDispatch, RootState, useAppDispatch } from "../../store/store";
import HeadingAuth from "./components/HeadingAuth";
import LinkNavigation from "./components/LinkNavigation";
import LoginSocial from "./components/LoginSocial";
import { RequestLoginUser } from "./state/AuthState";
import { loginUser } from "./state/authActions";
export default function Login() {
  const { addUser, checkToken } = useUser();
  const { loading, data, error } = useSelector(
    (state: RootState) => state.auth
  );
  const dispatch: AppDispatch = useAppDispatch();
  const navigate = useNavigate();

  function handleLogin({ email, password }: RequestLoginUser) {
    dispatch(loginUser({ email, password }));
  }

  useEffect(() => {
    data && addUser(data);
  }, [data, addUser]);

  useEffect(() => {
    if (checkToken()) {
      navigate("/manage-user");
    }
  }, [navigate, checkToken]);

  return (
    <>
      <HeadingAuth title="Login to Your Account" />
      <LoginSocial subtitle="Login using social networks" />
      <CustomDivider>OR</CustomDivider>
      <Form
        name="form-login"
        style={{ maxWidth: 600 }}
        layout="vertical"
        onFinish={handleLogin}
        // onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          name="email"
          rules={[
            { required: true, message: "Please input your email!" },
            { type: "email", message: "Please input your format email!" },
          ]}
        >
          <CustomInput placeholder="Email" />
        </Form.Item>

        <Form.Item
          style={{ marginBottom: "16px" }}
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <CustomInputPassword placeholder="Password" />
        </Form.Item>
        <Form.Item>
          <CustomButton type="primary" htmlType="submit" loading={loading}>
            Sign in
          </CustomButton>
        </Form.Item>
      </Form>
      <LinkNavigation url="/register">Register account</LinkNavigation>
    </>
  );
}
