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

const CreatePostFormStyled = styled.form`
    display: flex;
    flex-direction: column;
    row-gap: 5px;
    width: 700px;
`;

const CreatePostWrapper = styled.div`
    width: 100%;
    text-align: center;

    p {
        margin-bottom: 20px;
    }
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
        axios
            .post('https://simple-blog-api.crew.red/posts', { title, body: text })
            .then(() => setActive(true))
            .catch(() => dispatch(setNewPostError('Something went wrong')));
    };

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <MainLayout>
            {!active ? (
                <>
                    <Title>Create a new post</Title>

                    <CreatePostFormStyled
                        onSubmit={(event) => {
                            event.preventDefault();
                            createNewPost();
                        }}
                    >
                        {error && <div>error</div>}
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
                </>
            ) : (
                <CreatePostWrapper>
                    <p>Post was created</p>
                    <Button onClick={() => router.push('/')} label={'Back'} />
                </CreatePostWrapper>
            )}
        </MainLayout>
    );
};

export default CreatePost;
