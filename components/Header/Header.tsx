import React from 'react';
import styled from 'styled-components';

const HeaderStyled = styled.header`
    height: 45px;
    color: #49505b;
`;

export const Header: React.FC = () => {
    return <HeaderStyled>header</HeaderStyled>;
};
