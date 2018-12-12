import React from 'react'
import { PieChart } from 'react-native-svg-charts'
import axios from 'axios'
import { server, showError } from '../common'

class PieChartWithDifferentArcs extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            radiante: 0,
            feliz: 0,
            triste: 0,
            normal: 0,
            horrivel: 0,
        };
    }
    componentWillMount = async () => {
        const dataRad = await axios.get(`${server}/humor/count`)
        const raddata = dataRad.data
        var a = [0,0,0,0,0]
        for (let index = 0; index < raddata.length; index++) {
            a[raddata[index].scale] = raddata[index].freq;
        }
        console.warn(a)
        this.setState({
            radiante: a[4],
            feliz: a[3] ,
            normal: a[2],
            triste: a[1],
            horrivel: a[0]
        })

    }
    destaque = () => {
    }

    render() {

        const data = [
            {
                key: 1,
                value: this.state.radiante,
                svg: { fill: '#88ff6e' },
                arc: { outerRadius: '100%', cornerRadius: 0, }
            },
            {
                key: 2,
                value: this.state.feliz,
                svg: { fill: '#15c3bf' },
                arc: { outerRadius: '100%', cornerRadius: 0, }
            },
            {
                key: 3,
                value: this.state.normal,
                svg: { fill: '#faca19' },
                arc: { outerRadius: '100%', cornerRadius: 0, }
            },
            {
                key: 4,
                value: this.state.triste,
                svg: { fill: '#FF2452' },
                arc: { outerRadius: '100%', cornerRadius: 0, }
            },
            {
                key: 5,
                value: this.state.horrivel,
                svg: { fill: '#5D5D5D' },
                arc: { outerRadius: '100%', cornerRadius: 0, }
            }
        ]


        return (
            <PieChart
                style={{ height: 300, width: 200 }}
                outerRadius={'100%'}
                innerRadius={10}
                data={data}

            />
        )
    }

}

export default PieChartWithDifferentArcs