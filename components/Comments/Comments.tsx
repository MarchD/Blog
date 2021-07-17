import React from 'react';
import styled from 'styled-components';
import { CommentsItem } from './CommentsItem';
import { IComments } from '../../types/post';
import { Title } from '../Title/Title';

const CommentsStyled = styled.div`
    padding: 30px 40px;
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.colors.gray};
`;

const CommentsListStyled = styled.ul`
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    row-gap: 10px;
`;

export const Comments: React.FC<IComments> = (props) => {
    return (
        <CommentsStyled>
            <Title>Comments:</Title>
            <CommentsListStyled>
                {props.comments.map((comment) => (
                    <CommentsItem {...comment} key={comment.id} />
                ))}
            </CommentsListStyled>
        </CommentsStyled>
    );
};
