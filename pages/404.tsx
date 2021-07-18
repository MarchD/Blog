import React, { FC } from 'react';
import { MainLayout } from '../layouts/MainLayout';
import Button from '../components/Button';
import { useRouter } from 'next/router';

const Custom404: FC = () => {
    const router = useRouter();
    return (
        <MainLayout title="Page not found">
            <p>404 - Page Not Found</p>
            <Button onClick={() => router.push('/')} label="Main page" />
        </MainLayout>
    );
};

export default Custom404;
