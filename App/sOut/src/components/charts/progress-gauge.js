import React from 'react'
import { ProgressCircle } from 'react-native-svg-charts'
import axios from 'axios'
import {server, showError} from '../common'

class ProgressCircleHome extends React.PureComponent {
      

    render() {
        return (
            <ProgressCircle
                style={ { height: 200 } }
                progress={0.7}
                progressColor={'#00ED74'}
            />
            
        )
    }

}

export default ProgressCircleHome