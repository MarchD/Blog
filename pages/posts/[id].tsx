import React, { FC } from 'react';
import { Title } from '../../components/Title/Title';
import { MainLayout } from '../../layouts/MainLayout';
import { posts } from '../../db/post';
import { Text } from '../../components/Text';
import { Comments } from '../../components/Comments/Comments';
import Image from 'next/image';
import { articleImg } from '../../assets/images';
import styled from 'styled-components';
import { wrapper } from '../../store';
import axios from 'axios';
import { IPost } from '../../types/post';

const PostFlexStyled = styled.div`
    display: flex;
    column-gap: 20px;
    margin-bottom: 20px;
`;

const Post: FC<IPost> = ({ title, comments, body }) => {
    return (
        <MainLayout>
            <section>
                <PostFlexStyled>
                    <Image src={articleImg} width={500} height={500} objectFit={'cover'} alt={posts[0].title} />
                    <div>
                        <Title>{title}</Title>
                        <Text>{body}</Text>
                    </div>
                </PostFlexStyled>

                <Comments comments={comments} />
            </section>
        </MainLayout>
    );
};

export default Post;

export const getServerSideProps = wrapper.getServerSideProps(async ({ params }) => {
    const response = await axios.get(`https://simple-blog-api.crew.red/posts/${params.id}`, {
        params: {
            _embed: 'comments',
        },
    });

    return {
        props: { ...response.data },
    };
});
