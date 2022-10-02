import React from 'react';
import DateField from 'react-datepicker'

export default class Datepicker extends React.Component {

    constructor(props) {

        super(props);
        this.onChange = this.onChange.bind(this);
        this.state = { value: props.value };

    }   

    render() {
        
        return  (<DateField className={this.props.className} selected={this.state.value} 
                name={this.props.name}
                disabled={this.props.disabled}
                showMonthDropdown = {true}
                showYearDropdown = {true}
                onChange={this.onChange} dateFormat={this.props.dateFormat} placeholderText={this.props.placeholder} />)
    }

    componentWillReceiveProps(props) {

        this.setState({ value: props.value });
    }

    onChange(date) {

        if(this.props.onChange) 
            this.props.onChange(this.props.name, date);
            
        this.setState({ value: date });
    }
}