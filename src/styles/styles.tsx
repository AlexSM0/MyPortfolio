import bgImage from "../assets/bgimage.jpg";
import styled from "styled-components";

export const Display = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background-image: 
      linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url(${bgImage});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    z-index: 0;
  }

  > * {
    position: relative;
    z-index: 1;
  }
`;

export const TabWrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  display: flex;
  justify-content: center;
  padding: 10px 0;
`;



export const UserWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  gap: 20px;

  @media (min-width: 769px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
  }
`;


export const UserImageWrapper = styled.div`
  display: flex;
  justify-content: center;

  @media (min-width: 769px) {
    justify-content: flex-start;
  }
`;

export const UserDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 

  @media (min-width: 769px) {
    align-items: flex-start;
  }
`;
export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin-top: 20px;
`;

export const SkillsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ProjectsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ContactWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const TitleImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 40px;
  margin-bottom: 20px;
  width: 100%;
`;


export const TitleImage = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 10px;
`;

export const Title = styled.h2`
  color: white;
  font-size: 2.2em;
  font-family: 'cyberdyne', sans-serif;
  text-align: center;
  margin: 0;
`;


export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  padding-top: 80px;
`;
