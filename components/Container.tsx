import React from 'react';
import styled from 'styled-components';

const ContainerStyled = styled.div`
    max-width: 1200px;
    width: 100%;
    margin: 20px auto;

    @media (${({ theme }) => theme.media.notebook}) {
        padding: 20px;
    }
`;

export const Container: React.FC = ({ children }) => {
    return <ContainerStyled>{children}</ContainerStyled>;
};
