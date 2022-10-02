import React from 'react';

export default class FormGroup extends React.Component {
    render() {
        return (<div className="form-group">
            <label>{this.props.label} {this.props.required ? <span className="required-field">*</span> : ""  }</label>
            {this.props.children}
        </div>)
    }
}