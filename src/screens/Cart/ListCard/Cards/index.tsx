import { Container } from "./style";

interface TypesCards {
    color: string;
    imageCard: string;
}

export default function Cards({ color, imageCard }: TypesCards) {
    return (
        <Container
            style={{ backgroundColor: color }}
            />
    )
}