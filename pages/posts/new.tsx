import React, { FC, ChangeEvent, useState, useEffect } from 'react';
import styled from 'styled-components';
import Input from '../../components/Input';
import { MainLayout } from '../../layouts/MainLayout';
import Button from '../../components/Button';
import { Title } from '../../components/Title/Title';
import { useRouter } from 'next/router';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { resetNewPost, setNewPostError, setText, setTitle } from '../../store/actions-creators/newPost';
import axios from 'axios';

const CreatePostStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 700px;
    margin: 0 auto;
    padding: 20px;
    text-align: center;
    border: 1px solid ${({ theme }) => theme.colors.black};
    border-radius: 8px;
    box-shadow: 8px 8px 4px rgba(0, 0, 0, 0.1);

    @media (${({ theme }) => theme.media.tablet}) {
        width: 100%;
    }
`;

const CreatePostFormStyled = styled.form`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 20px;
    width: 500px;
    margin-top: 30px;

    @media (${({ theme }) => theme.media.tablet}) {
        width: 100%;
    }
`;

const CreatePostError = styled.p`
    position: absolute;
    top: -15px;
    left: 0;
    font-size: 12px;
    color: ${({ theme }) => theme.colors.red};
`;

const CreatePost: FC = () => {
    const router = useRouter();
    const [active, setActive] = useState(false);
    const { title, text, error } = useTypedSelector((state) => state.newPost);
    const dispatch = useDispatch();

    useEffect(() => {
        return () => {
            dispatch(resetNewPost());
        };
    }, []);

    const createNewPost = () => {
        if (!title || !text) {
            dispatch(setNewPostError('Fields must be filled'));
            return;
        }
        axios
            .post('https://simple-blog-api.crew.red/posts', { title, body: text })
            .then(() => setActive(true))
            .catch(() => dispatch(setNewPostError('Something went wrong')));
    };

    return (
        <MainLayout title="Create a new post">
            <CreatePostStyled>
                {!active ? (
                    <>
                        <Title>Create a new post</Title>
                        <CreatePostFormStyled
                            onSubmit={(event) => {
                                event.preventDefault();
                                createNewPost();
                            }}
                        >
                            {error && <CreatePostError>{error}</CreatePostError>}
                            <Input
                                placeholder={'Title'}
                                value={title}
                                type="text"
                                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                                    dispatch(setTitle(event.target.value))
                                }
                            />
                            <Input
                                placeholder={'Text'}
                                value={text}
                                type="text"
                                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                                    dispatch(setText(event.target.value))
                                }
                            />
                            <Button label={'Create'} type="submit" />
                        </CreatePostFormStyled>
                    </>
                ) : (
                    <>
                        <p>Post was created</p>
                        <Button onClick={() => router.push('/')} label={'Back'} />
                    </>
                )}
            </CreatePostStyled>
        </MainLayout>
    );
};

export default CreatePost;
