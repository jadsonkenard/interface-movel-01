import { Container } from "./style";
import { TextHeader } from "../themes/textTheme";


interface TypesHeader {
    title: string;
}

export default function Header({ title }: TypesHeader) {

    return (
        <Container>
            <TextHeader>{title}</TextHeader>
        </Container>
    )
}


