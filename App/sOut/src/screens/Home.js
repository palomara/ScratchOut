import React, {Component} from 'react';
import {BoxShadow} from 'react-native-shadow'
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Dimensions,
    Image,
    TouchableOpacity,
    AsyncStorage,
    ScrollView,
    StatusBar,
    Modal,
    TouchableHighlight,
} from 'react-native';

import FixedMenu from '../components/FixedMenu';
import StatusBarSout from '../components/StatusBarSout';

import {PieChart} from 'react-native-svg-charts'

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default class Home extends Component<Props> {

    logout = () => {
        AsyncStorage.setItem('token', '');
        this.props.navigation.navigate('Hall')
    };

    render() {
        return (
            <View style={styles.container}>
                <StatusBarSout/>
                <View style={styles.fixedNav}>
                    <TouchableOpacity style={styles.fixedNavArea} onPress={() => console.warn("Menu")}>
                        <Image source={require('../../resources/images/icons/icon-nav_menu-green.png')}/>
                    </TouchableOpacity>
                    <Image source={require('../../resources/images/logos/logo-sout-nav.png')}/>
                    <View style={styles.emptyView}></View>
                </View>

                <ScrollView style={styles.mainView}>
                    <TouchableOpacity onPress={() => this.logout()}>
                        <Text>Logout</Text>
                    </TouchableOpacity>
                </ScrollView>

                <FixedMenu/>

            </View>
        )
    }
}

class graphicOne extends React.PureComponent {
    render (){
        const data = [
            {
                key: 1,
                amount: 50,
                svg: {fill: '#00cc77'},
            },
            {
                key: 2,
                amount: 50,
                svg: {fill: '#00cca6'},
            },
            {
                key: 3,
                amount: 10,
                svg: {fill: '#00c1cc'},
            },
            {
                key: 4,
                amount: 70,
                svg: {fill: '#00a6cc'},
            },
            {
                key: 5,
                amount: 95,
                svg: {fill: '#008bcc'},
            },
        ]

        const Labels = ({slices, height, width}) => {
            return slices.map((slice, index) => {
                const {labelCentroid, pieCentroid, data} = slice;
                return (
                    <Text
                        key={index}
                        x={pieCentroid[0]}
                        y={pieCentroid[1]}
                        fill={'white'}
                        textAnchor={'middle'}
                        alignmentBaseline={'middle'}
                        fontSize={18}
                        stroke={'black'}
                        strokeWidth={0.2}
                        >
                        {data.amount}
                    </Text>
                )
            })
        }

        return (
            <PieChart
                style={{height: 200}}
                valueAccessor={({item}) => item.amount}
                data={data}
                spacing={0}
                outerRadius={'95%'}
            >
                <Labels/>

            </PieChart>
        )
    }
}

export {
    graphicOne,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    fixedNav: {
        flexDirection: 'row',
        height: height * 0.1,
        width: width,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#F8F8F8',
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 3},
        shadowOpacity: 0.2,
        marginBottom: 20,
        elevation: 3,
        position: 'relative'
    },

    fixedNavArea: {
        height: height * 0.08,
        width: width * 0.15,
        alignItems: 'center',
        justifyContent: 'center',
    },

    emptyView: {
        height: height * 0.08,
        width: width * 0.15,
        alignItems: 'center',
        justifyContent: 'center',
    },

    mainView: {
        height: height * 0.6,
        width: width,
    },
});