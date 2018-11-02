import React from 'react'
import { ProgressCircle } from 'react-native-svg-charts'

class ProgressCircleHome extends React.PureComponent {

    render() {

        return (
            <ProgressCircle
                style={ { height: 200 } }
                progress={ 0.7 }
                progressColor={'#00ED74'}
                startAngle={ -Math.PI * 0.8 }
                endAngle={ Math.PI * 0.8 }
            />
        )
    }

}

export default ProgressCircleHome