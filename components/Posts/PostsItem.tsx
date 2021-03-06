import React from 'react';
import styled from 'styled-components';
import { Title } from '../Title/Title';
import { IPost } from '../../types/post';
import { Text } from '../Text';
import Image from 'next/image';
import { articleIco } from '../../assets/images';
import Link from 'next/link';

const PostsItemStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 10px;
    max-width: 500px;
    width: 100%;
    padding: 10px 20px;
    border: 1px solid ${({ theme }) => theme.colors.grayLight};
    border-radius: 8px;
    transition: box-shadow 0.1s linear;
    cursor: pointer;

    &:hover {
        box-shadow: 8px 8px 4px rgba(0, 0, 0, 0.1);

        h2 {
            color: ${({ theme }) => theme.colors.blue};
        }
    }
`;

export const PostsItem: React.FC<IPost> = ({ title, body, id }) => {
    return (
        <Link href={`/posts/${id}`} passHref>
            <PostsItemStyled>
                <Image src={articleIco} width={150} height={200} alt={title} objectFit={'contain'} />
                <Title>{title}</Title>
                <Text>{body}</Text>
            </PostsItemStyled>
        </Link>
    );
};
