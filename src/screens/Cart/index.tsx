import { ButtonTextOutline } from "../../components";
import { Container } from "./style";
import ListItems from "./ListItems";

export default function Cart() {
    

    return(
        <Container>
            <ButtonTextOutline>Carrinho</ButtonTextOutline>
            <ListItems name="Celular" amount={0}/>
       
        </Container>
    )
}




