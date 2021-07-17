import React from 'react';
import { MainLayout } from '../layouts/MainLayout';
import { Posts } from '../components/Posts/Posts';

const Blog: React.FC = () => {
    return (
        <MainLayout>
            <section>
                <Posts />
            </section>
        </MainLayout>
    );
};

export default Blog;
