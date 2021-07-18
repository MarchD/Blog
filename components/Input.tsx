import React from 'react';
import styled from 'styled-components';

interface InputProps {
    onChange: (e: string) => void;
    placeholder?: string;
    value: string | number;
    type: string;
}

type ReactInput = React.InputHTMLAttributes<HTMLInputElement>;
type InputArgs = InputProps & Omit<ReactInput, keyof InputProps>;

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

const Input = ({ onChange, ...config }: InputArgs) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value);
    };
    return <InputStyled {...config} onChange={handleChange} />;
};

export default Input;
