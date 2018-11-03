import React, { Component } from 'react';
import {
    View,
    FlatList,
    SafeAreaView,
    Text,
    StyleSheet, ImageBackground, Dimensions, StatusBar, TouchableOpacity,
} from 'react-native';
import MyBackButton from "../components/MyBackButton";
import Image from "react-native-svg/elements/Image";
import LinearGradient from 'react-native-linear-gradient';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const numberGrid = 2;
const itemWidth = width / numberGrid;

export default class Config extends Component {
    state = {
        data: [
            {
                id: "00",
                avatar: '<Image source={require(\'../../resources/images/icons/icon-edit-white.png\')}/>',
                name: "Perfil",
                lastName: "Convidado"
            },
            {
                id: "01",
                avatar: 'require("../../resources/images/icons/icon-edit-white.png")',
                name: "Notificações",
                lastName: "Todas"
            },
            {
                id: "02",
                avatar: '<Image source={{uri: \'../../resources/images/icons/icon-edit-white.png\'}}/>',
                name: "Conta",
                lastName: "E-mail"
            },
            {
                id: "03",
                name: "Privacidade",
                lastName: "Apenas eu"
            },
            {
                id: "04",
                name: "Ajuda",
                lastName: "Dúvidas"
            }
        ]
    };

    render() {
        const columns = 2;

        function createRows(data, columns) {
            const rows = Math.floor(data.length / columns);
            let lastRowElements = data.length - rows * columns;

            while (lastRowElements !== columns){
                data.push({
                    id: `empty-${lastRowElements}`,
                    name: `empty-${lastRowElements}`,
                    empty: true
                });
                lastRowElements += 1;
            }
            return data;
        }

        return (


            <SafeAreaView>
                <StatusBar backgroundColor='transparent' barStyle='dark-content'/>

                <View style={styles.fixedNav}>
                    <MyBackButton style={styles.fixedNav}/>
                    <Text style={styles.title}>Configurações</Text>
                    <View style={styles.emptyView}></View>
                </View>

                <FlatList
                    data={createRows(this.state.data, columns)}
                    keyExtractor={item => item.id}
                    numColumns={columns}
                    renderItem={({item}) => {
                        if (item.empty) {
                            return <View style={[styles.item, styles.itemEmpty]} />;
                        }
                        return (

                                <View style={{
                                    flex: 1,
                                    flexDirection: 'row',
                                }}>
                                    <Image
                                        source={{uri: item.avatar}}
                                       style={{width: 100, height: 100, margin: 5}}
                                    />
                                    <View style={styles.item}>
                                        <Text style={styles.text}>{item.name}</Text>
                                        <Text style={styles.textTwo}>{item.lastName}</Text>
                                    </View>
                                </View>

                        );
                    }}
                    disableVirtualization/>
            </SafeAreaView>
            //</View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center',
        justifyContent: 'space-between',
        width: width,
        height: height,
    },
    item: {
        justifyContent: "flex-start",
        borderRadius: 10,
        backgroundColor: "#00ED74",
        flexGrow: 1,
        flexBasis: 0,
        margin: 6,
        paddingBottom: 40,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 40,
        flexDirection: 'column',
    },
    itemEmpty: {
        backgroundColor: "transparent"
    },
    itemImage:{
        width: itemWidth,
        height: itemWidth,
    },
    text: {
        color: "#fff",
        fontFamily: 'Roboto Bold'
    },
    textTwo: {
        color: "#fff",
        fontFamily: 'Roboto'
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
    emptyView: {
        height: height * 0.08,
        width: width * 0.15,
        alignItems: 'center',
        justifyContent: 'center',
    },

    title: {
        fontFamily: 'Roboto',
        fontSize: 20,
        color: '#00ED74',
        alignItems: 'center',
        justifyContent: 'center'
    }
});