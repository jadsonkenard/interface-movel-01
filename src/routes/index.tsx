import { NavigationContainer } from "@react-navigation/native";
import { ShowBottomTabs } from "../Navigation";
import { SignIn, SignUp } from "../screens";

export default function Routes(){
    return(
        <NavigationContainer>
            <SignIn/>
        </NavigationContainer>
    )
}