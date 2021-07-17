import React from 'react';
import styled from 'styled-components';
import { Logo } from './Logo';
import { Nav } from './Nav/Nav';

const HeaderStyled = styled.header`
    display: flex;
    align-items: center;
    column-gap: 30px;
    height: 45px;
    margin: 0 50px;
    color: #49505b;
`;

export const Header: React.FC = () => {
    return (
        <HeaderStyled>
            <Logo />
            <Nav />
        </HeaderStyled>
    );
};
