import { Container } from "./style";
import { FlatList, View } from "react-native";
import { data } from "./dataItems";
import { Header } from "../../components";

export default function Cart() {

    return (
        <Container>
            <FlatList
                ListHeaderComponent={() => <Header title="Carrinho" />}
                data={data}
                renderItem={({ item }) =>
                    <View style={{ alignItems: 'center' }}>
                        {item.imgProduct}
                        {item.product}
                    </View>
                }
            />
        </Container>
    )
}






