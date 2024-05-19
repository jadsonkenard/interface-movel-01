import { useState } from "react";
import { Container, IconPopUP } from "./style";
import { ButtonG, ButtonText, ButtonTextOutline, Modal, PopUpMenu } from "../../components";
import Toast from 'react-native-toast-message';
import Icon from "react-native-vector-icons/Ionicons";


export default function Home() {
    const [visible, setVisible] = useState(false);
    const [popUpVisible, setPopUpVisible] = useState(false);

    const showToast = () => {
        Toast.show({
            type: 'success',
            text1: 'Notificação',
            text2: 'Seus alertas ou notificação',
            visibilityTime: 2000,
            topOffset: 30,
        });
    }
    return (
        <Container>
            <PopUpMenu
                closePopUp={() => setPopUpVisible(false)}
                visible={popUpVisible}
                title="Menu"
                text="Opções"
            />




            <Toast />
            <Modal
                closeModal={() => setVisible(false)}
                visible={visible}
                title="Titilo do modal"
                text="Texto do modal"
            />
            <ButtonTextOutline>Home</ButtonTextOutline>
            <ButtonG onPress={showToast}>
                <ButtonText>Toast</ButtonText>
            </ButtonG>
            <ButtonG onPress={() => setVisible(true)}>
                <ButtonText>Modal</ButtonText>
            </ButtonG>
            <IconPopUP onPress={() => setPopUpVisible(true)}>
            <Icon name="add-circle-outline" size={25}/>
            </IconPopUP>

        </Container>
    )

}

