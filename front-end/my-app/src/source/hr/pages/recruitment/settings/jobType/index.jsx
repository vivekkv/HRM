import React from 'react';
import { connect } from 'react-redux';
import Form from 'staticComponents/form';
import Input from 'staticComponents/input';
import TextArea from 'staticComponents/textarea';
import FormGroup from 'staticComponents/formGroup';

class JobType extends React.Component {

    render() {
        return (<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="ibox float-e-margins">
                <div className="ibox-title">
                    <h5><i className="fa fa-code-fork" aria-hidden="true"></i>Add Job Type </h5>
                </div>
                <div className="ibox-content">
                    <div className="row">
                        <div className="col-md-12 col-xs-12 col-sm-12 col-lg-12">
                            <Form>
                                <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                        <FormGroup label="Job Type" required={true}>
                                            <Input type="text" autoFocus={true} placeholder="Enter job type" className="form-control" name="JobType" value={this.props.data.JobType} />
                                        </FormGroup>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                        <FormGroup label="Description" >
                                            <TextArea type="text" placeholder="Enter description" className="form-control" name="Description" value={this.props.data.Description} />
                                        </FormGroup>
                                    </div>
                                </div>
                                <div className="row">
                                    <button className="btn btn_submit pull-right" type="submit"><i className="fa fa-check" aria-hidden="true"></i> Submit</button>
                                    <button className="btn btn_reset pull-right" type="submit"><i className="fa fa-eraser" aria-hidden="true"></i> Reset</button>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
    }
}

let mapStateToProps = function (state) {
    return {
        'data': state.hr.recruitement.settings.jobType.get("data").toObject()
    }
}

let mapDispatchToProps = function (dispatch) {
    return {
        dispatch
    }
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(JobType) 