import React from "react";
import { Text } from "react-native";
import { Container } from "./style";
import { ButtonG, InputContainer, ButtonTextOutline, ButtonText } from "../../components";

import { useNavigation } from "@react-navigation/native";

export default function SignIn() {
const navigation: any = useNavigation();

    return (
        <Container>
            <Text>Login</Text>
            <InputContainer placeholder="e-mail"/>
            <InputContainer placeholder="senha"/>
            <ButtonG onPress={() => navigation.navigate("Navegar")}>
                <ButtonText>Login</ButtonText>
            </ButtonG>
            <ButtonTextOutline onPress={() => navigation.navigate("Inscrever-se")}>Inscreva-se</ButtonTextOutline>
        </Container>
    )
}