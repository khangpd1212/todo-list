import { Form, FormProps } from "antd";
import CustomInput from "../../../common/components/CustomInput";
import CustomTextArea from "../../../common/components/CustomTextArea";

export default function FormTask(props: FormProps) {
  return (
    <Form layout="vertical" name="formTask" {...props}>
      <Form.Item
        name="taskName"
        rules={[
          {
            required: true,
            message: "Please input the task name",
          },
        ]}
      >
        <CustomInput placeholder="Task name" />
      </Form.Item>
      <Form.Item name="description">
        <CustomTextArea rows={3} placeholder="Write something..." />
      </Form.Item>
    </Form>
  );
}
