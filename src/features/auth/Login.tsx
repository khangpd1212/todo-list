import { Form, notification } from "antd";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../common/components/CustomButton";
import CustomDivider from "../../common/components/CustomDivider";
import CustomInput from "../../common/components/CustomInput";
import CustomInputPassword from "../../common/components/CustomInputPassword";
import { useUser } from "../../common/hooks/useUser";
import { loginWithEmailAndPassword } from "../../services/auth";
import HeadingAuth from "./components/HeadingAuth";
import LinkNavigation from "./components/LinkNavigation";
import LoginSocial from "./components/LoginSocial";
import { RequestLoginUser } from "./state/AuthState";
export default function Login() {
  const { addUser, setToken } = useUser();
  const navigate = useNavigate();

  async function handleLogin({ email, password }: RequestLoginUser) {
    try {
      const user = await loginWithEmailAndPassword({ email, password });

      addUser({
        uid: user.uid,
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
      });
      const token = await user.getIdToken();
      setToken(token);
      navigate("/manage-user");
    } catch (error: any) {
      notification.error({
        message: "Error",
        description: error.message,
      });
    }
  }

  // useEffect(() => {
  //   data && addUser(data);
  //   getAllUser.forEach((doc) => {
  //     console.log(doc.data());
  //   });
  // }, [data]);

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
          <CustomButton type="primary" htmlType="submit">
            Sign in
          </CustomButton>
        </Form.Item>
      </Form>
      <LinkNavigation url="/register">Register account</LinkNavigation>
    </>
  );
}
