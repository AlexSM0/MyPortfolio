import React from "react";
import Tag, { type TagProps } from "./Tag";
import styled from "styled-components";
import ImageContent, {type ImageContentProps} from "./ImageContent";

interface InfoItemProps {
    title: string;
    titleColor?: string;
    subtitle: string;
    imageContent: ImageContentProps;
    tags: TagProps[];
    titleImage: string;
}

const InfoItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;
`;

const InfoItemTitle = styled.h2<{ titleColor?: string }>`
    color: ${(props) => props.titleColor || 'white'};
    font-size: 2em;
    font-family: 'cyberdyne', sans-serif;
`;

const InfoItemImageTitle = styled.img`
    width: 50px;
    height: 50px;
    margin-right: 10px;
`;

const InfoItemTittleWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
`;

const InfoItemSubtitle = styled.p`
    color: white;
    font-size: 1.2em;
`;

const InfoItemTags = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin: 10px 0;
`;

const InfoItemImage = styled.div`
    display: flex;
    justify-content: center;

`;


const InfoItem: React.FC<InfoItemProps> = ({ title, titleImage, subtitle, tags, imageContent, titleColor}) => {
    return (
        <InfoItemContainer>
            <InfoItemTittleWrapper>
                <InfoItemImageTitle src={titleImage} alt="Title Image" />
                <InfoItemTitle titleColor={titleColor}>{title}</InfoItemTitle>
            </InfoItemTittleWrapper>
            <InfoItemSubtitle>{subtitle}</InfoItemSubtitle>
            <InfoItemTags>
                {tags.map((tag, index) => (
                    <Tag key={index} {...tag} />
                ))}
            </InfoItemTags>
            <InfoItemImage>
                <ImageContent image={imageContent.image} buttons={imageContent.buttons} description={imageContent.description} />
            </InfoItemImage>
        </InfoItemContainer>
    );
}
export default InfoItem;
