import React from "react";
import styled from "styled-components";

export interface TagProps {
    label: string;
    color?: "blue" | "purple" | "yellow";
    icon?: string;
}

const TagContainer = styled.div<{ color?: "blue" | "purple" | "yellow" }>`
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color : ${({ color}) => 
        color === "blue" ? "#74C9E3" : color === "purple" ? "#7F007E" : "#f7dc6f"};
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.434));
    width: fit-content;
    min-width: 150px;
    height: 10px;
    padding: 15px;
    border-radius: 15px;
    gap: 15px;
    @media (max-width: 769px) {

    }
`;

const TagLabel = styled.span`
    color: white;
    font-size: 1em;
    font-weight: bold;
`;

const TagIcon = styled.img`
    width: 20px;
    height: 20px;
    margin-right: 10px;
`;

const TagComponent: React.FC<TagProps> = ({ label, color, icon }) => {
    return (
        <TagContainer color={color}>
            {icon && <TagIcon src={icon} alt={`${label} icon`} />}
            <TagLabel>{label}</TagLabel>
        </TagContainer>
    );
}

export default TagComponent;

