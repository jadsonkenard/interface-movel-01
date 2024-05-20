import { Alert, Text } from "react-native";
import { Container, ContainerItem, ContainerTitleItem } from "./style";
import Icon from "react-native-vector-icons/Ionicons";
import useCount from "../../../Hooks/useCounter";

interface TypesProduct {
    name: string;
    amount: number;
}

export default function ListItems({ name, amount, ...props }: TypesProduct){
    const [count, inc, dec]: any = useCount();
    return(
        <Container
        {...props}
        >
            
            <ContainerItem>
                <ContainerTitleItem>{name}</ContainerTitleItem>
                <Icon name="remove-circle-outline" size={25} onPress={() => dec()}/>
                <Text>{count}</Text>
                <Icon name="add" size={25} onPress={() => inc()}/>
                <Icon name="trash-outline" size={25}/>
            </ContainerItem>
            
        </Container>
    )
}