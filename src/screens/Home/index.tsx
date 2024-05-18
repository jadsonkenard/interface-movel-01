import { Container } from "./style";
import { ButtonG, ButtonText, ButtonTextOutline } from "../../components";
import Toast from 'react-native-toast-message';



export default function Home() {
    const showToast = () => {
        Toast.show({
            type: 'info',
            text1: 'Hello',
            text2: 'This is some something',
            visibilityTime: 2000,
        });
    }
    return(
        <Container>
            <Toast/>
            <ButtonTextOutline>Home</ButtonTextOutline>
            <ButtonG onPress={showToast}>
                <ButtonText>Mostrar toast</ButtonText>
            </ButtonG>
        </Container>
    )
  
}

