import React from "react";
import { styled } from "styled-components";

interface TabProps {
    labels: string[];
    onClick: (label: string) => void;
}

const TabsContainer = styled.div`
    display: flex;
    flex-direction: row;
    border: 1px solid #ccc;
    border-radius: 30px;
    padding: 10px;
`;

const TabLink = styled.a`
    font-size: 1.2em;
    padding: 10px 20px;
    cursor: pointer;
    color: white;
    text-decoration: none;
`;

const Tabs: React.FC<TabProps> = ({ labels, onClick }) => {
    return (
        <TabsContainer>
            {labels.map((label) => (
                <TabLink key={label} onClick={() => onClick(label)}>
                    {label}
                </TabLink>
            ))}
        </TabsContainer>
    );
};

export default Tabs;

