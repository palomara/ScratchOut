import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    StatusBar,
    Image,
    TouchableOpacity,
    TouchableWithoutFeedback,
    ScrollView
} from "react-native";
import FixedMenu from "../components/FixedMenu";
import MyBackButton from '../components/MyBackButton'
import BarChartHorizontalWithLabels from '../components/charts/horizontal-with-labels'
import PieChartIndicator from '../components/charts/pie-chart'
import PieChartWithLabel from '../components/charts/pie-with-labels'
import GradientLine from '../components/charts/line-with-gradient'
import HumorChart from '../components/charts/humorchart'



const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

//Todo: legenda dos gráficos, título e gráficos de correlações

export default class PerformanceIndicator extends Component {


    render() {

        const colors = ['#7FFFD4', '#006400', '#556B2F', '#8FBC8F', '#2E8B57', '#3CB371', '#20B2AA', '#98FB98']
        const sintomas = ['dor de cabeça','dor na barriga','dor nas costas','fadiga','febre','insonia','estresse','doente']

        return (
            <View style={styles.container}>
                <StatusBar backgroundColor='transparent' barStyle='dark-content' />
                <View style={styles.fixedNav}>
                    <MyBackButton style={styles.fixedNav} />
                    <Text style={styles.title}>Indicador de Performance</Text>
                    <View style={styles.emptyView}></View>
                </View>

                <ScrollView style={styles.mainView}>
                    <View style={styles.chartsArea}>
                        <View style={styles.Indicator}>
                            <Text style={styles.titleChart}> Saúde - Sintomas </Text>
                            <PieChartIndicator />
                            <View style={styles.humorLegend}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginHorizontal: 10 }}>
                                    <View style={{ width: 10, height: 10, backgroundColor: colors[0], marginTop: 6, marginHorizontal: 2 }} />
                                    <Text>{sintomas[0]}</Text>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginHorizontal: 10 }}>
                                    <View style={{ width: 10, height: 10, backgroundColor: colors[1], marginTop: 6, marginHorizontal: 2 }} />
                                    <Text>{sintomas[1]}</Text>
                                </View>
                            </View>
                            <View style={styles.humorLegend}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginHorizontal: 10 }}>
                                    <View style={{ width: 10, height: 10, backgroundColor: colors[2], marginTop: 6, marginHorizontal: 2 }} />
                                    <Text>{sintomas[2]}</Text>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginHorizontal: 10 }}>
                                    <View style={{ width: 10, height: 10, backgroundColor: colors[3], marginTop: 6, marginHorizontal: 2 }} />
                                    <Text>{sintomas[3]}</Text>
                                </View>
                            </View>
                            <View style={styles.humorLegend}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginHorizontal: 10 }}>
                                    <View style={{ width: 10, height: 10, backgroundColor: colors[4], marginTop: 6, marginHorizontal: 2 }} />
                                    <Text>{sintomas[4]}</Text>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginHorizontal: 10 }}>
                                    <View style={{ width: 10, height: 10, backgroundColor: colors[5], marginTop: 6, marginHorizontal: 2 }} />
                                    <Text>{sintomas[5]}</Text>
                                </View>
                                </View>
                                <View style={styles.humorLegend}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginHorizontal: 10 }}>
                                    <View style={{ width: 10, height: 10, backgroundColor: colors[6], marginTop: 6, marginHorizontal: 2 }} />
                                    <Text>{sintomas[6]}</Text>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginHorizontal: 10 }}>
                                    <View style={{ width: 10, height: 10, backgroundColor: colors[7], marginTop: 6, marginHorizontal: 2 }} />
                                    <Text>{sintomas[7]}</Text>
                                </View>
                            </View>
                        </View>

                        <View style={styles.Indicator}>
                            <Text style={styles.titleChart}> Metodologias  </Text>
                            <PieChartWithLabel />
                        </View>

                        <View style={styles.Indicator}>
                            <Text style={styles.titleChart}> Disposição x Humor  </Text>
                            <GradientLine />
                        </View>
                        <View style={styles.Indicator}>
                            <Text style={styles.titleChart}> Frequencia de Humor - semana  </Text>
                            <HumorChart />
                        </View>
                        <View style={styles.Indicator}>
                            <Text style={styles.titleChart}> Tarefas concluídas - Semana  </Text>
                            <BarChartHorizontalWithLabels />
                        </View>



                    </View>

                </ScrollView>

                <FixedMenu />
            </View>
        )
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
        backgroundColor: '#F8F8F8',
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
        color: '#00ce67',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5
    },
    mainView: {
        height: height * 0.6,
        width: width,
    },
    Indicator: {
        marginTop: 20,
        marginBottom: 20,

    },
    titleChart: {
        fontSize: 16,
        fontFamily: 'Roboto Bold',
        justifyContent: 'center',
        marginLeft: 60,
        marginBottom: 15
    },
    chartsArea: {
        justifyContent: 'space-between'
    },
    humorLegend: {
        flexDirection: 'row',
        justifyContent: 'center'
    }


})