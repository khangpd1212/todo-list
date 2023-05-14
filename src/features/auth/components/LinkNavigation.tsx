import { ReactNode } from "react"
import { Link } from "react-router-dom";
import { styled } from "styled-components";
interface LinkNavigationProps {
    children: ReactNode;
    url: string
}
export default function LinkNavigation({ children, url }: LinkNavigationProps) {
    return <LinkStyle to={url}>{children}</LinkStyle>
}

const LinkStyle = styled(Link)`
    color: var(--gray500);
    text-decoration: none;
    &:hover{
        color: var(--primary)
    }
`