import { NavigationContainer } from "@react-navigation/native";
import { ShowBottomTabs } from "../Navigation";
import { SignIn, SignUp } from "../screens";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={SignIn} options={{ headerShown: false}}/>
                <Stack.Screen name="Inscrever-se" component={SignUp} />
                <Stack.Screen name="Navegar" component={ShowBottomTabs} options={{ headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}







// import { NavigationContainer } from "@react-navigation/native";
// import { ShowBottomTabs } from "../Navigation";
// import { SignIn, SignUp } from "../screens";

// export default function Routes(){
//     return(
//         <NavigationContainer>
//             <SignIn/>
//         </NavigationContainer>
//     )
// }