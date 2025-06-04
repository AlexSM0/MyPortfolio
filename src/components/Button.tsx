import React from "react";
import linkImg from "../assets/link.svg";
import styled from "styled-components";

interface ButtonProps{
    color?: "blue" | "purple";
    size?: "small" | "medium" | "large";
    onClick: () => void;
    image?: string;
    text: React.ReactNode;
    isLink?: boolean;
    isCard?: boolean;
}

const StyledButton = styled.button<ButtonProps>`
    display: flex;
    flex-direction: flex-start;
    background-color: black;
    border-radius: 10px;
    cursor: pointer;
    align-items: center;
    gap : 10px;
    padding: 22px;
    color: white;
    &:hover {opacity: 0.8;}

    width: ${(props) => {
        switch (props.size) {
            case "small":
                return "80px";
            case "medium":
                return "160px";
            case "large":
                return "160px";
            default:
                return "120px";
        }
    }};

    height: ${(props) => {
        switch (props.size) {
            case "small":
                return "30px";
            case "medium":
                return "40px";
            case "large":
                return "50px";
            default:
                return "40px";
        }
    }};
    
    font-size: ${(props) => {
        switch (props.size) {
            case "small":
                return "12px";
            case "medium":
                return "16px";
            case "large":
                return "20px";
            default:
                return "16px";
        }
    }};

    border: 1px solid ${(props) => props.color === "blue" ? "#74C9E3" : "#7F007E"};


`;

interface StyledImageProps {
    size?: "small" | "medium" | "large";
}

const StyledImage = styled.img<StyledImageProps>`
    width: ${(props) => {
        switch (props.size) {
            case "small":
                return "20px";
            case "medium":
                return "30px";
            case "large":
                return "40px";
            default:
                return "30px";
        }
    }};
    height: ${(props) => {
        switch (props.size) {
            case "small":
                return "20px";
            case "medium":
                return "30px";
            case "large":
                return "40px";
            default:
                return "30px";
        }
    }};

`;

interface StyledImageLinkProps {
    size?: "small" | "medium" | "large";
}

const StyledImageLink = styled.img<StyledImageLinkProps>`
    width: ${(props) => {
        switch (props.size) {
            case "small":
                return "15px";
            case "medium":
                return "20px";
            case "large":
                return "40px";
            default:
                return "30px";
        }
    }
    };
    height: ${(props) => {
        switch (props.size) {
            case "small":
                return "15px";
            case "medium":
                return "20px";
            case "large":
                return "40px";
            default:
                return "30px";
        }
    }
    };
`;

const Button: React.FC<ButtonProps> = ({ color = "blue", size = "medium", onClick, image, text, isLink }) => {
    if (isLink) {
        return (
            <StyledButton color={color} size={size} onClick={onClick} text={text}>
                {image && (
                    <StyledImage src={image} alt="Button Icon" size={size} />
                )}
                {text}
                <StyledImageLink src={linkImg} alt="Link Icon" size={size} />
            </StyledButton>
        );
    }
    return (
        <StyledButton color={color} size={size} onClick={onClick} text={text}>
            {image && (
                <StyledImage src={image} alt="Button Icon" size={size} />
            )}
            {text}
        </StyledButton>
    );
}

export default Button;