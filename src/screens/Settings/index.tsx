import { ButtonGOutline, ButtonTextOutline } from "../../components";
import { StackTypes } from "../../routes";
import { Container } from "./style";
import { useNavigation } from "@react-navigation/native";


export default function Settings() {

    const navigation = useNavigation<StackTypes>();

    return(
        <Container>
            <ButtonTextOutline>Configurações</ButtonTextOutline>
            <ButtonGOutline>
                <ButtonTextOutline onPress={() => navigation.navigate("Login")}>Sair</ButtonTextOutline>
            </ButtonGOutline>
        </Container>
    )
}