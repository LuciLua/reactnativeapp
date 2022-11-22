import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CardPage from '../Screens/CardPage';
import Home from '../Screens/Home';
import Initial from '../Screens/Initial';

const { Screen, Navigator } = createNativeStackNavigator();

export function StackRoutes() {
    return (
        <Navigator>
            <Screen
                name="Initial"
                component={Initial}
                options={{ 
                    headerShown: false,
                    animation: 'none'
                }}
                />
            <Screen
                name="Home"
                component={Home}
                options={{ 
                    headerShown: false,
                    animation: 'fade'
                    
                }}
                />
            <Screen
                name="CardPage"
                initialParams={{ name: "Luci", description: "something", picture: "../../../assets/1.jpg" }}
                component={CardPage}
                options={{ 
                    headerShown: false,
                    animation: 'slide_from_bottom',
                }}
            />
        </Navigator>
    )
}