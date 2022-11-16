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
                }}
                />
            <Screen
                name="Home"
                component={Home}
                options={{ 
                    headerShown: false,
                }}
            />
            <Screen
                name="CardPage"
                component={CardPage}
                options={{ 
                    headerShown: false,
                }}
            />
        </Navigator>
    )
}