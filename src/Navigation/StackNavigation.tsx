import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Cart, Home, Profile, Settings } from "../screens";

const Stack = createNativeStackNavigator();

export function HomeNavigation(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
        </Stack.Navigator>
    )
}
export function CartNavigation(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Chat" component={Cart} options={{ headerShown: false }}/>
        </Stack.Navigator>
    )
}
export function ProfileNavigation(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }}/>
        </Stack.Navigator>
    )
}
export function SettingsNavigation(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Settings" component={Settings} options={{ headerShown: false }}/>
        </Stack.Navigator>
    )
}