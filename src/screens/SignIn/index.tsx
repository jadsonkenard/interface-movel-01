import { Container } from "./style";
import { ButtonG, InputContainer, ButtonTextOutline, ButtonText } from "../../components";
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "../../routes";

export default function SignIn() {
const navigation = useNavigation<StackTypes>();

    return (
        <Container>
            <InputContainer placeholder="E-mail"/>
            <InputContainer placeholder="Senha"/>
            <ButtonG onPress={() => navigation.navigate("Navegar")}>
                <ButtonText>Login</ButtonText>
            </ButtonG>
            <ButtonTextOutline onPress={() => navigation.navigate("SignUp")}>Inscreva-se</ButtonTextOutline>
        </Container>
    )
}