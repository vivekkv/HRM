import React from 'react';
import { connect } from 'react-redux';
import Form from 'staticComponents/form';
import Input from 'staticComponents/input';
import TextArea from 'staticComponents/textarea';
import FormGroup from 'staticComponents/formGroup';
import Dropdown from 'staticComponents/dropdown';

class Holidays extends React.Component {

    render() {
        return (<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="ibox float-e-margins">
                <div className="ibox-title">
                    <h5><i className="fa fa-clipboard" aria-hidden="true"></i>Holidays</h5>
                </div>
                <div className="ibox-content">
                    <div className="row">
                        <div className="col-md-12 col-xs-12 col-sm-12 col-lg-12">
                            <Form>
                                <div className="row">

                                    <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                        <FormGroup label="Title" required={true}>
                                            <Input type="text" autoFocus={true} placeholder="Enter Title" className="form-control" name="Title" value={this.props.data.Title} />
                                        </FormGroup>
                                    </div>

                                    <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                        <FormGroup label="Branch" required={true}>
                                            <Dropdown multi={false} name="BranchId" updateAlways={true} dataSource={this.props.data.BranchList.toArray()} value={this.props.data.BranchId} onChange={this.props.onChange} placeholder="Select Branch" />
                                        </FormGroup>
                                    </div>

                                    <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                        <FormGroup label="Department" required={true}>
                                            <Dropdown multi={false} name="DepartmentId" updateAlways={true} dataSource={this.props.data.DepartmentList.toArray()} value={this.props.data.DepartmentId} onChange={this.props.onChange} placeholder="Select Department" />
                                        </FormGroup>
                                    </div>

                                    <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                        <FormGroup label="Employee Type" required={true}>
                                            <Dropdown multi={false} name="EmployeeTypeId" updateAlways={true} dataSource={this.props.data.EmployeeTypeList.toArray()} value={this.props.data.EmployeeTypeId} onChange={this.props.onChange} placeholder="Select EmployeeType" />
                                        </FormGroup>
                                    </div>

                                </div>

                                <div className="row">

                                    <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                        <FormGroup label="Start Date" required={true}>
                                            <Input type="text" autoFocus={true} placeholder="Enter Holiday Start Date" className="form-control" name="StartDate" value={this.props.data.StartDate} />
                                        </FormGroup>
                                    </div>

                                    <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                        <FormGroup label="End Date" required={true}>
                                            <Input type="text" autoFocus={true} placeholder="Enter Holiday End Date" className="form-control" name="EndDate" value={this.props.data.EndDate} />
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
        'data': state.hr.timesheet.holidays.get("data").toObject()
    }
}

let mapDispatchToProps = function (dispatch) {
    return {
        dispatch
    }
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(Holidays) 