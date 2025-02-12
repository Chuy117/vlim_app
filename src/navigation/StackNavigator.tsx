import { createStackNavigator } from '@react-navigation/stack';
import { WelcomeScreen } from '../screens/WelcomeScreen';
import { RegistroScreen } from '../screens/RegistroScreen';

const Stack = createStackNavigator();

export const StackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name='Welcome' component={WelcomeScreen} />
            <Stack.Screen name='Registro' component={RegistroScreen} />
        </Stack.Navigator>
    );
}