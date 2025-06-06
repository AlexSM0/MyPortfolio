import React from "react";
import { styled } from "styled-components";

interface UserDescriptionProps {
    name: string;
    subtitle?: string;
    bio: string;
}

const UserDescriptionWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const UserName = styled.h2`
    font-family: "cyberdyne", sans-serif;
    font-size: 1.5em;
    color: white;
    margin: 0;
`;

const UserSubtitle = styled.h3`
    font-family: "cyberdyne", sans-serif;
    font-size: 1.2em;
    color: #74C9E3;
`;

const UserBio = styled.p`
    font-size: 1em;
    color: #74C9E3;
`;

const UserDescription: React.FC<UserDescriptionProps> = ({ name, bio, subtitle }) => {
    return (
        <>
            <UserDescriptionWrapper>
                <UserName>{name}</UserName>
                {subtitle && <UserSubtitle>{subtitle}</UserSubtitle>}
                <UserBio>{bio}</UserBio>
            </UserDescriptionWrapper>
        </>
    );
}

export default UserDescription;
