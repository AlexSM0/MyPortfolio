import React from "react";
import styled from "styled-components";
import Card, {type CardProps} from "./Card";

interface CardListProps {
    cards: CardProps[];
}

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const CardGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 20px;
    padding: 20px;
`;


const CardList: React.FC<CardListProps> = ({ cards }) => {
    return (
        <CardContainer>
            <CardGrid>
                {cards.map((card, index) => (
                    <Card key={index} {...card} />
                ))}
            </CardGrid>
        </CardContainer>
    );
};

export default CardList;



