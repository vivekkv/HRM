import React, { Component } from 'react';
export default class PagerLink extends Component { 
    render() {
        return(
            <li className={this.props.disable ? 'disabled' : this.props.active? 'active': ''} onClick={this.onPageLinkClick.bind(this)}><a>{this.props.text}</a></li>
        )
    }
    onPageLinkClick() {
        if(!this.props.disable) {
            this.props.onPageLinkClick(this.props.text)
        }
    }
}

PagerLink.propTypes = {
   text : Metacode.PropTypes.string(),
   onPageLinkClick : Metacode.PropTypes.func(),
   active: Metacode.PropTypes.bool(),
}