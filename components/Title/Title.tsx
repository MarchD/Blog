import React from 'react';
import styled from 'styled-components';

export const TitleStyled = styled.h2`
    margin: 10px 0;
    color: ${({ theme }) => theme.colors.black};
`;

export const Title: React.FC = ({ children }) => {
    return <TitleStyled>{children}</TitleStyled>;
};
