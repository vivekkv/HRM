import React from 'react';
import { Modal, Button } from 'react-bootstrap';

export default class ConfirmDialog extends React.Component {

    render() {

        return (<div className="static-modal">
            <Modal show={this.props.showDialog} onHide={this.props.onClose}>
               
                <Modal.Body>
                    {this.props.confirmText}
          </Modal.Body>
                <Modal.Footer>
                     <Button onClick={this.props.onConfirm}>Confirm</Button>
                    <Button onClick={this.props.onClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>)
    }
}