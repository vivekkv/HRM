import React from 'react';

export default class Textarea extends React.Component {

    render() {
        return (<textarea value={this.props.value ? this.props.value: ""}
                        autoFocus={this.props.autoFocus} 
                        onChange={this.onChange.bind(this)} 
                        name={this.props.name}
                        rows={this.props.rows}
                        className={[this.props.className, this.props.errorMessage ? this.props.errorClass: ''].join(" ")} 
                        placeholder={this.props.placeholder} />)
    }

    onChange(e) {
        if(this.props.onChange)
            this.props.onChange(this.props.name, e.target.value)
    }

}

Textarea.propTypes = {
    errorMessage: React.PropTypes.string,
    errorClass : React.PropTypes.string,
    validations: React.PropTypes.object
}

Textarea.defaultProps = {
    validations: {}
}