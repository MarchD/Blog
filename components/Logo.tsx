import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import { logoIco } from '../assets/images';

const LogoStyled = styled.header`
    padding: 5px;
    color: #49505b;
    cursor: pointer;
`;

export const Logo: React.FC = () => {
    return (
        <LogoStyled>
            <Link href={'/'}>
                <a>
                    <Image src={logoIco} width={35} height={35} alt="logo" objectFit="contain" />
                </a>
            </Link>
        </LogoStyled>
    );
};
