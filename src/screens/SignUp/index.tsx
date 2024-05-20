import { Container } from "./style";
import { ButtonG, ButtonGOutline, ButtonText,  ButtonTextOutline, InputContainer, TextTheme } from "../../components";
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "../../routes";

export default function SignUp() {
const navigation = useNavigation<StackTypes>();

    return (
        <Container>
            <TextTheme>Tela de inscrição</TextTheme>
            <InputContainer placeholder="Nome"/>
            <InputContainer placeholder="Email"/>
            <InputContainer placeholder="Senha"/>
            <InputContainer placeholder="Conformar senha"/>
            <ButtonG>
                <ButtonText>Enviar</ButtonText>
            </ButtonG>
            <ButtonGOutline onPress={() => navigation.navigate("Login")}>
                <ButtonTextOutline>Voltar</ButtonTextOutline>
            </ButtonGOutline>
        </Container>
    )
}