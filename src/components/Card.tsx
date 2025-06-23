import React from "react";
import styled from "styled-components";

export interface CardProps {
    title: string;
    image: string;
    size?: "small" | "medium" | "large";
    color?: "blue" | "purple";
}

interface StyledImageProps {
    size?: "small" | "medium" | "large";
}

const CardContainer = styled.div`
    display : flex;
    flex-direction: row;
    align-items: center;

    background-color: black;
    border-radius: 10px;
    padding: 20px;
    border: 1px solid ${(props: { color?: string }) => props.color === "blue" ? "#74C9E3" : "#6F42C1"};
    gap: 20px;
`;

const StyledImage = styled.img<StyledImageProps>`
    width: ${(props) => {
        switch (props.size) {
            case "small":
                return "60px";
            case "medium":
                return "160px";
            case "large":
                return "240px";
            default:
                return "160px";
        }
    }};
    height: ${(props) => {
        switch (props.size) {
            case "small":
                return "60px";
            case "medium":
                return "160px";
            case "large":
                return "240px";
            default:
                return "160px";
        }
    }};
`;

const StyledTitle = styled.h3`
    color: white;
    font-size: 1.5em;
`;
const Card: React.FC<CardProps> = ({ title, image, size = "medium", color = "blue" }) => {
    return (
        <CardContainer color={color}>
            <StyledImage src={image} alt={title} size={size} />
            <StyledTitle>{title}</StyledTitle>
        </CardContainer>
    );
}

export default Card;