import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router';
import uuid from 'node-uuid';

export default class LinkWithToolTip extends React.Component {

    render() {

        let tooltip = <Tooltip id={uuid.v1()}>{this.props.tooltip}</Tooltip>;
        return (
            <OverlayTrigger overlay={tooltip} placement="right" delayShow={100} delayHide={150} >
                <Link to={this.props.href}>{this.props.children}</Link>
            </OverlayTrigger>
        );
    }
}