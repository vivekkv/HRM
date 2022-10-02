import React, { Component } from 'react';
import PagerLink from './pagerLink';

export default class Pager extends Component { 
    render() {
        return(
            <ul className="pagination">
               {this.getPageLinks()}
            </ul>
        )
    }

    getPageLinks() {
        var totalPages = Math.ceil(Number(this.props.totalRecords / Number(this.props.totalRecordsTodisplay)));
        var noOfLoop   = this.props.totalRecords > 100 ? 10: totalPages;
        var pageLinks  = [<PagerLink disable={this.props.currentPage == (noOfLoop - 1)} text="Next" onPageLinkClick={this.props.onPageLinkClick.bind(this)}/>]
        for(var i=0; i < noOfLoop; i++) {
           pageLinks.push(<PagerLink active={this.props.currentPage == i} currentPage={this.props.currentPage} text={i} onPageLinkClick={this.props.onPageLinkClick.bind(this)}/>);
        }
        pageLinks.push(<PagerLink disable={this.props.currentPage == 0} text="Previous" onPageLinkClick={this.props.onPageLinkClick.bind(this)}/>);
        return pageLinks;
    }
}

Pager.propTypes = {
   totalRecords : Metacode.PropTypes.number(),
   totalRecordsTodisplay : Metacode.PropTypes.number(),
   onPageLinkClick : Metacode.PropTypes.func(),
   currentPage: Metacode.PropTypes.number()
}