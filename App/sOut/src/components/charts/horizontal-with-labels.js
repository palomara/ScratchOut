import React from 'react'
import {Dimensions, View} from 'react-native'
import { BarChart, Grid } from 'react-native-svg-charts'
import { Text } from 'react-native-svg'
import axios from 'axios'
import {server, showError} from '../../components/common'
import moment from 'moment'

const width = Dimensions.get('screen').width;
const week1i = moment().startOf('week').format('YYYY-MM-DD').toString()
const week1e = moment().endOf('week').format('YYYY-MM-DD').toString()
const week2i = moment(week1i).subtract(1,'week').format('YYYY-MM-DD').toString()
const week2e = moment(week2i).endOf('week').format('YYYY-MM-DD').toString()
const week3i = moment(week2i).subtract(1,'week').format('YYYY-MM-DD').toString()
const week3e = moment(week3i).endOf('week').format('YYYY-MM-DD').toString()
const week4i = moment(week3i).subtract(1,'week').format('YYYY-MM-DD').toString()
const week4e = moment(week4i).endOf('week').format('YYYY-MM-DD').toString()

class BarChartHorizontalWithLabels extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            week1taks: 0,
            week2taks: 0,
            week3taks: 0,
            week4taks: 0,
        };
    }

    componentWillMount = async ()=>{
        const week1taks =  await axios.get(`${server}/tasks/week?dateI=${week1i}&dateF=${week1e}`)
        this.setState({week1taks: week1taks.data[0].TarefasConcluidas})
        const week2taks =  await axios.get(`${server}/tasks/week?dateI=${week2i}&dateF=${week2e}`)
        this.setState({week2taks: week2taks.data[0].TarefasConcluidas})
        const week3taks =  await axios.get(`${server}/tasks/week?dateI=${week3i}&dateF=${week3e}`)
        this.setState({week3taks: week3taks.data[0].TarefasConcluidas})
        const week4taks =  await axios.get(`${server}/tasks/week?dateI=${week4i}&dateF=${week4e}`)  
        this.setState({week4taks: week4taks.data[0].TarefasConcluidas})
    }
    
    render() {

        const data = [ this.state.week1taks, this.state.week2taks, this.state.week3taks, this.state.week4taks]
        const max = (Math.max(this.state.week1taks, this.state.week2taks, this.state.week3taks, this.state.week4taks))-1
        const CUT_OFF = max
        const Labels = ({  x, y, bandwidth, data }) => (
            data.map((value, index) => (
                <Text
                    key={ index }
                    x={ value > CUT_OFF ? x(0) + 10 : x(value) + 10 }
                    y={ y(index) + (bandwidth / 2) }
                    fontSize={ 14 }
                    fill={ value > CUT_OFF ? 'white' : 'black' }
                    alignmentBaseline={ 'middle' }
                >
                    {value}
                </Text>
            ))
        )

        return (
            <View style={{ flexDirection: 'row', height: 200, width: 300 }}>
                <BarChart
                    style={{ flex: 1, marginLeft: 3}}
                    data={data}
                    horizontal={true}
                    svg={{ fill: '#006F77' }}
                    contentInset={{ top: 10, bottom: 10 }}
                    spacing={0.2}
                    gridMin={0}
                >
                    <Grid direction={Grid.Direction.VERTICAL}/>
                    <Labels/>
                </BarChart>
            </View>
        )
    }

}


export default BarChartHorizontalWithLabels