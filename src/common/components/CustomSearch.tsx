import { Input } from 'antd';
import { SearchProps } from 'antd/es/input';
import { styled } from 'styled-components';
const { Search } = Input;
function CustomSearch(props: SearchProps) {
    return (
        <SearchStyle placeholder="Search" {...props}/>
    );
}

const SearchStyle = styled(Search)`
    .ant-input{
        height: 46px;
        padding: 16px;
        border-radius: 12px;
        background-color: var(--gray200);
        border: none;
    }
    .ant-input::placeholder{
        color: var(--gray400);
    }
    .ant-input-group-addon{
        padding-left: 5px;
        border-radius: 12px;
        background-color: var(--gray200);
        color: var(--gray400);
    }
    .ant-input-group-addon > .ant-btn{
        height: 46px;
        width: 46px;
        background-color: transparent;
        border: none;
        box-shadow: none;
    }
`
export default CustomSearch;