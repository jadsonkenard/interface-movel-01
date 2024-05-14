import React from "react";
import { Text } from "react-native";
import { Container } from "./style";
import { ButtonG, ButtonP, ButtonText, ButtonPOutline, ButtonGOutline, ButtonTextOutline } from "../../components";
import Navigation from "../../Navigation";

export default function SignIn() {


    return (
        <Container>
            <Text>Login</Text>
            <ButtonG>
                <ButtonText>Login</ButtonText>
            </ButtonG>
            <ButtonTextOutline>Inscrever-se</ButtonTextOutline>
        </Container>
    )
}