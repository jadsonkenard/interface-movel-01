import React, { useState } from "react";
import { Modal, Text } from "react-native";
import { Container } from "./styles";
import { ButtonG } from "../themes/Button";


export default function showModal() {
    const [visibleModal, setVisibleModal] = useState(false);
    const show = () => setVisibleModal(true);
    const hide = () => setVisibleModal(false)


    return (
        <>
            <ButtonG onPress={show}><Text>Abrir modal</Text></ButtonG>
            <Modal
                visible={visibleModal}
            >
                <Container>
                    <Text>Modal</Text>
                    <ButtonG onPress={hide}><Text>Fechar modal</Text></ButtonG>
                </Container>
            </Modal>

        </>

    )
}
