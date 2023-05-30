import { Card, CardProps } from "antd";
import { styled } from "styled-components";

const { Meta } = Card;
interface CustomCardProps {
  title: string;
  description?: string;
  imgSrc?: string;
}
function CustomCard(props: CustomCardProps & CardProps) {
  const { title, description, imgSrc, ...propsOther } = props;
  return (
    <CardStyle cover={<ImgStyle src={imgSrc} />} {...propsOther}>
      <Meta title={<TitleCard>{title}</TitleCard>} description={description} />
    </CardStyle>
  );
}
const CardStyle = styled(Card)`
  border: 1px solid rgba(35, 35, 35, 0.16);
  background-color: #fcfffc;
  &:hover {
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.26);
  }
  .ant-card-extra {
    font-size: 20px;
  }
  .ant-card-body {
    padding: 16px;
    .ant-card-meta-title {
      margin-bottom: 0 !important;
    }
  }
`;

const TitleCard = styled.div`
  font-size: 16px;
  color: var(--primary);
`;

const ImgStyle = styled.div<{ src?: string }>`
  background-image: url(${(props) => props.src});
  width: 260px !important;
  height: ${(props) => (props.src ? "170px" : "0")};
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  background-size: cover;
  background-repeat: no-repeat;
`;
export default CustomCard;
