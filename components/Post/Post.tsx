import React from 'react';
import styled from 'styled-components';
import { Title } from '../Title/Title';
import { IPost } from '../../types/post';
import { Text } from '../Text';
import Image from 'next/image';
import { articleIco } from '../../assets/icons/icons';

const PostStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 10px;
    max-width: 30%;
    padding: 10px 20px;
    border: 1px solid ${({ theme }) => theme.colors.grayLight};
    border-radius: 8px;
`;

export const Post: React.FC<IPost> = ({ title, body }) => {
    return (
        <PostStyled>
            <Image src={articleIco} width={150} height={200} alt={title} objectFit={'contain'} />
            <Title>{title}</Title>
            <Text>{body}</Text>
        </PostStyled>
    );
};
