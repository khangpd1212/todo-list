import { Layout, Menu, MenuProps } from "antd";
import { UserOutlined } from "@ant-design/icons"
import { styled } from "styled-components";
import CustomButton from "../common/components/CustomButton";
import { PlusOutlined } from "@ant-design/icons"
import { ReactComponent as ManageTaskIcon } from "../assets/icons/manage-task.svg";
import { useNavigate } from "react-router-dom";
const { Sider } = Layout;
interface NavbarProps {
    collapsed: boolean
}
export default function Navbar(props: NavbarProps) {
    const { collapsed } = props
    const navigation = useNavigate()

    const handleSelectedMenu: MenuProps['onSelect'] = ({ key }) => {
        navigation(key)
    }
    return (
        <SiderStyle trigger={null} width="100%">
            <LogoStyle src="src/assets/images/logo-white.png" />
            <MenuStyle
                mode="inline"
                defaultSelectedKeys={['manage-user']}
                items={[
                    {
                        key: 'manage-user',
                        icon: <UserOutlined />,
                        label: 'Manage User'
                    },
                    {
                        key: 'manage-task',
                        icon: <ManageTaskIcon />,
                        label: 'Manage Task',
                    },
                ]}
                onSelect={handleSelectedMenu}
            />
            <ContainerButton>
                <CustomButton type="default" style={{ padding: "24px 0" }}><PlusOutlined />New Space</CustomButton>
            </ContainerButton>
        </SiderStyle>
    )
}

const SiderStyle = styled(Sider)`
    position: absolute !important;
    z-index: 1;
    height: 100%;
    background: linear-gradient(270deg, #134BA4 -0.73%, #2B5CAB 54.15%, #36517C 100%) !important;
    .ant-layout-sider-children{
        display: flex;
        flex-direction: column;
    }
`
const MenuStyle = styled(Menu)`
    background: inherit;
    color: var(--white);
    width: 250px;
    padding: 0 20px;
    .ant-menu-item {
        padding: 26px 16px;
        font-size: 16px;
        border-radius: 8px;
    }
    .ant-menu-item:hover{
        color: var(--white) !important;
    }
    .ant-menu-item:active{
        background-color: rgba(0, 0, 0, 0.06) !important;
    }
    .ant-menu-item-selected{
        background: rgba(0, 0, 0, 0.2);
        font-weight: 600;
        color: var(--white);
    }
`

const LogoStyle = styled.img`
    margin: 36px 0px 52px 30px;
    width: 120px;
`

const ContainerButton = styled.div`
    width: 250px;
    padding: 0 20px;
    margin-top: auto;
    margin-bottom: 36px;
`