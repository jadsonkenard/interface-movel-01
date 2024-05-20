import { TextTheme } from "../../components";
import { Container } from "./style";
import { FlatList, View } from "react-native";
import { data } from "./dataItems";

export default function Cart() {
    
    return(
        <Container>
            <TextTheme>Carrinho</TextTheme>
            <FlatList
                data={data}
                renderItem={({ item }) =>
                    <View  style={{ width: 370, alignItems: 'center' }}> 
                        {item.imgProduct}
                        {item.product}
                        
                    </View>
                }
            />
            
       
        </Container>
    )
}




