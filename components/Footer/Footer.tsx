import React from 'react';
import styled from 'styled-components';

const FooterStyled = styled.footer`
    background-color: #758d99,
    color: #15171a
`;

export const Footer: React.FC = () => {
    const date = new Date().getFullYear();
    return (
        <FooterStyled>
            <p>{date}</p>
        </FooterStyled>
    );
};
