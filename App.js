import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { StatusBar } from 'expo-status-bar';

import LoginScreen from './screens/LoginScreen';
import TaskScreen from './screens/TaskScreen';
import CreateTaskScreen from './screens/CreateTaskScreen';

import { Button } from 'react-native';

export default function App() {

    const Stack = createStackNavigator();

    return (
       <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name="Tareas" 
                    component={ TaskScreen } 
                    options={ ({ navigation  }) => ({   
                        headerStyle: { backgroundColor: '#e8ecfe' },
                        headerTitleAlign: 'center',
                        headerBackTitleStyle: { color: '#fff' },
                        headerRight: () => (
                            <Button 
                                title="Nueva Tarea"
                                style={{ color: '#fff', fontWeight: 'bold' }} 
                                onPress={ () => navigation.navigate( "CreateTaskScreen" ) }/>
                        )
                }) }/>

                <Stack.Screen name="CreateTaskScreen" component={ CreateTaskScreen } />

                <Stack.Screen name="Login" component={ LoginScreen }  />
            </Stack.Navigator>
            <StatusBar style="auto" />
       </NavigationContainer>
    );

}
