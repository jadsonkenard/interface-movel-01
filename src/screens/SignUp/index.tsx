import React from "react";
import { Text } from "react-native";
import { Container } from "./style";
import { ButtonG, ButtonP, ButtonText, ButtonPOutline, ButtonGOutline, ButtonTextOutline } from "../../components";

export default function SignUp() {


    return (
        <Container>
            <Text>Inscreva-se</Text>
            <ButtonG>
                <ButtonText>Enviar</ButtonText>
            </ButtonG>
            <ButtonTextOutline>Tela de inscrição</ButtonTextOutline>
        </Container>
    )
}