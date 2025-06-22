import React from "react";
import { styled } from "styled-components";

interface ProfileImgProps {
    src: string;
    alt: string;
}

const ImgContainer = styled.div`
    width: 150px;
    height: 150px;
    border-radius: 100%;
`;

const Img = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 100%;
    object-fit: cover;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const ProfileImg: React.FC<ProfileImgProps> = ({ src, alt }) => {
    return (
        <ImgContainer>
            <Img src={src} alt={alt} />
        </ImgContainer>
    );
}

export default ProfileImg;