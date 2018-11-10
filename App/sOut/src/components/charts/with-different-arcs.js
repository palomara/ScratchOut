import React from 'react'
import { PieChart } from 'react-native-svg-charts'

class PieChartWithDifferentArcs extends React.PureComponent {

    render() {

        const data = [
            {
                key: 1,
                value: 50,
                svg: { fill: '#88ff6e' },
                arc: { outerRadius: '130%', cornerRadius: 10,  }
            },
            {
                key: 2,
                value: 50,
                svg: { fill: '#15c3bf' }
            },
            {
                key: 3,
                value: 40,
                svg: { fill: '#faca19' }
            },
            {
                key: 4,
                value: 95,
                svg: { fill: '#FF2452' }
            },
            {
                key: 5,
                value: 35,
                svg: { fill: '#5D5D5D' }
                
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