import { NavigationContainer } from "@react-navigation/native";
import { ShowBottomTabs } from "../Navigation";
import { SignIn, SignUp } from "../screens";
import { NativeStackNavigationProp, createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

type StackNavigationType = {
    Navegar: undefined;
    SignUp: undefined;
    Login: undefined;
}

export type StackTypes = NativeStackNavigationProp<StackNavigationType>

export default function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={SignIn} options={{ headerShown: false}}/>
                <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }}/>
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