import { View } from "react-native";
import { Container, ContainerItem } from "./style";
import Icon from "react-native-vector-icons/Ionicons";
import useCount from "../../../Hooks/useCounter";
import { TextTheme } from "../../../components";

interface TypesProduct {
    amount: number;
}

export default function ListItems({ amount, ...props }: TypesProduct){
    const [count, inc, dec]: any = useCount();
    return(
        <Container
        {...props}
        >
            <ContainerItem>
                <TextTheme>Editar</TextTheme>
                <View/>
                <Icon name="remove-circle-outline" size={25} onPress={() => dec()}/>
                <TextTheme>{count}</TextTheme>
                <Icon name="add" size={25} onPress={() => inc()}/>
                <Icon name="trash-outline" size={25}/>
            </ContainerItem>
            
        </Container>
    )
}