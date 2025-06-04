import React from "react";
import styled from "styled-components";
import Card, {type CardProps} from "./Card";

interface CardListProps {
    title?: string;
    titleImage?: string;
    cards: CardProps[];
}

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 50px;
`;

const CardGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 20px;
    padding: 20px;
`;

const TitleContainer = styled.div`
    display: flex;
    margin-left: 50px;
`;

const TitleWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
`;

const StyledTitle = styled.h2`
    color: white;
    font-size: 2em;
    margin-bottom: 20px;
    font-family: 'cyberdyne', sans-serif;
`;

const StyledTitleImage = styled.img`
    width: 50px;
    height: 50px;
    margin-right: 10px;
`;

const CardList: React.FC<CardListProps> = ({ title, titleImage, cards }) => {
    return (
        <CardContainer>
            {title && (
                <>
                    <TitleContainer>
                        
                        <TitleWrapper>
                            {titleImage && <StyledTitleImage src={titleImage} alt="Title Image" />}
                            <StyledTitle>{title}</StyledTitle>
                        </TitleWrapper>
                    </TitleContainer>
                </>
            )}
            <CardGrid>
                {cards.map((card, index) => (
                    <Card key={index} {...card} />
                ))}
            </CardGrid>
        </CardContainer>
    );
};

export default CardList;



