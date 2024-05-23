import { Container, ImagemCard } from "./style";

interface TypesCards {
    url: string;
}

export default function Cards({ url }: TypesCards) {
    return (
        <Container>
            <ImagemCard source={{ uri: url }}/>
        </Container>
            
    )
}
