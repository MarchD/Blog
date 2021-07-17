import React from 'react';
import styled from 'styled-components';
import { INavItem } from '../../types/router';
import { NavItem } from './NavItem';

const NavStyled = styled.ul`
    display: flex;
    align-items: center;
    column-gap: 20px;
`;

const menu: INavItem[] = [{ title: 'Posts', href: '/posts' }];

export const Nav: React.FC = () => {
    return (
        <nav>
            <NavStyled>
                {menu.map((item) => (
                    <NavItem {...item} key={item.href} />
                ))}
            </NavStyled>
        </nav>
    );
};
