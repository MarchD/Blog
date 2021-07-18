import React, { FC } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import styled from 'styled-components';
import { Container } from '../components/Container';
import Head from 'next/head';

interface MainLayoutProps {
    title?: string;
}

const MainLayoutStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh;
`;

export const MainLayout: FC<MainLayoutProps> = ({ title, children }) => {
    return (
        <>
            <Head>
                <title>{title ? `${title} |` : ''} Blog</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <MainLayoutStyled>
                <Header />
                <Container>{children}</Container>
                <Footer />
            </MainLayoutStyled>
        </>
    );
};
