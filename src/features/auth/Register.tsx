import { Form } from "antd";
import CustomButton from "../../common/components/CustomButton";
import CustomDivider from "../../common/components/CustomDivider";
import CustomInput from "../../common/components/CustomInput";
import CustomInputPassword from "../../common/components/CustomInputPassword";
import HeadingAuth from "./components/HeadingAuth";
import LinkNavigation from "./components/LinkNavigation";
import LoginSocial from "./components/LoginSocial";
export default function Register() {
  return (
    <>
      <HeadingAuth title="Register Account" />
      <LoginSocial subtitle="Register using social networks" />
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
          <CustomInput placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="email"
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
          <CustomButton type="primary">Sign up</CustomButton>
        </Form.Item>
      </Form>
      <LinkNavigation url="/login">Login account</LinkNavigation>
    </>
  );
}