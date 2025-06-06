import {
ButtonsWrapper,
Display,
ProjectsWrapper,
SkillsWrapper,
TabWrapper,
UserDescriptionWrapper,
UserWrapper
} from "./styles/styles.tsx";

import Button from "./components/Button";
import CardList from "./components/CardList";
import type { CardProps } from "./components/Card";
import { GlobalFonts } from "./styles/fonts";
import InfoItem from "./components/InfoItem.tsx";
import MyccLogo from "./assets/MyccLogo.svg";
import ProfileImg from "./components/ProfileImg";
import Tabs from "./components/Tabs";
import UserDescription from "./components/UserDescription";
import cssImage from "./assets/css.svg";
import documentImg from "./assets/document.svg";
import flaskImg from "./assets/flask.svg";
import gitImage from "./assets/git.svg";
import githubLogo from "./assets/github.svg";
import htmlImage from "./assets/html.svg";
import jiraImage from "./assets/jira.svg";
import linkedinLogo from "./assets/linkedin.svg";
import listImage from "./assets/listImg.svg";
import myCallClientImage from "./assets/myCCImage.jpg";
import mysqlImage from "./assets/mysql.svg";
import projectImage from "./assets/projectImage.svg";
import pythonImage from "./assets/python.svg";
import reactImage from "./assets/react.svg";
import styled from "styled-components";
import typescriptImage from "./assets/typescript.svg";
import userImg from "./assets/profilePic.svg";
import versioningImage from "./assets/versioningToolImage.jpg";
import versioningLogo from "./assets/versioningLogo.svg";

const TitleImageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin-left: 50%;
  margin-top: 20px;
`;

const TitleImage = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 10px;
`;

const Title = styled.h2`
  color: white;
  font-size: 2em;
  font-family: 'cyberdyne', sans-serif;

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
      title: "MySQL",
      image: mysqlImage,
      size: "small",
      color: "blue"
    }
  ];

  const tags: { label: string; color: "blue" | "purple"; icon: string }[] = [
    { label: "Flask", color: "purple", icon: flaskImg },
    { label: "Python", color: "blue", icon: pythonImage },
    { label: "React", color: "blue", icon: reactImage }
  ];

  const projectButtons = [
    { text: "Ckeck out!", color: "purple", size: "medium", isLink: true, onClick: () => console.log("View Project clicked!"), image: projectImage },
    { text: "Code", color: "purple", size: "medium", isLink: true,  onClick: () => console.log("View Github clicked!"), image: githubLogo }
  ] as const;

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
        <TitleImageWrapper>
          <TitleImage src={projectImage} alt="List Icon" />
          <Title>My Projects</Title>
        </TitleImageWrapper>
        
        <ProjectsWrapper>
          
          <InfoItem
            title="My Call Client"
            titleImage={MyccLogo}
            subtitle="An easy tool for patient-nurse communication"
            tags={tags}
            imageContent={{
              image: myCallClientImage,
              buttons: [...projectButtons]
            }}
            titleColor="#FFA07A"
          />
          <InfoItem
            title="Versioning Tool"
            titleImage={versioningLogo}
            subtitle="A tool to manage and track changes in projects"
            tags={tags}
            imageContent={{
              image: versioningImage,
              buttons: [...projectButtons]
            }}
            titleColor="blue"
          />
        
        </ProjectsWrapper>
        
        <TitleImageWrapper>
          <TitleImage src={listImage} alt="List Icon" />
          <Title>Skills</Title>
        </TitleImageWrapper>

        <SkillsWrapper>
          <CardList cards={cards}/>
        </SkillsWrapper>


      </Display>
    </>
  )
}

export default App
