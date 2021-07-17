import React from 'react';
import { MainLayout } from '../layouts/MainLayout';
import { PostList } from '../components/Post/PostList';

const Blog: React.FC = () => {
    return (
        <MainLayout>
            <section>
                <PostList />
            </section>
        </MainLayout>
    );
};

export default Blog;
