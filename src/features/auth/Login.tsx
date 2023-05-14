import { Form } from "antd";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../common/components/CustomButton";
import CustomDivider from "../../common/components/CustomDivider";
import CustomInput from "../../common/components/CustomInput";
import CustomInputPassword from "../../common/components/CustomInputPassword";
import { AppDispatch, useAppDispatch } from "../../store/store";
import HeadingAuth from "./components/HeadingAuth";
import LinkNavigation from "./components/LinkNavigation";
import LoginSocial from "./components/LoginSocial";
import { loginUser } from "./state/authActions";
export default function Login() {
  const dispatch: AppDispatch = useAppDispatch();
  const navigate = useNavigate();

  function handleLogin(values: any){
    dispatch(loginUser(values))
    navigate('/manage-user')
  }

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
          rules={[{ required: true, message: "Please input your email!" }]}
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
          <CustomButton type="primary" htmlType="submit">Sign in</CustomButton>
        </Form.Item>
      </Form>
      <LinkNavigation url="/register">Register account</LinkNavigation>
    </>
  );
}