import React from 'react';
import moment from 'moment'

export default class DateField extends React.Component {

    render() {
        

        let date = moment(this.props.rowData[this.props.field], this.props.format ? this.props.format : null);

        if(this.props.isDateTimeFormat) {

            return <div>{date.format("DD/MM/YYYY hh:mm")}</div>
        } else {
            return <div>{date.format("DD/MM/YYYY")}</div>
        }
    }
}   