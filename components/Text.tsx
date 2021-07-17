import React from 'react';
import styled from 'styled-components';

const TextStyled = styled.p`
    font-size: ${({ fontSize }) => fontSize || '1.8rem'};
    font-weight: 400;
    color: ${({ theme }) => theme.colors.gray};
`;

export const Text: React.FC = ({ children }) => {
    return <TextStyled>{children}</TextStyled>;
};
