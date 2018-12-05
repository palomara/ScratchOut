import React from 'react'
import { PieChart } from 'react-native-svg-charts'
import BarChartHorizontalWithLabels from "./horizontal-with-labels";
import axios from 'axios'
import { server, showError } from '../../components/common'
import { colors } from 'react-native-elements';

//TODO: trocar as cores que aparecem no grafico, usar uma correlação melhor com o 

class PieChartIndicator extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            dc: 0,
            dnb: 0,
            dnc: 0,
            fa: 0,
            fb: 0,
            in: 0,
            es: 0,
            de: 0
        };
    }

    componentWillMount = async () => {
        const datasd = await axios.get(`${server}/saude/count`)
        const saudedt = datasd.data
        var a = [0,0,0,0,0]
        for (let index = 0; index < saudedt.length; index++) {
            a[index] = saudedt[index].freq;
        }
        this.setState({
            de: a[0],
            dnb: a[1],
            dc: a[2],
            dnc: a[3],
            es: a[4],
            fa: a[5],
            fb: a[6],
            in: a[7],

        })

    }

    render() {
        const data = [this.state.dc, this.state.dnb, this.state.dnc, this.state.fa, this.state.fb, this.state.in, this.state.es, this.state.de]
        const colors = ['#7FFFD4', '#006400', '#556B2F', '#8FBC8F', '#2E8B57', '#3CB371', '#20B2AA', '#98FB98']
        var c = 0;
        const randomColor = () => {
            while (c < 8) {
                c++;
                return colors[c];
            }
        }
        const pieData = data
            .filter(value => value > 0)
            .map((value, index) => ({
                value,
                svg: {
                    fill: randomColor(),
                    onPress: () => console.warn('press', index),
                },
                key: `pie-${index}`,
            }))

        return (
            <PieChart
                style={{ height: 200 }}
                outerRadius={'100%'}
                data={pieData}
            />
        )
    }

}

export default PieChartIndicator