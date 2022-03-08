import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Colors from '../constants/Colors';
import MainScreen from '../screens/MainScreen';
import { Platform } from 'react-native';

const Stack = createStackNavigator();

const TapNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name='MainScreen'
                    component={MainScreen}
                    options={{
                        title: 'Tap Counter',
                        headerStyle: {
                            backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : 'white'
                        },
                        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default TapNavigator;