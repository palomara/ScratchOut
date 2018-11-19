import React from 'react'
import { Defs, LinearGradient, Stop } from 'react-native-svg'
import { LineChart, Grid } from 'react-native-svg-charts'

class GradientLine extends React.PureComponent {

    render() {

        const data1 = [ 80, 20, -50, -24, 53, 53, -35, -91, -85, 24, 4, -95, -40, -10, -50 ]
        const data = [ 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80 ]

        const Gradient = () => (
            <Defs key={'gradient'}>
                <LinearGradient id={'gradient'} x1={'0'} y={'0%'} x2={'100%'} y2={'0%'}>
                    <Stop offset={'0%'} stopColor={'rgb(134, 65, 244)'}/>
                    <Stop offset={'100%'} stopColor={'rgb(66, 194, 244)'}/>
                </LinearGradient>
            </Defs>
        )
        const Novalinha = () => (
            <Defs key={'gradient'}>
                <LinearGradient id={'gradient'} x1={'0'} y={'0%'} x2={'100%'} y2={'0%'}>
                    <Stop offset={'0%'} stopColor={'rgb(134, 65, 244)'}/>
                    <Stop offset={'100%'} stopColor={'rgb(66, 194, 244)'}/>
                </LinearGradient>
            </Defs>
        )

        return (
            <LineChart
                style={ { height: 200, width: 350, paddingLeft: 30 } }
                data={ data }
                contentInset={ { top: 20, bottom: 20 } }
                svg={{
                    strokeWidth: 2,
                    stroke: 'url(#gradient)',
                }}
            >
                <Grid/>
                <Gradient/>
            </LineChart>
        )
    }

}

export default GradientLine