import  React, {useEffect, useState} from 'react';
import Login from "../screens/loginPage/Login";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import ForgotPass from "../screens/loginPage/ForgotPass";
import TabNavigation from "../navigation/TabNavigation";
import {useSelector} from "react-redux";

const Stack = createNativeStackNavigator();


function Main(props) {
    const {data, err, load, token} = useSelector((state) => state.user)
    console.log(token,4444)
    // const [initialRout , setInitialRout] = useState('Home')
    //     useEffect(() => {
    //
    //     },[token])
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={token?'TabNavigation' : 'Login'}>
                {/*{token ?*/}
                {/*    (*/}
                {/*        <>*/}
                            <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
                            <Stack.Screen name="ForgotPass" component={ForgotPass} options={{headerShown: false}}/>
                            <Stack.Screen name="TabNavigation" component={TabNavigation} options={{headerShown: false}}/>
                    {/*    </>*/}
                    {/*)  :*/}
                    {/*(*/}
                    {/*    <>*/}
                    {/*        <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>*/}
                    {/*        <Stack.Screen name="ForgotPass" component={ForgotPass}  options={{headerShown: false}}/>):*/}
                    {/*    </>*/}
                    {/*)*/}
                    {/*}*/}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Main;