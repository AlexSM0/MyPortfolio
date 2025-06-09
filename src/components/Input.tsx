import React from "react";
import mailImg from '../assets/mail.svg';
import passImg from '../assets/password.svg';
import styled from "styled-components";

export interface InputProps {
    type: "text" | "email" | "password";
    placeholder?: string;
    value?: string;
    label?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean;
}

const InputContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin: 10px 0;
`;

const StyledLabel = styled.label`
    font-size: 14px;
    color: #555;
    margin-right: 10px;
    align-self: center;
`;

const Icon = styled.img`
    width: 50px;
    height: 50px;
    margin-right: 10px;
    align-self: center;
`;

const StyledInput = styled.input<InputProps>`
    width:100%;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid black;
    font-size: 16px;
    color: white;
    background-color: ${(props) => props.disabled ? "rgba(255, 255, 255, 0.2)" : "white"};
    cursor: ${(props) => (props.disabled ? "not-allowed" : "text")};

    &:focus {
        outline: none;
        border-color: #007bff;
    }
`;

const Input: React.FC<InputProps> = ({ type, placeholder, value, label, onChange, disabled }) => {
    const icon = type === "email" ? mailImg : type === "password" ? passImg : null;

    return (
        <InputContainer>
            {icon && <Icon src={icon} alt={`${type} icon`} />}
            {label && <StyledLabel>{label}</StyledLabel>}
            <StyledInput
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                disabled={disabled}
            />
        </InputContainer>
    );
}

export default Input;