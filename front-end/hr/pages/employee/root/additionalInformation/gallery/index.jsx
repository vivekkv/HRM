import React from 'react';
import { connect } from 'react-redux';
import Form from 'staticComponents/form';
import Input from 'staticComponents/input';
import FormGroup from 'staticComponents/formGroup';
import FileUpload from 'staticComponents/fileupload';
import GalleryList from './list.jsx';
import validate from 'validate.js';
import { clearValidationHighlights } from 'utils';
import { showValidations } from 'utils/notification';
import actionCreator from '../../../../../actions/actionCreator';

export default class Gallery extends React.Component {

    render() {
        return (<div className="ibox-content">
            <div className="row">
                <div className="col-md-12 col-xs-12 col-sm-12 col-lg-12">

                    <Form onSubmit={this.onSubmit.bind(this)}>

                        <div className="col-sm-2">
                            <FormGroup label="Choose file" required={true}>
                                <FileUpload className="form-control" name="GalleryFileName" value={this.props.data.GalleryFileName} onChange={this.props.onChange} />
                            </FormGroup>
                        </div>

                        <div className="col-sm-2">
                            <br />
                            <button className="btn btn_reset pull-left" type="submit" ><i className="fa fa-plus" aria-hidden="true"></i> </button>
                        </div>
                    </Form>

                    <GalleryList data={this.props.data.EmployeeGalleryList.toArray()} dispatch={this.props.dispatch} /> 

                </div>
            </div>
        </div >)
    }

    onSubmit(e) {

        e.preventDefault();

        let constraints = {
            'GalleryFileName': { 'presence': true }
        };

        let validations = validate(this.props.data, constraints);

        if (!validations) {

            clearValidationHighlights();
            this.props.dispatch(actionCreator("EMPLOYEE", "ADD_GALLERY_TO_LIST"));

        } else {

            showValidations("Fix the following errors to continue !", validations);
        }
    }
}