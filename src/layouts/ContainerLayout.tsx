import { Layout } from "antd";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { styled } from "styled-components";
import CustomHeader from "./CustomHeader";
import Navbar from "./Navbar";
const { Content } = Layout;
export default function ContainerLayout() {
    const [collapsed, setCollapsed] = useState(false)
    return (
        <Layout hasSider style={{ height: '100vh' }}>
            <Navbar collapsed={true} />
            <LayoutStyle>
                <CustomHeader />
                <ContentStyle>
                    <Outlet />
                </ContentStyle>
            </LayoutStyle>
        </Layout>
    )
}

const LayoutStyle = styled(Layout)`
    position: relative;
    z-index: 2;
    margin-left: 250px;
    background-color: var(--white);
    color: var(--primary);
    border-radius: 60px 0px 0px 60px;
`

const ContentStyle = styled(Content)`
    margin: 10px 50px 0px 50px;
    overflow: initial;
`