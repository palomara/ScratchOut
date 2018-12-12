import React from 'react'
import { View } from 'react-native'
import { Defs, LinearGradient, Stop } from 'react-native-svg'
import { Grid, LineChart, XAxis, YAxis } from 'react-native-svg-charts'
import axios from 'axios'
import { server, showError } from '../common'

const axesSvg = { fontSize: 10, fill: 'grey' };
const verticalContentInset = { top: 10, bottom: 10 }
const xAxisHeight = 30

class GradientLine extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            dispcont: [],
            humorcont: []
        };
    }
    componentDidMount = async () => {
        const dispDB = await axios.get(`${server}/rotina/between?dateI=2018-11-01&dateF=2018-12-10`)
        const dipodata = dispDB.data
        var dispo = []
        for (let index = 0; index < dipodata.length; index++) {
            dispo[index] = parseInt(dipodata[index].disposicao);
        }
        const humoDB = await axios.get(`${server}/humor/between?dateI=2018-11-01&dateF=2018-12-12`)
        const humordata = humoDB.data
        var humo = []
        for (let index = 0; index < humordata.length; index++) {
            humo[index] = parseInt(humordata[index].scale);
        }
        this.setState({ 
            dispcont: dispo,
            humorcont:  humo
        })
        console.warn(humo)
    }


    render() {
        const data = this.state.dispcont
        const data2 = this.state.humorcont

        const Gradient = () => (
            <Defs key={'gradient'}>
                <LinearGradient id={'gradient'} x1={'0'} y={'0%'} x2={'100%'} y2={'0%'}>
                    <Stop offset={'0%'} stopColor={'rgb(134, 65, 244)'} />
                    <Stop offset={'100%'} stopColor={'rgb(66, 194, 244)'} />
                </LinearGradient>
            </Defs>
        )
        return (
            <View style={{ height: 200, padding: 20, flexDirection: 'row' }}>
                <YAxis
                    data={data}
                    contentInset={verticalContentInset}
                    svg={axesSvg}
                />
                <View style={{ flex: 1, marginLeft: 10 }}>
                    <LineChart
                        style={{ height: 160, width: 350, paddingLeft: 0 }}
                        data={data}
                        contentInset={{ top: 10, bottom: 10 }}
                        svg={{
                            strokeWidth: 2,
                            stroke: 'url(#gradient)',
                        }}>
                        <Grid />
                        <Gradient />
                    </LineChart>
                    <XAxis
                        style={{ marginHorizontal: -10, height: xAxisHeight }}
                        data={data}
                        formatLabel={(value, index) => index}
                        contentInset={{ left: 10, right: 10 }}
                        svg={axesSvg}
                    />
                    <LineChart
                        style={{height: 160, width: 350,
                        left: 0,
                        right: 0,
                        top: -190,
                        }}
                        data={data2}
                        contentInset={{ top: 80, bottom: 10 }}
                        svg={{
                            strokeWidth: 2,
                            strokeDasharray: '4',
                            stroke: 'url(#gradient)',
                        }}/>
                   
                </View>
            </View>
        )
    }

}

export default GradientLine