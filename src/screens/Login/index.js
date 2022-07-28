import React, {useState} from 'react';
import {Button, Image, Text, TextInput, TouchableOpacity, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import  img from '../../assets/images/img.png'
import style from "./style";
import PeopleSvg from "../../assets/svges/PeopleSvg";
import PasSvg from "../../assets/svges/PasSvg";
import EyeSvg from "../../assets/svges/EyeSvg";

function Index(props) {
    const [show , setShow] = useState(false)
    const navigation = useNavigation();
    const onPressLogin = () => {
      navigation.navigate("ForgotPass")
    }
    const hideAndShow = () => {
        setShow(!show)
    }
    return (
        <View style={style.body}>
            <Image
                style={style.image}
                source={img}
            />
            <Text style={style.login}>Log in</Text>
            <View style={style.inputBlock}>
                <PeopleSvg/>
                <TextInput style={style.email} placeholder='Email'></TextInput>
            </View>
            <View style={style.inputBlock}>
                <PasSvg/>
                <TextInput secureTextEntry={show} style={style.pass} placeholder='Password'></TextInput>
                <EyeSvg onPress={hideAndShow}/>
            </View>
            <TouchableOpacity
                style={style.button}
            >
                <Text style={style.buttonText}>Login</Text>
            </TouchableOpacity>
            <View style={style.forgetBlock}>
            <Text style={style.forget} onPress={onPressLogin}>Forgot password?</Text>
            </View>
        </View>
    );
}

export default Index;