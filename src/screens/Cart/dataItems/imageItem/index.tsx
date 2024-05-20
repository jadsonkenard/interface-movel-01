import { Image } from "react-native";
import { Container } from "./style";

interface TypesProductImage {
    url: string;
}

export default function ImageItem({ url }: TypesProductImage){
    return(
        <Container>
            <Image source={{ uri: url }}
                    style={{ width: 350, height: 200, borderRadius: 8}}
            />
        </Container>
    )
}