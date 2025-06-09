import React from "react";
import styled from "styled-components";
import Button, {type ButtonProps } from "./Button";

export interface ImageContentProps {
    image: string;
    buttons?: ButtonProps[];
    description: string;
}

const ImageContentContainer = styled.div`
    width: 500px;
    height: 600px;
    margin: 0 auto;
    justify-content: space-between;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;
    border: 1px solid #2f3334;
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.197));
    border-radius: 20px;
    box-shadow: 10px 10px 20px ;
    padding: 20px;
    gap: 20px;
`;

const ImageWrapper = styled.div`
    width: 100%;
    height: 300px;
    border-radius: 20px;
    overflow: hidden; 
    margin-bottom: 10px;
`;


const ImageContentImage = styled.img`
    width: 100%;
    height: 300px;
    border-radius: 20px;
    margin-bottom: 10px;
    transition: transform 0.4s ease-in-out; 
    
    &:hover {
        transform: scale(1.20); 
        cursor: pointer;
    }
`;

const ImageContentButtons = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
`;

const ImageContentDescription = styled.p`
    color: white;
    font-size: 1.2em;
    text-align: center;
    margin-top: 10px;
    white-space: normal;
`;

const ImageContent: React.FC<ImageContentProps> = ({ image, buttons, description }) => {
    return (
        <ImageContentContainer>
            <ImageWrapper>
                <ImageContentImage src={image} alt="Content" />
            </ImageWrapper>
            <ImageContentDescription>{description}</ImageContentDescription>
            {buttons && (
                <ImageContentButtons>
                    {buttons.map((button, index) => (
                        <Button key={index} {...button} />
                    ))}
                </ImageContentButtons>
            )}
            
        </ImageContentContainer>
    );
};

export default ImageContent;