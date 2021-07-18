import React from 'react';
import { MainLayout } from '../layouts/MainLayout';
import Posts from '../components/Posts/Posts';
import { NextThunkDispatch, wrapper } from '../store';
import { getPosts } from '../store/actions-creators/post';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { NextPage } from 'next';

const Blog: NextPage = () => {
    const { posts, error } = useTypedSelector((state) => state.posts);

    return (
        <MainLayout>
            <section>{error ? <p>{error}</p> : <Posts posts={posts} />}</section>
        </MainLayout>
    );
};

export default Blog;

export const getServerSideProps = wrapper.getServerSideProps(async ({ store }) => {
    const dispatch = store.dispatch as NextThunkDispatch;
    await dispatch(await getPosts());
});
