import React from 'react';
import styled from 'styled-components';
import Input from '../../components/Input';
import { MainLayout } from '../../layouts/MainLayout';
import Button from '../../components/Button';

const CreatePostFormStyled = styled.form`
    display: flex;
    flex-direction: column;
    row-gap: 5px;
    width: 700px;
`;

const CreatePost: React.FC = () => {
    return (
        <MainLayout>
            <CreatePostFormStyled>
                <Input placeholder={'Title'} />
                <Input placeholder={'Text'} />
                <Button onClick={() => {}} label={'Create'} />
            </CreatePostFormStyled>
        </MainLayout>
    );
};

export default CreatePost;
