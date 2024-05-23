import { Container, ImageInitialCards, TitleInitialCards } from "./style";

interface TypesInitialCard {
    url: string
    title: string;
}

export default function InitialCards({ url, title }: TypesInitialCard) {
    return (
        <Container>
            <TitleInitialCards>{title}</TitleInitialCards>    
            <ImageInitialCards source={{ uri: url }}/>
        </Container>
            
    )
}
