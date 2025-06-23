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
import linkedinLogo from "./assets/linkedin.svg";
import listImage from "./assets/listImg.svg";
import myCallClientImage from "./assets/myCCImage.jpg";
import mysqlImage from "./assets/mysql.svg";
import projectImage from "./assets/projectImage.svg";
import pythonImage from "./assets/python.svg";
import reactImage from "./assets/react.svg";
import typescriptImage from "./assets/typescript.svg";
import { useClipboard } from "./hooks/useClipboard";
import userImg from "./assets/profilePic.png";
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
      title: "Github",
      image: githubLogo,
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

  const tags: { label: string; color: "blue" | "purple" | "yellow"; icon: string }[] = [
    { label: "Flask", color: "purple", icon: flaskImg },
    { label: "Python", color: "yellow", icon: pythonImage },
    { label: "React", color: "blue", icon: reactImage }
  ];

  const MyCButtons = [
    { text: "In maintenance...", color: "purple", size: "medium", isLink: true, onClick: () => console.log("View Project clicked!"), image: projectImage },
    { text: "Code", color: "purple", size: "medium", isLink: true, url: "https://github.com/AlexSM0/MyCallClient", image: githubLogo, onClick: () => {} }
  ] as const;

    const VToolButtons = [
    { text: "In maintenance...", color: "purple", size: "medium", isLink: true, onClick: () => console.log("View Project clicked!"), image: projectImage },
    { text: "Code", color: "purple", size: "medium", isLink: true, url: "https://github.com/AlexSM0/VersioningTool", image: githubLogo, onClick: () => {} }
  ] as const;

  const footerButtons = [
    { text: "Code", image: githubLogo, color: "blue" as const, isLink: true, url: "https://github.com/AlexSM0/MyPortfolio", onClick: () => {} }
  ];
  
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
              <UserDescription bio={
                  <>
                    Since I started programming, I discovered that what I truly enjoy is turning ideas into visual experiences.
                    Although my academic background was broad and covered different areas of software development, I always felt more drawn to the frontend.
                    I love seeing how every line of code comes to life in the interface and how small design choices can completely shape the user experience.
                    <br /><br />
                    During my internship as a frontend developer, I had the chance to apply my knowledge in a real-world environment. Working with deadlines,
                    receiving feedback, and collaborating with a team. That experience made it clear to me that this is the professional path I want to follow.
                    <br /><br />
                    Since then, I haven't stopped learning on my own. I've taken on personal projects, explored new technologies, and pushed myself to improve with every line of code.
                    What excites me the most is facing new challenges, understanding how modern applications are built, and figuring out how I can contribute with simple, effective solutions.
                    <br /><br />
                    Today, I'm looking for an opportunity where I can continue to grow as a developer.
                    I'm especially interested in being part of a team where I can learn, contribute, and evolve.
                    My goal isn't just to master tools, but to become someone who understands the "why" behind the code,
                    who works well with others, and who doesn’t settle for “it works,” but aims for “it’s done right.”
                  </>
                }
                name="Alexander Fuentes Rodríguez"
                subtitle="Junior Frontend developer">
              </UserDescription>
            </UserDescriptionWrapper>
          </UserWrapper>

          <ButtonsWrapper>
            <Button onClick={() => console.log("Button clicked!")} text="Github" image={githubLogo} color="blue" isLink={true} url="https://github.com/AlexSM0" />
            <Button onClick={() => console.log("Button clicked!")} text="Linkedin" image={linkedinLogo} color="blue" isLink={true} url="https://www.linkedin.com/in/alexander-fuentes-rodr%C3%ADguez-b274b0332/"/>
            <Button onClick={() => {}} text="CV" image={documentImg} color="blue" isLink={true} url="/Cv_alex_pro.pdf"/>
          </ButtonsWrapper>
          <TitleImageWrapper id="projects">
            <TitleImage src={projectImage} alt="List Icon" />
            <Title>Projects</Title>
          </TitleImageWrapper>
          
          <ProjectsWrapper>
            
            <InfoItem
              title="My Call Client"
              titleImage={MyccLogo}
              subtitle="An easy tool for patient-nurse communication"
              tags={tags}
              imageContent={{
                image: myCallClientImage,
                buttons: [...MyCButtons],
                description: (
                <>
                  My Call Client is a React‑based application I built to simulate the bedside call‑button systems used in hospitals. 
                  It was born from the need to provide a lightweight, easy‑to‑deploy prototype for teaching and small‑scale clinics.
                  <br /><br />
                  When a patient presses the virtual call button, the app sends a real‑time notification to all connected nurse stations. 
                  One nurse then accepts the request—triggering a simulated relay that “lights up” the device next to the bed—so the patient knows help is on the way.
                  <br /><br />
                  After receiving the task, the nurse heads to the correct room and presses a second button in the app to confirm their arrival. 
                  This two‑step handshake ensures transparency: patients see that their request was acknowledged, and nurses can track which calls have been completed.
                  <br /><br />
                  The frontend communicates with a Flask‑based REST API I developed in Python. Endpoints handle call creation, acceptance, and confirmation, 
                  while WebSocket events provide instant updates. On the backend I designed the data models, implemented authentication, 
                  and set up request validation to ensure reliability.
                  <br /><br />
                  I styled the interface with styled‑components, used React Context and hooks for state management, and learned valuable lessons in 
                  full‑stack real‑time communication, API design, and component reusability—skills.
                </>
              )
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
                buttons: [...VToolButtons],
                description:
                <>
                  Versioning Tool is a utility I designed during my internship to solve a specific problem within the company’s deployment process.
                  It connects directly to the company’s production database and streamlines the way internal version updates are handled—specifically in the <i>Portal Updates</i> and <i>Release Notes</i> sections of their internal portal.
                  <br /><br />
                  Before this tool, updates were inserted manually, often causing formatting errors in the database due to inconsistent input. 
                  My app eliminates that risk by offering a clean, controlled interface for inputting version information.
                  <br /><br />
                  Built with React, it allows team members to fill in update details through a simple UI. Once submitted, the application ensures that data is validated and correctly formatted before being pushed to the database.
                  <br /><br />
                  This tool was particularly useful for the production team, who needed something lightweight, fast, and intuitive. 
                  It allowed them to confidently update internal documentation without worrying about corrupting the structure or contents of the database.
                  <br /><br />
                  Through this project, I deepened my understanding of form validation, database schema requirements, and how to create user-friendly tools that serve real business needs.
                </>
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
      <Footer buttons={footerButtons} />
    </>
  )
}

export default App
