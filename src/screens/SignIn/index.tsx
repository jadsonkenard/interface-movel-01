import { Container } from "./style";
import { ButtonG, InputContainer, ButtonText, TextTheme } from "../../components";
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
            <TextTheme onPress={() => navigation.navigate("SignUp")}>Inscreva-se</TextTheme>
        </Container>
    )
}