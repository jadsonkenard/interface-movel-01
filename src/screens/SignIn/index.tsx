import React from "react";
import { Text } from "react-native";
import { Container } from "./style";
import { ButtonG, ButtonP, ButtonText, ButtonPOutline, ButtonGOutline, ButtonTextOutline, InputContainer } from "../../components";

export default function SignIn() {


    return (
        <Container>
            <Text>Login</Text>
            <InputContainer placeholder="e-mail"/>
            <InputContainer placeholder="senha"/>
            <ButtonG>
                <ButtonText>Login</ButtonText>
            </ButtonG>
            <ButtonTextOutline>Inscrever-se</ButtonTextOutline>
        </Container>
    )
}