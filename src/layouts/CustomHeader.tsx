import { Avatar, Layout } from 'antd';
import { styled } from 'styled-components';
import CustomSearch from '../common/components/CustomSearch';
const { Header } = Layout;
function CustomHeader() {
    return (
        <HeaderStyle>
            <HeadingHeader>KD Project</HeadingHeader>
            <HeaderRight>
                <CustomSearch style={{ width: 500 }} />
                <Avatar size={40}>K</Avatar>
            </HeaderRight>
        </HeaderStyle>
    );
}

const HeaderStyle = styled(Header)`
    border-top-left-radius: 60px;
    padding: 50px;
    background-color: var(--white);
    color: inherit;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const HeadingHeader = styled.div`
    font-size: 24px;
    color: var(--primary);
    font-weight: 600;
`
const HeaderRight = styled.div`
    display: flex;
    align-items: center;
    gap: 24px;
`
export default CustomHeader;