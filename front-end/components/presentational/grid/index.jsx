import React, { Component } from 'react';
import Griddle from 'griddle-react';
import Edit from 'staticComponents/grid/edit';
import { dispatch } from 'helpers/reduxStore';

let editAction = null, deleteAction = null;
let primaryKey = null;
let enableEdit = false, enableDelete = false;

export default class Grid extends Component { 
    
    constructor(props) {
        super(props);
    }

    render() {
        
        editAction = this.props.editAction;
        deleteAction = this.props.deleteAction;
        primaryKey = this.props.primaryKey;
        enableEdit = this.props.enableEdit;
        enableDelete = this.props.enableDelete;

        let columnMetadata = this.parseColumnMetadata();

        return (
             <div> 
                 <Griddle resultsPerPage={this.props.resultsPerPage} 
                          showSettings={this.props.showSettings} 
                          columns={this.props.columns}  
                          data={this.props.data} 
                          columnMetadata={columnMetadata} 
                          showFilter={this.props.showFilter} 
                          onRowClick={this.props.onRowClick} 
                />  
            </div>
        ); 
    }
    
    parseColumnMetadata() {

        let columnMetadata = this.props.columnMetadata || [];

        if((this.props.enableEdit || this.props.enableDelete) && this.props.primaryKey) {

            columnMetadata.push({ "columnName": this.props.primaryKey, "displayName": " ", "customComponent": editComponent })
        }
        
        return columnMetadata;
    }
}

let editComponent = React.createClass({
    render: function () {
        return <Edit enableEdit={enableEdit} enableDelete={enableDelete} editAction={editAction} deleteAction={deleteAction} primaryKey={this.props.rowData[primaryKey]} onClick={this.onClick} />
    },
    onClick: function (id) {
        dispatch(editAction(id))
    }
});

Grid.propTypes = {
    results: React.PropTypes.any,
    showFilter: React.PropTypes.bool,
    columns: React.PropTypes.array
}

Grid.defaultProps = {
    showFilter: true
}