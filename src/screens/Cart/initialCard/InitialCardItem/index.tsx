import { Container, ImageInitialCards, TextInitialCards, TitleInitialCards, ContainerTexts } from "./style";

interface TypesInitialCard {
    url: string
    title: string;
    textContent: string
}

export default function InitialCards({ url, title, textContent }: TypesInitialCard) {
    return (
        <Container>
            <ImageInitialCards source={{ uri: url }}/>
            <ContainerTexts>
            <TitleInitialCards>{title}</TitleInitialCards>
            <TextInitialCards>{textContent}</TextInitialCards>    
            </ContainerTexts>
        </Container>
    )
}
