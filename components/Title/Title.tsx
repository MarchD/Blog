import React from 'react';
import styled from 'styled-components';

export const TitleStyled = styled.h2`
    height: 45px;
    color: #49505b;
`;

export const Title: React.FC = ({ children }) => {
    return <TitleStyled>{children}</TitleStyled>;
};
