import { Container, LocalButtonPopUp } from "./style";
import { Modal, ModalProps as ModalPropsReact, Text  } from "react-native";
import { TextModal, TitleModal } from "../Modal/styles";
import { ButtonP, ButtonText } from "../themes/Button";

interface ModalProps extends ModalPropsReact {
    title: string;
    text: string;
    closePopUp: () => void;
}


export default function PopUpMenu({ title, text, closePopUp, ...props }: ModalProps){
    return(
        <Modal
        transparent={true}
        animationType="fade"
        onRequestClose={() => {
            closePopUp();
        }}
        {...props}
        >
        <Container>
            <TitleModal>{title}</TitleModal>
            <TextModal>{text}</TextModal>
            <LocalButtonPopUp>
            <ButtonP onPress={closePopUp}><ButtonText>Fechar</ButtonText></ButtonP>
            </LocalButtonPopUp>
        </Container>
        </Modal>
    )
}