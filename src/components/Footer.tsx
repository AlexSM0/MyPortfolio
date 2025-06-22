import React from "react";
import styled from "styled-components";
import { type ButtonProps } from "./Button";
import Button from "./Button";

interface FooterProps {
    buttons?: ButtonProps[];
}

const FooterContainer = styled.footer`
    width: 100%;
    height: 100px;
    background-color: #2f3334;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 1.2em;
    font-family: 'cyberdyne', sans-serif;
    white-space: nowrap;
    flex-direction: row;
    gap: 20px;
    @media (max-width: 769px) {
       flex-direction: column;
    }
`;

const FooterText = styled.p`
    margin: 0;
    @media (max-width: 769px) {
       font-size: 0.9em;
    }
`;

const FooterButtons = styled.div`
    display: flex;
`;

const Footer: React.FC<FooterProps> = ({ buttons }) => {
    return (
        <FooterContainer>
            <FooterText>2025 alexanderfuentes.dev</FooterText>
            <FooterButtons>
                {buttons?.map((button, index) => (
                    <Button key={index} {...button} />
                ))}
            </FooterButtons>
        </FooterContainer>
    );
}

export default Footer;