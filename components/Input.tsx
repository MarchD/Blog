import React, { InputHTMLAttributes } from 'react';
import styled from 'styled-components';

interface InputState {
    onClick(): void;
}

const InputStyled = styled.input`
    width: 100%;
    padding: 10px 30px;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.gray};
    border: 1px solid ${({ theme }) => theme.colors.blue};
    border-radius: 2px;

    &:focus {
        outline-color: ${({ theme }) => theme.colors.blue};
    }

    &::placeholder {
        color: ${({ theme }) => theme.colors.blue};
    }
`;

const Input: React.FC<InputHTMLAttributes<InputState>> = (props) => {
    return <InputStyled {...props} />;
};

export default Input;
