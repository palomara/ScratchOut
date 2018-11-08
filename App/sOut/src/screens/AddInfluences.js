import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    ScrollView,
    TouchableOpacity,
    Image,
    Dimensions,
} from 'react-native';

import { CheckBox } from 'react-native-elements'
import { Slider } from 'react-native-elements'
import DateTimePicker from 'react-native-modal-datetime-picker';
import Icon from 'react-native-vector-icons/AntDesign';
import Iconic from 'react-native-vector-icons/Ionicons';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import IconS from 'react-native-vector-icons/SimpleLineIcons';
import moment from 'moment'
import axios from 'axios'
import { server, showError } from '../components/common'

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;
const datatime = moment().endOf('day').format('YYYY-MM-DD');

export default class AddInfluences extends Component {
    /* checkbox */
    state = {
        checkedDorCab: false,
        checkedDorCos: false,
        checkedDorBar: false,
        checkedFebre: false,
        checkedInsonia: false,
        checkedFadiga: false,
        checkedEstres: false,
        checkedDoente: false,
    };
    /* radion */
    state = {
        checkdR15: false,
        checkdR30: false,
        checkdR40: false,
        tempo: '',
    };
    /* timepicker */
    state = {
        isDateTimePickerVisible: false,
        time: ''
    };
    /* slider */
    state = {
        value: 0,
    };

    /*aqui define o state de visibilidade */

    _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

    _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

    _handleDatePicked = time => {
        this.setState({ time: moment(time).format('HH:mm') })
        console.warn(this.state.time);
        this._hideDateTimePicker();
    };

    readionSelect = () => {
        if (!this.state.checkdR15) {
            this.setState({ checkdR30: false })
            this.setState({ checkdR40: false })
        } else if (!this.state.checkdR30) {
            this.setState({ checkdR15: false })
            this.setState({ checkdR40: false })
        } else{
            this.setState({ checkdR15: false })
            this.setState({ checkdR30: false })
        }
    }

    saveSaude = async () => {
        try {
            if (this.state.checkedDoente) {
                await axios.post(`${server}/saude`, {
                    sintomas: "Doente",
                    dtIncluded: datatime
                })
            }
            if (this.state.checkedDorBar) {
                await axios.post(`${server}/saude`, {
                    sintomas: "dor de barriga",
                    dtIncluded: datatime
                })
            }
            if (this.state.checkedDorCab) {
                await axios.post(`${server}/saude`, {
                    sintomas: "dor de cabeca",
                    dtIncluded: datatime
                })
            }
            if (this.state.checkedDorCos) {
                await axios.post(`${server}/saude`, {
                    sintomas: "dor nas costas",
                    dtIncluded: datatime
                })
            }
            if (this.state.checkedEstres) {
                await axios.post(`${server}/saude`, {
                    sintomas: "estressado",
                    dtIncluded: datatime
                })
            }
            if (this.state.checkedFadiga) {
                await axios.post(`${server}/saude`, {
                    sintomas: "fadiga",
                    dtIncluded: datatime
                })
            }
            if (this.state.checkedFebre) {
                await axios.post(`${server}/saude`, {
                    sintomas: "febre",
                    dtIncluded: datatime
                })
            }
            if (this.state.checkedInsonia) {
                await axios.post(`${server}/saude`, {
                    sintomas: "insonia",
                    dtIncluded: datatime
                })
            }
        } catch (error) {

        }

    }

    saveRotina = async () => {
        try {
            await axios.post(`${server}/rotina`, {
                Texercicio: this.state.tempo,
                Tsono: this.state.time,
                dtIncluded: datatime,
                disposicao: this.state.value
            })
            console.warn("rotina salva!")
        } catch (err) {
            showError(err)
        }

    }

    save = () => {
        this.saveRotina()
        this.saveSaude()
        this.props.navigation.navigate('Influences')
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor='transparent' barStyle='dark-content' />
                <View style={styles.fixedNav}>
                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('Influences') }} style={styles.backButtonStyle}>
                        <Image source={require('../../resources/images/icons/icon-nav_back-white.png')} />
                    </TouchableOpacity>
                    <View style={styles.emptyView}></View>
                </View>

                <ScrollView style={styles.mainView}>
                    <View style={styles.healthView}>
                        <View style={styles.titleIconArea}>
                            <Text style={styles.title}>Sintomas</Text>
                            <Icon name='medicinebox' size={25} color={'#00ED74'} />
                        </View>
                        <CheckBox
                            title="Dor de cabeça"
                            checked={this.state.checkedDorC}
                            onPress={() => this.setState({ checkedDorC: !this.state.checkedDorC })}
                            checkedColor={'#006F77'}
                            fontFamily={'Roboto'}
                        />
                        <CheckBox
                            title="Dor nas costas"
                            checked={this.state.checkedDorCos}
                            onPress={() => this.setState({ checkedDorCos: !this.state.checkedDorCos })}
                            checkedColor={'#006F77'}
                            fontFamily={'Roboto'}
                        />
                        <CheckBox
                            title="Dor de barriga"
                            checked={this.state.checkedDorBar}
                            onPress={() => this.setState({ checkedDorBar: !this.state.checkedDorBar })}
                            checkedColor={'#006F77'}
                            fontFamily={'Roboto'}
                        />
                        <CheckBox
                            title="Febre"
                            checked={this.state.checkedFebre}
                            onPress={() => this.setState({ checkedFebre: !this.state.checkedFebre })}
                            checkedColor={'#006F77'}
                            fontFamily={'Roboto'}
                        />
                        <CheckBox
                            title="Insônia"
                            checked={this.state.checkedInsonia}
                            onPress={() => this.setState({ checkedInsonia: !this.state.checkedInsonia })}
                            checkedColor={'#006F77'}
                            fontFamily={'Roboto'}
                        />
                        <CheckBox
                            title="Fadiga"
                            checked={this.state.checkedFadiga}
                            onPress={() => this.setState({ checkedFadiga: !this.state.checkedFadiga })}
                            checkedColor={'#006F77'}
                            fontFamily={'Roboto'}
                        />
                        <CheckBox
                            title="Estresse"
                            checked={this.state.checkedEstres}
                            onPress={() => this.setState({ checkedEstres: !this.state.checkedEstres })}
                            checkedColor={'#006F77'}
                            fontFamily={'Roboto'}
                        />
                        <CheckBox
                            title="Doente"
                            checked={this.state.checkedDoente}
                            onPress={() => this.setState({ checkedDoente: !this.state.checkedDoente })}
                            checkedColor={'#006F77'}
                            fontFamily={'Roboto'}
                        />
                    </View>

                    <View style={styles.hourSleptView} marginTop={20}>
                        <View style={styles.titleIconArea}>
                            <Text style={styles.title}>Horas dormidas</Text>
                            <IconM name='sleep' size={25} color={'#00ED74'} />
                        </View>
                        <View style={styles.sleepTouchView}>
                            <TouchableOpacity style={styles.sleepTouch} onPress={this._showDateTimePicker}>
                                <Text style={styles.sleepTouchText}>Inserir</Text>
                            </TouchableOpacity>
                            <DateTimePicker
                                mode='time'
                                isVisible={this.state.isDateTimePickerVisible}
                                onConfirm={this._handleDatePicked}
                                onCancel={this._hideDateTimePicker}
                            />
                        </View>
                    </View>

                    <View>
                        <View style={styles.titleIconArea} marginTop={20}>
                            <Text style={styles.title}>Exercício físico</Text>
                            <Iconic name='md-fitness' size={25} color={'#00ED74'} />
                        </View>
                        <CheckBox
                            center
                            title='15 - 30 min'
                            checkedIcon='dot-circle-o'
                            uncheckedIcon='circle-o'
                            checked={this.state.checkdR15}
                            onPress={() => this.setState({ checkdR15: !this.state.checkdR15, tempo: '15-30' }, this.readionSelect())}
                            checkedColor={'#006F77'}
                            fontFamily={'Roboto'}
                        />
                        <CheckBox
                            center
                            title='30 - 60 min'
                            checkedIcon='dot-circle-o'
                            uncheckedIcon='circle-o'
                            checked={this.state.checkdR30}
                            onPress={() => this.setState({ checkdR30: !this.state.checkdR30, tempo: '30-60' }, this.readionSelect())}
                            checkedColor={'#006F77'}
                            fontFamily={'Roboto'}
                        />
                        <CheckBox
                            center
                            title='60+ min'
                            checkedIcon='dot-circle-o'
                            uncheckedIcon='circle-o'
                            checked={this.state.checkdR40}
                            onPress={() => this.setState({ checkdR40: !this.state.checkdR40, tempo: '60+' }, this.readionSelect())}
                            checkedColor={'#006F77'}
                            fontFamily={'Roboto'}
                        />
                    </View>

                    <View>
                        <View style={styles.titleIconArea} marginTop={20}>
                            <Text style={styles.title}>Disposição</Text>
                            <IconS name='energy' size={25} color={'#00ED74'} />
                        </View>
                        <View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'center', flexDirection: 'row' }}>
                            <Slider
                                step={1}
                                minimumValue={0}
                                maximumValue={100}
                                thumbTintColor={'#006F77'}
                                marginLeft={15}
                                width={300}
                                value={this.state.value}
                                onValueChange={(value) => this.setState({ value })} />
                            <Text style={styles.sliderValue}>{this.state.value} %</Text>
                        </View>
                    </View>

                    <View style={styles.touchSaveView}>
                        <TouchableOpacity style={styles.touchSave} onPress={this.save}>
                            <Text style={styles.touchSaveText}>Salvar</Text>
                        </TouchableOpacity>
                    </View>

                </ScrollView>


            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },

    fixedNav: {
        flexDirection: 'row',
        height: height * 0.1,
        width: width,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#00ED74',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
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
    title: {
        fontFamily: 'Roboto',
        fontSize: 20,
        color: '#00ED74',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 20,

    },
    healthView: {

    },
    backButtonStyle: {
        marginLeft: 20
    },
    hourSleptView: {
        marginTop: 3,
    },
    mainView: {
        height: height * 0.6,
        width: width,
    },
    sliderValue: {
        justifyContent: 'center',
        fontFamily: 'Roboto',
        color: '#000',
        fontSize: 18,
        marginLeft: 10
    },
    titleIconArea: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 10
    },
    sleepTouchView: {
        marginLeft: 100,
        width: width * 0.50,
        height: height / 16,
        backgroundColor: '#006F77',
        borderRadius: 10,
    },
    sleepTouch: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    sleepTouchText: {
        fontFamily: 'Roboto',
        fontSize: 18,
        color: '#fff',
    },
    touchSaveView: {
        width: width * 0.80,
        height: height / 12.8,
        backgroundColor: "#00ED74",
        marginTop: height / 50,
        borderRadius: 4,
        marginBottom: 10,
        marginLeft: 40
    },
    touchSave: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    touchSaveText: {
        fontFamily: 'Roboto',
        fontSize: 18,
        color: '#fff',
    }


})