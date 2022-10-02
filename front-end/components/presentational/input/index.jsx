import React from 'react';

export default class Input extends React.Component {

    render() {
        return (<input tabIndex={this.props.tabindex}
            value={this.props.value ? this.props.value: ""}
            onChange={this.onChange.bind(this)}
            onBlur={this.onBlur.bind(this)}
            type={this.props.type}
            name={this.props.name}
            disabled= {this.props.disabled}
            autoFocus={this.props.autoFocus}
            className={this.props.className}
            placeholder={this.props.placeholder} />)
    }

    onChange(e) {
        if (this.props.onChange) {
            var value = e.target.value.toString();
            this.props.onChange(this.props.name, value);
        }
    }

    onBlur(e) {
        if (this.props.onBlur) {
            var value = e.target.value.toString();
            this.props.onBlur(this.props.name, value);
        }
    }

    formatValue(value) {
        return value ? escape(value.toString().replace(/'/g, "''")) : '';
    }
}