import React, { FC } from 'react';
import { MainLayout } from '../layouts/MainLayout';
import Button from '../components/Button';
import { useRouter } from 'next/router';
import styled from 'styled-components';

const Custom404Styled = styled.div`
    text-align: center;
`;

const Custom404: FC = () => {
    const router = useRouter();
    return (
        <MainLayout title="Page not found">
            <Custom404Styled>
                <p>404 - Page Not Found</p>
                <Button onClick={() => router.push('/')} label="Main page" />
            </Custom404Styled>
        </MainLayout>
    );
};

export default Custom404;
