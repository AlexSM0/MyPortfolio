import React from "react";
import linkImg from "../assets/link.svg";
import styled from "styled-components";

export interface ButtonProps {
  color?: "blue" | "purple";
  size?: "small" | "medium" | "large";
  onClick: () => void;
  image?: string;
  text?: React.ReactNode;
  isLink?: boolean;
  url?: string;
}

const StyledButton = styled.button<ButtonProps>`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  padding:16px;
  background-color: black;
  border-radius: 10px;
  cursor: pointer;
  white-space: nowrap;
  color: white;
  box-sizing: border-box;

  border: 1px solid ${(props) =>
    props.color === "blue" ? "#74C9E3" : "#7F007E"};

  height: ${(props) => {
    switch (props.size) {
      case "small":
        return "30px";
      case "medium":
        return "40px";
      case "large":
        return "50px";
      default:
        return "40px";
    }
  }};

  font-size: ${(props) => {
    switch (props.size) {
      case "small":
        return "12px";
      case "medium":
        return "16px";
      case "large":
        return "20px";
      default:
        return "16px";
    }
  }};

  &:hover {
    opacity: 0.8;
  }
`;

const StyledImage = styled.img<{ size?: "small" | "medium" | "large" }>`
  width: ${(props) =>
    props.size === "small" ? "20px" : props.size === "large" ? "40px" : "30px"};
  height: ${(props) =>
    props.size === "small" ? "20px" : props.size === "large" ? "40px" : "30px"};
`;

const StyledImageLink = styled.img<{ size?: "small" | "medium" | "large" }>`
  width: ${(props) =>
    props.size === "small" ? "15px" : props.size === "large" ? "40px" : "20px"};
  height: ${(props) =>
    props.size === "small" ? "15px" : props.size === "large" ? "40px" : "20px"};
`;

const StyledText = styled.span`
  font-weight: 500;
  font-size: 1rem;
  color: inherit;
`;

const StyledLinkWrapper = styled.a`
  text-decoration: none;
  display: inline-block;
  width: fit-content;
`;

const Button: React.FC<ButtonProps> = ({
  color = "blue",
  size = "medium",
  onClick,
  image,
  text,
  isLink,
  url,
}) => {
  const content = (
    <StyledButton
      as={isLink ? "div" : "button"}
      color={color}
      size={size}
      onClick={!isLink ? onClick : undefined}
    >
      {image && <StyledImage src={image} alt="Button Icon" size={size} />}
      {text && <StyledText>{text}</StyledText>}
      {isLink && <StyledImageLink src={linkImg} alt="Link Icon" size={size} />}
    </StyledButton>
  );

  if (isLink && url) {
    return (
      <StyledLinkWrapper href={url} target="_blank" rel="noopener noreferrer">
        {content}
      </StyledLinkWrapper>
    );
  }

  return content;
};

export default Button;