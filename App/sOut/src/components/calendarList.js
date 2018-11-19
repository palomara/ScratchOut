import React, {Component} from 'react';

import {CalendarList} from 'react-native-calendars';

export default class CalendarsList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <CalendarList
                current={'2018-11-19'}
                pastScrollRange={50}
                futureScrollRange={50}
                showScrollIndicator={true}
            />
        );
    }
}