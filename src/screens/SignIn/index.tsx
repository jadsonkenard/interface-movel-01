import React, { useState } from "react";
import { Text } from "react-native";
import { Container } from "./style";
import { ButtonG, ButtonP, ButtonText, ButtonPOutline, ButtonGOutline, ButtonTextOutline } from "../../components";


export default function SignIn() {
    const [teste, setTeste] = useState('')

    function MostraTeste(value: any){
        return setTeste(value)
    }

    return (
        <Container>
            <Text>Login</Text>


            <ButtonG onPress={() => MostraTeste('Testado com sucesso')}>
                <ButtonText>Login</ButtonText>
            </ButtonG>
            <ButtonP>
                <ButtonText>Login</ButtonText>
            </ButtonP>
            <ButtonGOutline>
                <ButtonTextOutline>Outline</ButtonTextOutline>
            </ButtonGOutline>
            <ButtonPOutline>
                <ButtonTextOutline>Outline</ButtonTextOutline>
            </ButtonPOutline>
            <Text>{teste}</Text>
        </Container>
    )
}