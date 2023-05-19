import { Card, CardProps } from "antd";
import { styled } from "styled-components";

const { Meta } = Card;
interface CustomCardProps {
  heading: string;
  description: string;
  imgSrc?: string;
}
function CustomCard(props: CustomCardProps & CardProps) {
  const { heading, description, imgSrc } = props;
  return (
    <CardStyle
      style={{ width: "100%" }}
      cover={<ImgStyle />}
      hoverable
      {...props}
    >
      <Meta
        title={<TitleCard>{heading}</TitleCard>}
        description={description}
      />
    </CardStyle>
  );
}
const CardStyle = styled(Card)`
  border: 1px solid rgba(35, 35, 35, 0.2);
  background-color: #fcfffc;
  width: 260px;
  .ant-card-extra {
    font-size: 20px;
  }
  .ant-card-body {
    padding: 16px;
  }
`;

const TitleCard = styled.div`
  font-size: 16px;
  color: var(--primary);
`;

const ImgStyle = styled.div`
  background-image: url("https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png");
  width: 260px !important;
  height: 200px;
  background-position: 50%;
  background-size: cover;
  background-repeat: no-repeat;
`;
export default CustomCard;
