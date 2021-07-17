import React from 'react';
import styled from 'styled-components';
import { INavItem } from '../../types/router';
import { useRouter } from 'next/router';

const NavItemStyled = styled.li`
    position: relative;
    padding: 10px 0;
    color: ${({ theme }) => theme.colors.gray};
    cursor: pointer;

    &::after {
        content: '';
        position: absolute;
        width: 0;
        height: 2px;
        background-color: ${({ theme }) => theme.colors.gray};
        bottom: 5px;
        left: 0;
        transition: width 0.2s linear;
    }

    &:hover::after {
        width: 100%;
    }
`;

export const NavItem: React.FC<INavItem> = ({ href, title }) => {
    const router = useRouter();
    return (
        <NavItemStyled key={href} onClick={() => router.push(href)}>
            {title}
        </NavItemStyled>
    );
};
