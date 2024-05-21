import { useState } from "react";
import { Container } from "./style";
import { ButtonG, ButtonText, Modal, TextTheme } from "../../components";
import Toast from 'react-native-toast-message';
import { FlatList, View } from "react-native";
import { dataCards } from "../Cart/ListCard";


export default function Home() {
    const [visible, setVisible] = useState(false);

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
            <Modal
                closeModal={() => setVisible(false)}
                visible={visible}
                title="Titilo do modal"
                text="Texto do modal"
            />
            <Toast />
            <TextTheme>Home</TextTheme>
            <ButtonG onPress={showToast}>
                <ButtonText>Toast</ButtonText>
            </ButtonG>
            <ButtonG onPress={() => setVisible(true)}>
                <ButtonText>Modal</ButtonText>
            </ButtonG>


            <FlatList
                horizontal
                data={dataCards}
                renderItem={({ item }) =>
                    <View style={{ alignItems: 'center' }}>
                        {item.name}
                    </View>
                }
            />

        </Container>
    )

}

