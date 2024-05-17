import { Container } from "./style";
import { ButtonG, ButtonText,  ButtonTextOutline, InputContainer } from "../../components";

export default function SignUp() {


    return (
        <Container>
            <ButtonTextOutline>Tela de inscrição</ButtonTextOutline>
            <InputContainer placeholder="Nome"/>
            <InputContainer placeholder="Email"/>
            <InputContainer placeholder="Senha"/>
            <InputContainer placeholder="Conformar senha"/>
            <ButtonG>
                <ButtonText>Enviar</ButtonText>
            </ButtonG>
        </Container>
    )
}