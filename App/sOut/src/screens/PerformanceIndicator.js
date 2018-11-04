import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    StatusBar,
    Image,
    TouchableOpacity,
    TouchableWithoutFeedback,
    ScrollView } from "react-native";
import FixedMenu from "../components/FixedMenu";
import MyBackButton from '../components/MyBackButton'
import BarChartHorizontalWithLabels from '../components/charts/horizontal-with-labels'
import PieChartIndicator from '../components/charts/pie-chart'
import PieChartWithLabel from '../components/charts/pie-with-labels'
import GradientLine from '../components/charts/line-with-gradient'



const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

//Todo: legenda dos gráficos, título e gráficos de correlações

export default class PerformanceIndicator extends Component {


    render() {

        return (
            <View style={styles.container}>
                <StatusBar backgroundColor='transparent' barStyle='dark-content'/>
                <View style={styles.fixedNav}>
                    <MyBackButton style={styles.fixedNav}/>
                    <Text style={styles.title}>Indicador de Performance</Text>
                    <View style={styles.emptyView}></View>
                </View>

                <ScrollView style={styles.mainView}>
                    <View style={styles.chartsArea}>
                        <View style={styles.Indicator}>
                            <Text style={styles.titleChart}> Saúde - Sintomas </Text>
                            <PieChartIndicator/>
                            <Text>Legenda</Text>
                        </View>

                        <View style={styles.Indicator}>
                            <Text style={styles.titleChart}> Metodologias  </Text>
                            <PieChartWithLabel/>
                        </View>

                        <View style={styles.Indicator}>
                            <Text style={styles.titleChart}> Disposição x Humor  </Text>
                            <GradientLine/>
                        </View>

                        <View style={styles.Indicator}>
                            <Text style={styles.titleChart}> Tarefas concluídas - Semana  </Text>
                            <BarChartHorizontalWithLabels/>
                            <Text> Legenda</Text>
                        </View>



                    </View>

                </ScrollView>

                <FixedMenu/>
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

    title: {
        fontFamily: 'Roboto',
        fontSize: 20,
        color: '#00ED74',
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
    }

})