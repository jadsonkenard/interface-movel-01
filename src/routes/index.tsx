import { NavigationContainer } from "@react-navigation/native";
import { ShowBottomTabs } from "../Navigation";
import { SignIn, SignUp } from "../screens";
import { NativeStackNavigationProp, createNativeStackNavigator } from "@react-navigation/native-stack";
import { Coupons, Favorites, Historic, Notifications, Orders } from "../screens/Profile/pages";

const Stack = createNativeStackNavigator();

type StackNavigationType = {
    Navegar: undefined;
    SignUp: undefined;
    Login: undefined;

    Coupons: undefined;
    Favorites: undefined;
    Historic: undefined;
    Notifications: undefined;
    Orders: undefined
}

export type StackTypes = NativeStackNavigationProp<StackNavigationType>

export default function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={SignIn} options={{ headerShown: false}}/>
                <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }}/>
                <Stack.Screen name="Navegar" component={ShowBottomTabs} options={{ headerShown: false}}/>

                <Stack.Screen name="Coupons" component={Coupons} options={{ headerShown: false}}/>
                <Stack.Screen name="Favorites" component={Favorites} options={{ headerShown: false}}/>
                <Stack.Screen name="Historic" component={Historic} options={{ headerShown: false}}/>
                <Stack.Screen name="Notifications" component={Notifications} options={{ headerShown: false}}/>
                <Stack.Screen name="Orders" component={Orders} options={{ headerShown: false}}/>
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