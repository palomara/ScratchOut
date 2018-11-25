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

    componentDidMount = async () => {
        const datasd = await axios.get(`${server}/saude/count`)
        const saudedt = datasd.data
        this.setState({
            dc: saudedt[0].freq,
            dnb: saudedt[1].freq,
            dnb: saudedt[1].freq,
            dnc: saudedt[2].freq,
            fa: saudedt[3].freq,
            fb: saudedt[4].freq,
            in: saudedt[5].freq,
            es: saudedt[6].freq,
            de: saudedt[7].freq,

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