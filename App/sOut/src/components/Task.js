import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    TouchableWithoutFeedback,
    TouchableOpacity, Image
} from 'react-native'
import moment from 'moment'
import Icon from 'react-native-vector-icons/FontAwesome'
import 'moment/locale/pt-br'
import Swipeable from 'react-native-swipeable'

export default props => {
    let check = null
    if (props.doneAt !== null) {
        check = (
            <View>
                <Image style={{height: 25, width: 25}} source={require('../../resources/images/icons/icon-task-checked.png')}/>
            </View>
        )
    } else {
        check = <View>
            <Image style={{height: 25, width: 25}} source={require('../../resources/images/icons/icon-task-unchecked.png')}/>
        </View>
    }

    const titleStyle = props.doneAt !== null ?
        { textDecorationLine: 'line-through' } : {}


    const leftContent = (
        <TouchableOpacity
            style={[styles.edit, { justifyContent: 'flex-start', paddingLeft: 20 }]}
            onPress={() => props.onDelete(props.id)}>
            <Image source={require('../../resources/images/icons/icon-edit-white.png')}/>
        </TouchableOpacity>
    )

    const rightContent = [
        <TouchableOpacity
            style={[styles.exclude, { justifyContent: 'flex-start', paddingLeft: 20 }]}
            onPress={() => props.onDelete(props.id)}>
            <Image source={require('../../resources/images/icons/icon-icon-trashcan-white.png')}/>
        </TouchableOpacity>,
    ]

    return (
        <Swipeable
                   leftContent={leftContent} rightButtons={rightContent}>
            <View style={styles.container}>
                <TouchableWithoutFeedback onPress={() => props.onToggleTask(props.id)}>
                    <View style={styles.checkContainer}>{check}</View>
                </TouchableWithoutFeedback>
                <View style={styles.taskView}>
                    <Text style={[styles.title, titleStyle]}>
                        {props.title}
                    </Text>
                    <Text style={styles.date}>
                        {moment(props.estimateAt).locale('pt-br').format('ll')}
                    </Text>
                </View>
            </View>
        </Swipeable>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 15,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#AAA',
    },
    checkContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '20%',
    },
    pending: {
        borderWidth: 1,
        height: 25,
        width: 25,
        borderRadius: 15,
        borderColor: '#555',
    },
    done: {
        height: 25,
        width: 25,
        borderRadius: 15,
        backgroundColor: '#4D7031',
        alignItems: 'center',
        justifyContent: 'center',
    },
    taskView: {
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    title: {
        fontSize: 18,
        fontFamily: 'Roboto',
        color: '#006F77',
    },
    date: {
        fontSize: 15,
        fontFamily: 'Roboto Bold',
        color: 'red',
        left: 185,
        position: 'absolute',


    },
    exclude: {
        flex: 1,
        backgroundColor: 'red',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    excludeText: {
        color: '#FFF',
        fontSize: 20,
        margin: 10,
    },
    edit: {
        flex: 1,
        backgroundColor: '#006F77',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
})