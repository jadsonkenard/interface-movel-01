import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeNavigation, ChatNavigation, SettingsNavigation, ProfileNavigation } from "./StackNavigation";
import Icon from "react-native-vector-icons/Ionicons";
import { theme } from "../components";

const Tab = createBottomTabNavigator();

export default function ShowBottomTabs() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName: any

                    if (route.name === 'HomeTab') {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'ChatTab') {
                        iconName = focused ? 'chatbubbles' : 'chatbubbles-outline';
                    } else if (route.name === 'ProfileTab') {
                        iconName = focused ? 'people-sharp' : 'people-outline';
                    } else if (route.name === 'SettingTab') {
                        iconName = focused ? 'settings' : 'settings-outline';
                    }

                    return <Icon name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: theme.colors.primary,
                tabBarInactiveTintColor: theme.colors.primary,
                headerShown: false,
            })}

        >
            <Tab.Screen name="HomeTab" component={HomeNavigation} options={{ tabBarShowLabel: false }} />
            <Tab.Screen name="ChatTab" component={ChatNavigation} options={{ tabBarShowLabel: false }} />
            <Tab.Screen name="ProfileTab" component={ProfileNavigation} options={{ tabBarShowLabel: false }} />
            <Tab.Screen name="SettingTab" component={SettingsNavigation} options={{ tabBarShowLabel: false }} />
        </Tab.Navigator>
    )
}
