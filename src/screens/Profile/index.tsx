import { Container, ContainersProfile } from "./style";
import { Header, PopUpMenu, theme } from "../../components";
import Icon from "react-native-vector-icons/Ionicons";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "../../routes";
import { Text } from "react-native";


export default function Profile() {
    const navigation = useNavigation<StackTypes>();
    const [popUpVisible, setPopUpVisible] = useState(false);

    return (
        <Container>
            <Header title="Perfil" />

            <ContainersProfile onPress={() => navigation.navigate("Coupons")}>
                <Text>Cupons</Text>
            </ContainersProfile>
            <ContainersProfile onPress={() => navigation.navigate("Favorites")}>
                <Text>Favoritos</Text>
            </ContainersProfile>
            <ContainersProfile onPress={() => navigation.navigate("Historic")}>
                <Text >Histórico</Text>
            </ContainersProfile>
            <ContainersProfile onPress={() => navigation.navigate("Notifications")}>
                <Text >Notificações</Text>
            </ContainersProfile>
            <ContainersProfile onPress={() => navigation.navigate("Orders")}>
                <Text >Orders</Text>
            </ContainersProfile>


            <PopUpMenu closePopUp={() => setPopUpVisible(false)} visible={popUpVisible} title="Menu" text="Opções" />
            <Icon name="add-circle-outline" size={25} color={theme.colors.primary} onPress={() => setPopUpVisible(true)} />

        </Container>
    )
}
