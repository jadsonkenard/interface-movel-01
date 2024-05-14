//=========MANDA PARA A TELA DE LOGIN==============
import { NavigationContainer} from "@react-navigation/native";
import { SignIn } from "../screens";
export default function Navigation(){
    return (
        <NavigationContainer>
            <SignIn/>
        </NavigationContainer>
    )
}




//=========MANDA PARA O BOTTOM TABS==============
// import { NavigationContainer} from "@react-navigation/native";
// import ShowBottomTabs from "./BottomTabs";

// export default function Navigation(){
//     return (
//         <NavigationContainer>
//             <ShowBottomTabs/>
//         </NavigationContainer>
//     )
// }