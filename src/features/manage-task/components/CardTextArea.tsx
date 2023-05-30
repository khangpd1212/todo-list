import { Input } from "antd";
import { TextAreaProps } from "antd/es/input";
import { styled } from "styled-components";

interface CardTextAreaProps {
  placeholder: string;
  callback: (value: string) => void;
}
const { TextArea } = Input;
export default function CardTextArea(props: CardTextAreaProps & TextAreaProps) {
  const { placeholder, callback, ...propsOther } = props;
  const onChangeValue = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    callback(e.target.value);
  };

  return (
    <CardTextAreaStyles
      {...propsOther}
      autoSize={{ minRows: 3, maxRows: 6 }}
      placeholder={placeholder}
      onChange={(e) => onChangeValue(e)}
    />
  );
}
const CardTextAreaStyles = styled(TextArea)`
  border: 1px solid rgba(35, 35, 35, 0.16) !important;
  background-color: #fcfffc;
  &:hover,
  &:focus {
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.26);
  }
`;
