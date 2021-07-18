import React, { FC, useState } from 'react';
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
import { deletePost } from '../../store/actions-creators/post';
import { useDispatch } from 'react-redux';
import Button from '../../components/Button';
import { useRouter } from 'next/router';

const PostFlexStyled = styled.div`
    display: flex;
    gap: 20px;
    margin-bottom: 20px;

    @media (${({ theme }) => theme.media.tablet}) {
        text-align: center;
        flex-direction: column;
        width: 100%;
    }
`;

const PostContent = styled.div`
    width: 100%;
    padding: 20px;
    border: 1px solid ${({ theme }) => theme.colors.black};
    border-radius: 8px;
    box-shadow: 8px 8px 4px rgba(0, 0, 0, 0.1);
`;

const PostDeletedContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Post: FC<IPost> = ({ title, comments, body, id }) => {
    const dispatch = useDispatch();
    const router = useRouter();
    const [isDeleted, setIsDeleted] = useState(false);
    const onDeletePost = () => {
        dispatch(deletePost(id));
        setIsDeleted(true);
    };

    return (
        <MainLayout title={title}>
            <PostContent>
                {isDeleted ? (
                    <PostDeletedContent>
                        <p>Post was deleted</p>
                        <Button label={'Main page'} onClick={() => router.push('/')} />
                    </PostDeletedContent>
                ) : (
                    <>
                        <PostFlexStyled>
                            <Image src={articleImg} width={500} height={500} objectFit={'cover'} alt={posts[0].title} />
                            <div>
                                <Title>{title}</Title>
                                <Text>{body}</Text>
                            </div>
                        </PostFlexStyled>
                        <Button label={'Delete'} onClick={onDeletePost} />
                        <Comments comments={comments} />
                    </>
                )}
            </PostContent>
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
