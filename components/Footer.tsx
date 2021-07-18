import React from 'react';
import styled from 'styled-components';

const FooterStyled = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    background-color: ${({ theme }) => theme.colors.blue};
    color: ${({ theme }) => theme.colors.white};
`;

export const Footer: React.FC = () => {
    const date = new Date().getFullYear();
    return (
        <FooterStyled>
            <p>{date}</p>
        </FooterStyled>
    );
};
