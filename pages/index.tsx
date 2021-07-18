import React from 'react';
import { MainLayout } from '../layouts/MainLayout';
import Posts from '../components/Posts/Posts';
import { NextThunkDispatch, wrapper } from '../store';
import { getPosts } from '../store/actions-creators/post';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { NextPage } from 'next';
import Head from 'next/head';

const Blog: NextPage = () => {
    const { posts, error } = useTypedSelector((state) => state.posts);

    return (
        <>
            <Head>
                <title>Blog</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <MainLayout>
                <section>{error ? <p>{error}</p> : <Posts posts={posts} />}</section>
            </MainLayout>
        </>
    );
};

export default Blog;

export const getServerSideProps = wrapper.getServerSideProps(async ({ store }) => {
    const dispatch = store.dispatch as NextThunkDispatch;
    await dispatch(await getPosts());
});
