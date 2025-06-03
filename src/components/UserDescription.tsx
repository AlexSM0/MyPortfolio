import React from "react";
import { styled } from "styled-components";

interface UserDescriptionProps {
    name: string;
    bio: string;
}

const UserName = styled.h2`
    font-size: 1.5em;
    color: white;
`;

const UserBio = styled.p`
    font-size: 1em;
    color: white;
`;

const UserDescription: React.FC<UserDescriptionProps> = ({ name, bio }) => {
    return (
        <>
            <div>
                <UserName>{name}</UserName>
                <UserBio>{bio}</UserBio>
            </div>
        </>
    );
}

export default UserDescription;
