import React from 'react';
import { connect } from 'react-redux';
import Form from 'staticComponents/form';
import Input from 'staticComponents/input';
import TextArea from 'staticComponents/textarea';
import FormGroup from 'staticComponents/formGroup';
import Dropdown from 'staticComponents/dropdown';

class Requisitions extends React.Component {

    render() {
        return (<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="ibox float-e-margins">
                <div className="ibox-title">
                    <h5><i className="fa fa-clipboard" aria-hidden="true"></i>Job Requisitions</h5>
                </div>
                <div className="ibox-content">
                    <div className="row">
                        <div className="col-md-12 col-xs-12 col-sm-12 col-lg-12">
                            <Form>
                                <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                        <FormGroup label="Forward To" required={true}>
                                            <Dropdown multi={false} name="ForwardTo" updateAlways={true} dataSource={this.props.data.ForwardToList.toArray()} value={this.props.data.ForwardTo} onChange={this.props.onChange} placeholder="Select forward to" />
                                        </FormGroup>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                        <FormGroup label="Department" required={true}>
                                            <Dropdown multi={false} name="Department" updateAlways={true} dataSource={this.props.data.DepartmentList.toArray()} value={this.props.data.Department} onChange={this.props.onChange} placeholder="Select departmennt" />
                                        </FormGroup>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                        <FormGroup label="Job title" required={true}>
                                            <Input type="text" placeholder="Enter job title" className="form-control" name="JobTitle" value={this.props.data.JobTitle} />
                                        </FormGroup>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                        <FormGroup label="Job type" required={true}>
                                            <Dropdown multi={false} name="JobType" updateAlways={true} dataSource={this.props.data.JobTypeList.toArray()} value={this.props.data.JobType} onChange={this.props.onChange} placeholder="Select job type" />
                                        </FormGroup>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                        <FormGroup label="No of positions" required={true}>
                                            <Input type="text" placeholder="Enter no of position" className="form-control" name="NoOfPosition" value={this.props.data.NoOfPosition} />
                                        </FormGroup>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                        <FormGroup label="Age from" required={true}>
                                            <Input type="text" placeholder="Enter no of position" className="form-control" name="NoOfPosition" value={this.props.data.NoOfPosition} />
                                        </FormGroup>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                        <FormGroup label="Age to" required={true}>
                                            <Input type="text" placeholder="Enter age to" className="form-control" name="AgeTo" value={this.props.data.AgeTo} />
                                        </FormGroup>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                        <FormGroup label="Salary Start Range" required={true}>
                                            <Input type="text" placeholder="Enter starting slary" className="form-control" name="SalaryStartRange" value={this.props.data.SalaryStartRange} />
                                        </FormGroup>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                        <FormGroup label="Salary End Range" required={true}>
                                            <Input type="text" placeholder="Enter salary end range" className="form-control" name="SalaryEndRange" value={this.props.data.SalaryEndRange} />
                                        </FormGroup>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                        <FormGroup label="Salary End Range" required={true}>
                                            <TextArea placeholder="Enter description" className="form-control" name="SalaryEndRange" value={this.props.data.SalaryEndRange} />
                                        </FormGroup>
                                    </div>
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
        'data': state.hr.recruitement.requisitions.get("data").toObject()
    }
}

let mapDispatchToProps = function (dispatch) {
    return {
        dispatch
    }
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(Requisitions) 