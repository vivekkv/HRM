import React from 'react';

export default class Button extends React.Component {
    render() {

        if(this.props.action == "submit") {
             
             return <button onClick={this.props.onClick} disabled={this.props.disabled} type={this.props.type} className={"btn btn-primary btn-submit"}>{this.props.children}</button>
        }   
        return <button onClick={this.props.onClick} disabled={this.props.disabled} type={this.props.type} className={this.props.className}>{this.props.children}</button>
    }
}