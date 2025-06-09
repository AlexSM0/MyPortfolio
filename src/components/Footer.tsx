import React from "react";
import styled from "styled-components";

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
`;

const FooterText = styled.p`
    margin: 0;
`;

const Footer: React.FC = () => {
    return (
        <FooterContainer>
            <FooterText>2025 alexanderfuentes.dev</FooterText>
        </FooterContainer>
    );
}

export default Footer;