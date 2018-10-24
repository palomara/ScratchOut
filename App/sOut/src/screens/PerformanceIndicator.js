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
import PieGraph from '../components/PieGraph'
import theme from '../components/theme'
import AnimShape from '../components/AnimShape'
import data from '../../resources/data'


const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

type State = {
    activeIndex: number,
    frenquenciaHumorAnual: any
}

export default class PerformanceIndicator extends Component {

    state: State;

    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
            frenquenciaHumorAnual: data.frequenciaHumorAnual,
        };
        this._onPieItemSelected = this._onPieItemSelected.bind(this);
        this._shuffle = this._shuffle.bind(this);
    }

    _onPieItemSelected(newIndex){
        this.setState({...this.state, activeIndex: newIndex, frequenciaHumorAnual: this._shuffle(data.frequenciaHumorAnual)});
    }

    _shuffle(a) {
        for (let i = a.length; i; i--) {
            let j = Math.floor(Math.random() * i);
            [a[i - 1], a[j]] = [a[j], a[i - 1]];
        }
        return a;
    }

    render() {

        const height = 200;
        const width = 500;

        return (
            <View style={styles.container}>
                <StatusBar backgroundColor='transparent' barStyle='dark-content'/>
                <View style={styles.fixedNav}>
                    <MyBackButton style={styles.fixedNav}/>
                    <Text style={styles.title}>Indicador de Performance</Text>
                    <View style={styles.emptyView}></View>
                </View>

                <ScrollView>
                    <View style={styles.containerGraph} >
                        <Text style={styles.chart_title}>Frequência de Humor</Text>
                        <PieGraph
                            pieWidth={150}
                            pieHeight={150}
                            onItemSelected={this._onPieItemSelected}
                            colors={theme.colors}
                            width={width}
                            height={height}
                            data={data.frequenciaHumorMensal} />
                        <Text style={styles.chart_title}>Frequência mensal de "{data.frequenciaHumorMensal[this.state.activeIndex].name}"</Text>
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
        justifyContent: 'center'
    },
    containerGraph: {
        backgroundColor:'whitesmoke',
        marginTop: 21,
    },
    chart_title : {
        fontFamily: 'Roboto Light',
        paddingTop: 15,
        textAlign: 'center',
        paddingBottom: 5,
        paddingLeft: 5,
        fontSize: 16,
        backgroundColor:'white',
        color: 'grey',
        fontWeight:'bold',
    }
})