import React from 'react';
import styled from 'styled-components';
import { IComment } from '../../types/post';
import { Text } from '../Text';

const CommentsItemStyled = styled.li`
    padding: 10px 20px;
    background-color: ${({ theme }) => theme.colors.blueLight};
    border: 1px solid ${({ theme }) => theme.colors.grayLight};
    border-radius: 8px;
`;

export const CommentsItem: React.FC<IComment> = ({ body }) => {
    return (
        <CommentsItemStyled>
            <Text>{body}</Text>
        </CommentsItemStyled>
    );
};
