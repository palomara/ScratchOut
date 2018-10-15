import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    TouchableWithoutFeedback,
    TouchableOpacity,
    Image
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
                <Icon name='check' size={20} />
            </View>
        )
    } else {
        check = <View style={styles.pending} />
    }

    const titleStyle = props.doneAt !== null ?
        { textDecorationLine: 'line-through' } : {}


    const leftContent = (
        <View>
            <Icon name='trash' size={20} color='#FFF' />
            <Text>Excluir</Text>
        </View>
    )

    const rightContent = [
        <TouchableOpacity
            style={[styles.exclude, { justifyContent: 'flex-start', paddingLeft: 20 }]}
            onPress={() => props.onDelete(props.id)}>
            <Icon name='trash' size={30} color='#FFF' />
        </TouchableOpacity>,
    ]

    return (
        <Swipeable leftActionActivationDistance={200}
                   onLeftActionActivate={() => props.onDelete(props.id)}
                   leftContent={leftContent} rightButtons={rightContent}>
            <View style={styles.container}>
                <TouchableWithoutFeedback onPress={() => props.onToggleTask(props.id)}>
                    <View style={styles.checkContainer}>{check}</View>
                </TouchableWithoutFeedback>
                <View>
                    <Text style={[styles.title, titleStyle]}>
                        {props.title}
                    </Text>
                    <Text style={styles.date}>
                        {moment(props.estimateAt).locale('pt-br').format('ddd, D [de] MMMM [de] YYYY')}
                    </Text>
                </View>
            </View>
        </Swipeable>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
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
    title: {
        fontSize: 15,
    },
    date: {
        fontSize: 12,
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
    }
})