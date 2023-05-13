import { Button, Form, Input } from "antd";
import CustomDivider from "../../common/components/CustomDivider";
import HeadingAuth from "./components/HeadingAuth";
import LoginSocial from "./components/LoginSocial";
import CustomInput from "../../common/components/CustomInput";
import CustomInputPassword from "../../common/components/CustomInputPassword";
import CustomButton from "../../common/components/CustomButton";
export default function Login() {
  return (
    <>
      <HeadingAuth title="Login to Your Account" />
      <LoginSocial subtitle="Login using social networks" />
      <CustomDivider>OR</CustomDivider>
      <Form
        name="form-login"
        style={{ maxWidth: 600 }}
        layout="vertical"
        // onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
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
          <CustomButton type="primary">Sign in</CustomButton>
        </Form.Item>
      </Form>
    </>
  );
}
