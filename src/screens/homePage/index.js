import React, {useEffect, useState} from 'react';
import {FlatList, ImageBackground, SafeAreaView, Text, TouchableOpacity, View} from "react-native";
import {useSelector} from "react-redux";
import style from "./style";
import infoImage from '../../assets/images/Layer.png';
import CalendarSvg from "../../assets/svges/CalendarSvg";
import {Calendar} from 'react-native-calendars';
import {useDispatch} from "react-redux";
import eventData from '../../services/Events'
import taskData from '../../services/Tasks'
import CheckBox from '@react-native-community/checkbox';
import size from "../../utils/Size";
import _ from 'lodash'

// import {logOut} from "../../store/actions/user";

function Index(props) {
    const {data , err , load , token} = useSelector((state) => state.user)
    const [active , setActive] = useState('All')
    const [calActive , setCalActive] = useState(false)
    const [day , setDay] = useState('')
    const [id ,setId] = useState([])
    const all = { ...eventData ,...taskData }

    const allData = _.sortBy(all , ['date'])
    const [checkValue , setCheckValue] = useState(false)
    // const checkBoxChange = (item) => {
    //     setId(item.id)
    //         if (id === item.id){
    //             // console.log('dszfxcgv')
    //             setCheckValue(!checkValue)
    //         }
    //     }
    // }
    // const [calValue , setCalValue] = useState(NaN)
    // const dispatch = useDispatch()
    const TaskItem = ({ item }) => (
        <View style={style.tasksBlock}>
            <CheckBox
                // onChange={(item)=> {
                //     setId(item.id)
                //     if (id===item.id){
                //         setCheckValue(!checkValue)
                //     }
                // }}
                value={item.checked}
            />
            <View>
                <Text style={style.tasksTitle}>{item.title}</Text>
                <Text style={style.tasksDate}>{item.date}</Text>
            </View>
            <Text style={{...style.colorBlock,backgroundColor:item.color}}>{item.project}</Text>
        </View>
    );

    const EventItem = ({ item }) => (
        <View style={style.eventsBlock}>
            <View style={style.eventLine} />
            <View style={style.eventContent}>
                <Text style={style.eventHeader}>{item.title}</Text>
                <Text style={style.eventDesc}> {item.description}</Text>
                <View style={{flexDirection: 'row', marginTop: size.size12}}>
                    <Text style={style.eventData}> {item.date}</Text>
                    <Text style={style.eventData}> {item.location}</Text>
                </View>
            </View>
        </View>
    );
    const renderItem = ({ item }) => (
        item.project ? <TaskItem item={item} />   :  <EventItem item={item} />
    );
    return (
        <View style={style.body}>
        <View style={style.container}>
            <Text style={style.helloText}>Hello , {data.employee_information.first_name} </Text>
            <View style={style.infoBlock}>
                <ImageBackground source={infoImage} resizeMode="cover" style={style.image}>
                    <Text style={style.tasksCount}>35 / 50</Text>
                </ImageBackground>
            </View>
            <View style={style.pageBlock}>
                <TouchableOpacity onPress={() => setActive('Tasks')} style={active === 'Tasks' ? style.pageButton : style.pageButtonTwo}><Text style={active === "Tasks" ? style.buttonTextTwo : style.buttonText} >Tasks</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => setActive('Events')} style={active === 'Events' ? style.pageButton : style.pageButtonTwo}><Text  style={active === "Events" ? style.buttonTextTwo : style.buttonText} >Event</Text></TouchableOpacity>
                <TouchableOpacity onPress= {() => setActive('All')}   style={active === 'All' ? style.pageButton : style.pageButtonTwo}><Text  style={active === "All" ? style.buttonTextTwo : style.buttonText}  >All</Text></TouchableOpacity>
            </View>
            <View style={style.dateBlock}>
            <Text style={style.dateText}>20 May 2022</Text>
            <TouchableOpacity onPress= {() => setCalActive(!calActive)} style={calActive ? style.svgBlockTwo : style.svgBlock}><CalendarSvg color={calActive ? '#F5F5F5' : '#347474'}/></TouchableOpacity>
            </View>
            {/*-----------------------------*/}
            {/*exit*/}
            {/*<TouchableOpacity onPress={() =>  dispatch(logOut())}><Text>EXIT</Text></TouchableOpacity>*/}
            {/*-----------------------------*/}
            <SafeAreaView >
                <FlatList
                    ListHeaderComponent= {calActive? <Calendar
                        onDayPress={day => {
                        setDay(day.dateString)
                    }}
                        style={style.calendar}
                        markedDates={{
                            [day]: {selected: true,  selectedColor:  '#11493E'}}}
                        markingType={'dot'}
                    /> : null}
                    data={active === 'Tasks' ? taskData : active === 'Events' ? eventData : allData }
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </SafeAreaView>
        </View>
        </View>
    );
}

export default Index;