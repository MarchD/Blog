import React, { FC } from 'react';
import styled from 'styled-components';

interface InputProps {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    value: string | number;
    type: string;
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

const Input: FC<InputProps> = ({ onChange, ...config }) => {
    return <InputStyled {...config} onChange={onChange} />;
};

export default Input;
