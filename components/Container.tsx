import React from 'react';
import styled from 'styled-components';

const ContainerStyled = styled.div`
    max-width: 1200px;
    margin: 0 auto;
`;

export const Container: React.FC = ({ children }) => {
    return <ContainerStyled>{children}</ContainerStyled>;
};
