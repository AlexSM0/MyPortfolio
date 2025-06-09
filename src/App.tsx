import {
ButtonsWrapper,
ContactWrapper,
ContentWrapper,
Display,
ProjectsWrapper,
SkillsWrapper,
TabWrapper,
Title,
TitleImage,
TitleImageWrapper,
UserDescriptionWrapper,
UserImageWrapper,
UserWrapper
} from "./styles/styles.tsx";

import Button from "./components/Button";
import CardList from "./components/CardList";
import type { CardProps } from "./components/Card";
import Footer from "./components/Footer.tsx";
import { GlobalFonts } from "./styles/fonts";
import InfoItem from "./components/InfoItem.tsx";
import Input from "./components/Input.tsx";
import MyccLogo from "./assets/MyccLogo.svg";
import ProfileImg from "./components/ProfileImg";
import Tabs from "./components/Tabs";
import UserDescription from "./components/UserDescription";
import atSign from "./assets/at-sign.svg";
import clipBoardImg from "./assets/clipboard.svg";
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
import typescriptImage from "./assets/typescript.svg";
import { useClipboard } from "./hooks/useClipboard"; // Ajusta la ruta según tu estructura
import userImg from "./assets/profilePic.svg";
import versioningImage from "./assets/versioningToolImage.jpg";
import versioningLogo from "./assets/versioningLogo.svg";

function App() {

  const { copied, copyToClipboard } = useClipboard();
  const email = "alex.fr.estudio@gmail.com";

  const scrollToSection = (label: string) => {
    const id = label.toLowerCase().replace(/\s/g, "-"); // e.g. "About me" => "about-me"
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const links : string[] = ["About me", "Projects", "Skills", "Contact"];

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
        <ContentWrapper>
          <TabWrapper>
            <Tabs labels={links} onClick={scrollToSection} />
          </TabWrapper>

          <UserWrapper id="about-me">
              <UserImageWrapper>
                <ProfileImg src={userImg} alt="User Profile" />
              </UserImageWrapper>
            <UserDescriptionWrapper>
              <UserDescription bio="I'm passionate about frontend development. 
                I completed a 2-year program in Multiplatform Application Development, 
                which included a 3-month internship where I worked as a Junior Frontend Developer. 
                While my academic background covered various types of software development, 
                I found myself especially drawn to the web. I'm eager to keep learning 
                and growing as a frontend developer." 
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
          <TitleImageWrapper id="projects">
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
                buttons: [...projectButtons],
                description: "This project is a communication tool designed to facilitate interaction between patients and nurses, ensuring efficient and effective communication."
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
                buttons: [...projectButtons],
                description: "This tool helps in managing project versions and tracking changes effectively."
              }}
              titleColor="blue"
            />
          
          </ProjectsWrapper>
          
          <TitleImageWrapper id="skills">
            <TitleImage src={listImage} alt="List Icon" />
            <Title>Skills</Title>
          </TitleImageWrapper>

          <SkillsWrapper>
            <CardList cards={cards}/>
          </SkillsWrapper>

          <TitleImageWrapper>
            <TitleImage src={atSign} alt="List Icon" />
            <Title>Contact</Title>
          </TitleImageWrapper>
          
          <ContactWrapper id="contact">
            <Input
              type="email"
              value="alex.fr.estudio@gmail.com"
              disabled={true}
            />
            <Button
              onClick={() => copyToClipboard(email)}
              image={clipBoardImg}
              color="blue"
              text={copied ? "Copied!" : null}
            />

          </ContactWrapper>
        </ContentWrapper>
      </Display>
      <Footer/>
    </>
  )
}

export default App
