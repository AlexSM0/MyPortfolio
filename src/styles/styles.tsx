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
  display: flex;
  margin-bottom: 20px;
  width: fit-content;
  height: fit-content;
  padding: 10px;
  gap: 10px;
`;

export const UserWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

export const UserDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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