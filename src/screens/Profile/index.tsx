import { Container, ContainersProfile, TextMenuProfile } from "./style";
import { Header, PopUpMenu, theme } from "../../components";
import Icon from "react-native-vector-icons/Ionicons";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "../../routes";
import { View } from "react-native";


export default function Profile() {
    const navigation = useNavigation<StackTypes>();
    const [popUpVisible, setPopUpVisible] = useState(false);

    return (
        <Container>
            <Header title="Perfil" />
            <PopUpMenu closePopUp={() => setPopUpVisible(false)} visible={popUpVisible} title="Menu" text="Opções" />
            <Icon name="add-circle-outline" size={25} color={theme.colors.primary} onPress={() => setPopUpVisible(true)} />

            <ContainersProfile onPress={() => navigation.navigate("Coupons")}>
                <Icon name="ticket-outline" size={25} />
                <TextMenuProfile>Cupons</TextMenuProfile>
                <View/>
                <Icon name="chevron-forward-outline" size={25} />
            </ContainersProfile>
            <ContainersProfile onPress={() => navigation.navigate("Favorites")}>
                <Icon name="heart-outline" size={25} />
                <TextMenuProfile>Favoritos</TextMenuProfile>
                <Icon name="chevron-forward-outline" size={25} />
            </ContainersProfile>
            <ContainersProfile onPress={() => navigation.navigate("Historic")}>
                <Icon name="list-outline" size={25} />
                <TextMenuProfile >Histórico</TextMenuProfile>
                <Icon name="chevron-forward-outline" size={25} />
            </ContainersProfile>
            <ContainersProfile onPress={() => navigation.navigate("Notifications")}>
                <Icon name="notifications-outline" size={25} />
                <TextMenuProfile >Notificações</TextMenuProfile>
                <Icon name="chevron-forward-outline" size={25} />
            </ContainersProfile>
            <ContainersProfile onPress={() => navigation.navigate("Orders")}>
                <Icon name="list-circle" size={25} />
                <TextMenuProfile >Orders</TextMenuProfile>
                <Icon name="chevron-forward-outline" size={25} />
            </ContainersProfile>

        </Container>
    )
}