import { EllipsisOutlined } from "@ant-design/icons";
import { Badge } from 'antd';
import { styled } from 'styled-components';

function CardProcess() {
    return (
        <ContainerCardProcess>
            <ContainerTitle>
                <TitleCard>Open</TitleCard>
                <Badge count={10} showZero color='var(--primary)' />
            </ContainerTitle>
            <EllipsisOutlined style={{fontSize: '20px'}}/>
        </ContainerCardProcess>
    );
}

const ContainerCardProcess = styled.div`
    margin-bottom: 24px;
    border: 1px solid rgba(35, 35, 35, 0.2);
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    border-radius: 8px;
    padding: 16px;
`
const ContainerTitle = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`
const TitleCard = styled.div`
    font-size: 16px;
    font-weight: 600;
    color: var(--primary);
    text-transform: uppercase;
`
export default CardProcess;