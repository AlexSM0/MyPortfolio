import Button from "./components/Button";
import CardList from "./components/CardList";
import type { CardProps } from "./components/Card";
import { GlobalFonts } from "./styles/fonts";
import ProfileImg from "./components/ProfileImg";
import Tabs from "./components/Tabs";
import UserDescription from "./components/UserDescription";
import bgImage from "./assets/bgimage.jpg";
import cssImage from "./assets/css.svg";
import documentImg from "./assets/document.svg";
import gitImage from "./assets/git.svg";
import githubLogo from "./assets/github.svg";
import htmlImage from "./assets/html.svg";
import jiraImage from "./assets/jira.svg";
import linkedinLogo from "./assets/linkedin.svg";
import listImage from "./assets/listImg.svg";
import pythonImage from "./assets/python.svg";
import reactImage from "./assets/react.svg";
import { styled } from "styled-components";
import typescriptImage from "./assets/typescript.svg";
import userImg from "./assets/profilePic.svg";

const Display = styled.div`
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

const TabWrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
  width: fit-content;
  height: fit-content;
  padding: 10px;
  gap: 10px;
`;

const UserWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

const UserDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin-top: 20px;
`;

const SkillsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function App() {

  const links : string[] = ["About me", "Projects", "Contact"];

  const cards : CardProps[] = [
    {
      title: "HTML",
      image: htmlImage,
      size: "small",
      color: "blue"
    },
    {
      title: "CSS",
      image: cssImage,
      size: "small",
      color: "blue"
    },
    {
      title: "TypeScript",
      image: typescriptImage,
      size: "small",
      color: "blue"
    },
    {
      title: "React",
      image: reactImage,
      size: "small",
      color: "blue"
    },
    {
      title: "Python",
      image: pythonImage,
      size: "small",
      color: "blue"
    },
    {
      title: "Git",
      image: gitImage,
      size: "small",
      color: "blue"
    },
    {
      title: "Jira",
      image: jiraImage,
      size: "small",
      color: "blue"
    },
    {
      title: "GitHub",
      image: githubLogo,
      size: "small",
      color: "blue"
    }
  ];

  return (
    <>
      <GlobalFonts />
      <Display>
        <TabWrapper>
          <Tabs labels={links} onClick={(label) => console.log(label)} />
        </TabWrapper>
        <UserWrapper>
          <ProfileImg src={userImg} alt="User Profile" />
          <UserDescriptionWrapper>
            <UserDescription bio="Lorem ipsum dolor sit amet, 
              consectetur adipiscing elit. Sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua." 
              name="Alexander Fuentes Rodríguez"
              subtitle="Junior Frontend developer">
            </UserDescription>
          </UserDescriptionWrapper>
        </UserWrapper>
        <ButtonsWrapper>
          <Button onClick={() => console.log("Button clicked!")} text="Github" image={githubLogo} color="blue" isLink={true}/>
          <Button onClick={() => console.log("Button clicked!")} text="Linkedin" image={linkedinLogo} color="blue" isLink={true}/>
          <Button onClick={() => console.log("Button clicked!")} text="CV" image={documentImg} color="blue" isLink={false}/>
        </ButtonsWrapper>
        <SkillsWrapper>
          <CardList title="Skills" titleImage={listImage} cards={cards}>

          </CardList>
        </SkillsWrapper>
        
      </Display>
    </>
  )
}

export default App
