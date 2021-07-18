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
    width: 700px;
    margin: 0 auto;
    text-align: center;
`;

const CreatePostFormStyled = styled.form`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 5px;
`;

const CreatePostSuccess = styled.div`
    width: 100%;
    text-align: center;

    p {
        margin-bottom: 20px;
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
            {!active ? (
                <CreatePostStyled>
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
                            onChange={(event: ChangeEvent<HTMLInputElement>) => dispatch(setTitle(event.target.value))}
                        />
                        <Input
                            placeholder={'Text'}
                            value={text}
                            type="text"
                            onChange={(event: ChangeEvent<HTMLInputElement>) => dispatch(setText(event.target.value))}
                        />
                        <Button label={'Create'} type="submit" />
                    </CreatePostFormStyled>
                </CreatePostStyled>
            ) : (
                <CreatePostSuccess>
                    <p>Post was created</p>
                    <Button onClick={() => router.push('/')} label={'Back'} />
                </CreatePostSuccess>
            )}
        </MainLayout>
    );
};

export default CreatePost;
