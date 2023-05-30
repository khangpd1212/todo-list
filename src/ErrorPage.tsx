import { Result } from "antd";
import { Link, useRouteError } from "react-router-dom";
import CustomButton from "./common/components/CustomButton";

export default function ErrorPage() {
  const error: any = useRouteError();
  const style = {
    button: {
      width: "auto",
    },
  };
  return (
    <Result
      status="404"
      title="Oops!"
      subTitle={error.statusText || error.message}
      extra={
        <Link to="/">
          <CustomButton style={style.button} type="primary">
            Back Home
          </CustomButton>
        </Link>
      }
    />
  );
}
