import { Container } from "./style";
import { ButtonG, ButtonText, ButtonTextOutline } from "../../components";
import Toast from 'react-native-toast-message';



export default function Home() {
    const showToast = () => {
        Toast.show({
            type: 'success',
            text1: 'Notificação',
            text2: 'Seus alertas ou notificação',
            visibilityTime: 2000,
            topOffset: 30,
        });
    }
    return(
        <Container>
            <Toast/>
            <ButtonTextOutline>Home</ButtonTextOutline>
            <ButtonG onPress={showToast}>
                <ButtonText>Menssagem de Toast</ButtonText>
            </ButtonG>
            <ButtonG>
                <ButtonText>Estilo de modal</ButtonText>
            </ButtonG>
        </Container>
    )
  
}

