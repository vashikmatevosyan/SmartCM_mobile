import React, {useState} from "react";
import Bar from './Bar'
import Home from "../screens/homePage";
import Note from "../screens/notPage";
import Activity from "../screens/activityPage";
import Profile from "../screens/profilePage";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useSelector} from "react-redux";
import {ImageBackground, TouchableOpacity, View} from "react-native";
import barImage from "../assets/images/tab.png"
import style from "./style";
import PlusSvg from "../assets/svges/PlusSvg";
import size from "../utils/Size";
import TaskSvg from "../assets/svges/TaskSvg";
import EventSvg from "../assets/svges/EventSvg";
import GroupSvg from "../assets/svges/GroupSvg";

const Tab = createBottomTabNavigator();

let count = 1;

function TabNavigation(props) {
    console.log(props.active)
    const {data, err, load, token} = useSelector((state) => state.user)
    const [active, setActive] = useState(false)
    return (
        <Tab.Navigator screenOptions={{headerShown: false}} tabBar={(props) =>
            <View style={style.barBlock}>
                {active?<><TouchableOpacity style={[style.button , style.taskPosition]}><TaskSvg/></TouchableOpacity>
                <TouchableOpacity style={[style.button , style.eventPosition]}><EventSvg/></TouchableOpacity>
                <TouchableOpacity style={[style.button , style.groupPosition]}><GroupSvg/></TouchableOpacity></> : null}
                <PlusSvg onPress={() => setActive(!active)} style={style.plusSvg} color={active ? "#347474" : "#ffffff"}
                         bgColor={active ? "#ffffff" : "#347474"}/>
                <ImageBackground source={barImage} resizeMode="cover" style={{width: size.size340, height: '100%'}}>
                    <Bar {...props} setActive={setActive}/>
                </ImageBackground>
            </View>
        }>
            <Tab.Screen name="Home" component={Home} screenOptions={{headerShown: false}}/>
            <Tab.Screen name="Note" component={Note} screenOptions={{headerShown: false}}/>
            <Tab.Screen name="Activity" component={Activity} screenOptions={{headerShown: false}}/>
            <Tab.Screen name="Profile" component={Profile} screenOptions={{headerShown: false}}/>
        </Tab.Navigator>
    );
}

export default TabNavigation;