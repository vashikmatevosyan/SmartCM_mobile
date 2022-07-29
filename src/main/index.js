import React from 'react';
import Login from "../screens/loginPage/Login";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import ForgotPass from "../screens/loginPage/ForgotPass";

const Stack = createNativeStackNavigator();


function index(props) {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
                <Stack.Screen name="ForgotPass" component={ForgotPass}  options={{headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default index;