import React from 'react';

export default class Checkbox extends React.Component {

    render() {
        return (<input 
            tabIndex={this.props.tabindex}
            value={this.props.value ? this.props.value: ""}
            checked={this.props.checked}
            onChange={this.onChange.bind(this)}
            onBlur={this.onBlur.bind(this)}
            type={"checkbox"}
            name={this.props.name}
            disabled= {this.props.disabled}
            className={this.props.className} />)
    }

    onChange(e) {
        if (this.props.onChange) {
            this.props.onChange(this.props.name, e.target.checked);
        }
    }

    onBlur(e) {
        if (this.props.onBlur) {
            this.props.onBlur(this.props.name, e.target.checked);
        }
    }

}