import React, { FC, ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import Input from '../../components/Input';
import { MainLayout } from '../../layouts/MainLayout';
import Button from '../../components/Button';
import { Title } from '../../components/Title/Title';
import { useRouter } from 'next/router';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { setText, setTitle } from '../../store/actions-creators/newPost';

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
    const [active, setActive] = useState(false);
    const router = useRouter();
    const { title, text } = useTypedSelector((state) => state.newPost);
    const dispatch = useDispatch();

    return (
        <MainLayout>
            {!active ? (
                <>
                    <Title>Create a new post</Title>

                    <CreatePostFormStyled>
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
                        <Button onClick={() => setActive(true)} label={'Create'} />
                    </CreatePostFormStyled>
                </>
            ) : (
                <CreatePostWrapper>
                    <p>Post was created</p>
                    <Button onClick={() => router.push('/')} label={'На главную'} />
                </CreatePostWrapper>
            )}
        </MainLayout>
    );
};

export default CreatePost;
