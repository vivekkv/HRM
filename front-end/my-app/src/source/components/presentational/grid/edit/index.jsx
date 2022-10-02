import React from 'react';

export default class Edit extends React.Component {

    render() {

        let editComponent = <i onClick={this.onEditClick.bind(this)} data-id={this.props.primaryKey} className={"fa fa-pencil"} ></i>;
        let deleteComponent = <i onClick={this.onDeleteClick.bind(this)} data-id={this.props.primaryKey} className={"fa fa-trash"} ></i>;

        let edit = "";

        if (this.props.enableEdit && this.props.enableDelete) {
            return <a className="griddle-option-template">{editComponent} {deleteComponent} </a>
        }
        if (this.props.enableEdit && !this.props.enableDelete) {
            return <a className="griddle-option-template">{editComponent} </a>
        }

        if (!this.props.enableEdit && this.props.enableDelete) {
            return <a className="griddle-option-template">{deleteComponent} </a>
        }
    }

    onEditClick(e) {

        if (this.props.editAction) {

            this.props.editAction(e.target.getAttribute("data-id"))
        }
    }

    onDeleteClick(e) {

        if (this.props.deleteAction) {

            this.props.deleteAction(e.target.getAttribute("data-id"))
        }
    }
}   