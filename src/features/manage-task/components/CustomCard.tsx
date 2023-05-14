
import { Card } from 'antd';
import { styled } from 'styled-components';

const { Meta } = Card;
function CustomCard() {
    return (
        <CardStyle
            style={{ width: '100%', }}
            cover={<ImgStyle alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            hoverable
        >
            <Meta title={<TitleCard>dsad</TitleCard>} description="www.instagram.com" />
        </CardStyle>
    );
}
const CardStyle = styled(Card)`
    border: 1px solid rgba(35, 35, 35, 0.2);
    .ant-card-extra{
        font-size: 20px;
    }
`

const TitleCard = styled.div`
    font-size: 16px;
    color: var(--primary)
`

const ImgStyle = styled.img`
    width: 260px !important;
    height: 120px;
`
export default CustomCard;