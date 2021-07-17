import React from 'react';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import styled from 'styled-components';

const MainLayoutStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh;
`;

export const MainLayout: React.FC = ({ children }) => {
    return (
        <MainLayoutStyled>
            <Header />
            {children}
            <Footer />
        </MainLayoutStyled>
    );
};
