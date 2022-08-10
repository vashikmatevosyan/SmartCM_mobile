import React, {useLayoutEffect, useState} from 'react';
import {Button, Image, KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, View} from "react-native";
import  img from '../../../assets/images/img.png'
import style from "./style";
import PeopleSvg from "../../../assets/svges/PeopleSvg";
import PasSvg from "../../../assets/svges/PasSvg";
import EyeSvg from "../../../assets/svges/EyeSvg";
import {useDispatch, useSelector} from "react-redux";
import {getLoginData} from "../../../store/actions/user";

function Index({navigation}) {
    const dispatch = useDispatch();
    const [show , setShow] = useState(true)
    const  [loginData , setLoginData] = useState({emailValue: '' , passValue: ''})
    const {data , err , load , token} = useSelector((state) => state.user)
    console.log(token,77777777777777 , data)
    // useLayoutEffect(() => {
    //     if (token){
    //         navigation.navigate("TabNavigation")
    //     }
    // },[token])

    const onPressLogin = () => {
      navigation.navigate("ForgotPass")
    }
    const hideAndShow = () => {
        setShow(!show)
    }
    const handleLogin = () => {
        dispatch(getLoginData(loginData))
    }
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={style.container}
        >
        <View style={style.body}>
            <Image
                style={style.image}
                source={img}
            />
            <Text style={style.login}>Log in</Text>
            <View style={style.inputBlock}>
                <PeopleSvg/>
                <TextInput value={loginData.emailValue} onChangeText={(email)=> setLoginData({...loginData , emailValue: email})}  style={style.email} placeholder='Email'></TextInput>
            </View>
            <View style={style.inputBlock}>
                <PasSvg/>
                <TextInput value={loginData.passValue} onChangeText={(pass)=> setLoginData({...loginData , passValue: pass})}  secureTextEntry={show} style={style.pass} placeholder='Password'></TextInput>
                <EyeSvg onPress={hideAndShow}/>
            </View>
            <TouchableOpacity
                onPress={handleLogin}
                style={style.button}
            >
                <Text style={style.buttonText}>Login</Text>
            </TouchableOpacity>
            <View style={style.forgetBlock}>
            <Text style={style.forget} onPress={onPressLogin}>Forgot password?</Text>
            </View>
        </View>
        </KeyboardAvoidingView>
    );
}

export default Index;