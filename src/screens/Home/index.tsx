import { useState } from "react";
import { Container, TextSubTitle, TextTitleHome } from "./style";
import { ButtonG, ButtonText, Modal, Text, TextTheme } from "../../components";
import Toast from 'react-native-toast-message';
import { FlatList, View } from "react-native";
import { dataCards } from "../Cart/ListCard";
import { dataInitialCars } from "../Cart/initialCard";


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
            {/* <Modal
                closeModal={() => setVisible(false)}
                visible={visible}
                title="Titilo do modal"
                text="Texto do modal"
            />
            <Toast />
            
            <ButtonG onPress={showToast}>
                <ButtonText>Toast</ButtonText>
            </ButtonG>
            <ButtonG onPress={() => setVisible(true)}>
                <ButtonText>Modal</ButtonText>
            </ButtonG> */}


            <TextTitleHome><TextTheme>Home</TextTheme></TextTitleHome>
            
            <TextSubTitle>
            <Text>Categorias</Text>
            </TextSubTitle>
            <FlatList
                horizontal
                data={dataCards}
                renderItem={({ item }) =>
                    <View style={{ alignItems: 'center' }}>
                        {item.name}
                    </View>
                }
            />
            <FlatList
                 data={dataInitialCars}
                renderItem={({ item }) =>
                    <View>
                        {item.name}
                    </View>
                }
            />




            

        </Container>
    )

}

