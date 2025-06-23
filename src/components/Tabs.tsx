import React from "react";
import { styled } from "styled-components";

interface TabProps {
    labels: string[];
    onClick: (label: string) => void;
}

const TabsContainer = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 30px;
  padding: 3px;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(5px);
  overflow-x: auto;
  max-width: 100%;
  box-sizing: border-box;
  margin: 10px;
  @media (max-width: 769px) {
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`;


const TabLink = styled.a`
  font-size: 1.2em;
  padding: 10px 20px;
  cursor: pointer;
  color: white;
  text-decoration: none;
  white-space: nowrap;
  box-sizing: border-box;
  
  @media (max-width: 769px) {
    font-size: 1em;
    padding: 6px 12px; // reducido aún más
  }
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

