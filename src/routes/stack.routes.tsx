import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../Screens/Home';
import Initial from '../Screens/Initial';

const { Screen, Navigator } = createNativeStackNavigator();

export function StackRoutes() {
    return (
        <Navigator>
            <Screen
                name="Initial"
                component={Initial}
            />
            <Screen
                name="Home"
                component={Home}
            />
        </Navigator>
    )
}