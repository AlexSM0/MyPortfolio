import ProfileImg from "./components/ProfileImg";
import Tabs from "./components/Tabs";
import UserDescription from "./components/UserDescription";
import { styled } from "styled-components";
import userImg from "./assets/profilePic.svg";

const Display = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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



function App() {

  const links : string[] = ["About me", "Projects", "Contact"];

  return (
    <>
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
              name="John Doe">
            </UserDescription>
          </UserDescriptionWrapper>
        </UserWrapper>
        
      </Display>
    </>
  )
}

export default App
