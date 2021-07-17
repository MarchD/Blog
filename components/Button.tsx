import React, { MouseEventHandler } from 'react';
import styled from 'styled-components';

interface ButtonProps {
    onClick: Function;
    label: string;
}

const ButtonStyled = styled.button`
    width: 200px;
    height: 45px;
    margin: 0 auto;
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.blue};
    border: 1px solid ${({ theme }) => theme.colors.black};
    border-radius: 8px;
    transition: box-shadow 0.1s linear;
    cursor: pointer;

    &:hover {
        box-shadow: 8px 8px 4px rgba(0, 0, 0, 0.1);
    }
`;

const Button: React.FC<ButtonProps> = ({ onClick, label }) => {
    const onClickHandler = (event: MouseEventHandler<HTMLButtonElement>) => {
        onClick();
    };

    return <ButtonStyled onClick={onClickHandler}>{label}</ButtonStyled>;
};

export default Button;
