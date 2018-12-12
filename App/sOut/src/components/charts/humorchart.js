import React from 'react'
import { Grid, LineChart, XAxis, YAxis } from 'react-native-svg-charts'
import { View } from 'react-native'
import axios from 'axios'
import { server, showError } from '../../components/common'
import moment from 'moment'
import * as scale from 'd3-scale'

const week1i = moment().startOf('week').format('YYYY-MM-DD').toString()
const week1e = moment().endOf('week').format('YYYY-MM-DD').toString()
const week2i = moment(week1i).subtract(1, 'week').format('YYYY-MM-DD').toString()
const week2e = moment(week2i).endOf('week').format('YYYY-MM-DD').toString()
const week3i = moment(week2i).subtract(1, 'week').format('YYYY-MM-DD').toString()
const week3e = moment(week3i).endOf('week').format('YYYY-MM-DD').toString()
const week4i = moment(week3i).subtract(1, 'week').format('YYYY-MM-DD').toString()
const week4e = moment(week4i).endOf('week').format('YYYY-MM-DD').toString()

class HumorChart extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            f1: 0,
            f2: 0,
            f3: 0,
            f4: 0,
        };
    }
    componentWillMount = async () => {
        const dtHwk1 = await axios.get(`${server}/humor/week?dateI=${week1i}&dateF=${week1e}`)
        const dtHwk2 = await axios.get(`${server}/humor/week?dateI=${week2i}&dateF=${week2e}`)
        const dtHwk3 = await axios.get(`${server}/humor/week?dateI=${week3i}&dateF=${week3e}`)
        const dtHwk4 = await axios.get(`${server}/humor/week?dateI=${week4i}&dateF=${week4e}`)
        this.setState({
            f1: parseInt(dtHwk1.data[0].scale),
            f2: parseInt(dtHwk2.data[0].scale),
            f3: parseInt(dtHwk3.data[0].scale),
            f4: parseInt(dtHwk4.data[0].scale) 
        })
        
        
    }


    render() {

        const data = [this.state.f1,this.state.f2,this.state.f3,this.state.f4]
        const label = [0,1,2,3]

        const escala = [{
            value: 5,
            label: 'Radiante'

        }, {
            value: 4,
            label: 'Feliz'

        }, {
            value: 3,
            label: 'Normal'

        },{
            value: 2,
            label: 'triste'

        },{
            value: 1,
            label: 'horrivel'

        },]

        

        const axesSvg = { fontSize: 10, fill: 'grey' };
        const verticalContentInset = { top: 13, bottom: 13 }
        const xAxisHeight = 30

        return (
            <View style={{ height: 200, padding: 20, flexDirection: 'row' }}>
                <YAxis
                    data={escala}
                    style={{ marginBottom: xAxisHeight }}
                    yAccessor={({ index }) => index}
                    scale={scale.scaleBand}
                    spacing={0.5}
                    numberOfTicks={5}
                    formatLabel={(_, index) => escala[ index ].label}
                    svg={axesSvg}
                />
                <View style={{ flex: 1, marginLeft: 10 }}>
                    <LineChart
                        style={{ flex: 1 }}
                        data={data}
                        contentInset={verticalContentInset}
                        svg={{ stroke: 'rgb(134, 65, 244)' }}
                    >
                        <Grid
                        direction={'HORIZONTAL'} />
                    </LineChart>
                    <XAxis
                        style={{ marginHorizontal: -10, height: xAxisHeight }}
                        data={label}
                        formatLabel={(value, index) => index}
                        contentInset={{ left: 10, right: 10 }}
                        svg={axesSvg}
                    />
                </View>
            </View>
        )
    }

}

export default HumorChart