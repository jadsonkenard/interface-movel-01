import React from "react";
import { Modal as ModalReact, ModalProps as ModalPropsReact  } from "react-native";
import { Container, TextModal, TitleModal, IconModal, LocalButtonModal } from "./styles";
import { ButtonG, ButtonText } from "../themes/Button";
import Icon from "react-native-vector-icons/Ionicons";
import theme from "../themes/theme";


interface ModalProps extends ModalPropsReact {
    title: string;
    text: string;
    closeModal: () => void;
}


export default function Modal({ title, text, closeModal, ...props }: ModalProps)  {
    return (
            <ModalReact
                transparent={true}
                animationType="slide"
                onRequestClose={() => {
                    closeModal();
                }}
                {...props}
            >
                <Container>
                    <TitleModal>{title}</TitleModal>
                    <IconModal onPress={closeModal}>
                        <Icon name="close" size={25} color={theme.colors.primary} />
                    </IconModal>
                    <TextModal>{text}</TextModal>
                    <LocalButtonModal>
                        <ButtonG onPress={closeModal}><ButtonText>Fechar</ButtonText></ButtonG>
                    </LocalButtonModal>

                </Container>


            </ModalReact>


    )
}
