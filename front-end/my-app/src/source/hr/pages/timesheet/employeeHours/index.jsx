import React from 'react';
import { connect } from 'react-redux';
import Form from 'staticComponents/form';
import Input from 'staticComponents/input';
import TextArea from 'staticComponents/textarea';
import FormGroup from 'staticComponents/formGroup';
import Dropdown from 'staticComponents/dropdown';

class EmployeeHours extends React.Component {

    render() {
        return (<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="ibox float-e-margins">
                <div className="ibox-title">
                    <h5><i className="fa fa-clipboard" aria-hidden="true"></i>Employee Hours</h5>
                </div>
                <div className="ibox-content">
                    <div className="row">
                        <div className="col-md-12 col-xs-12 col-sm-12 col-lg-12">
                            <Form>
                                <div className="row">

                                    <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                        <FormGroup label="Employee" required={true}>
                                            <Dropdown multi={false} name="EmployeeId" updateAlways={true} dataSource={this.props.data.EmployeeList.toArray()} value={this.props.data.EmployeeId} onChange={this.props.onChange} placeholder="Select employee" />
                                        </FormGroup>
                                    </div>

                                    <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                        <FormGroup label="Project" required={true}>
                                            <Dropdown multi={false} name="ProjectId" updateAlways={true} dataSource={this.props.data.ProjectList.toArray()} value={this.props.data.ProjectId} onChange={this.props.onChange} placeholder="Select project" />
                                        </FormGroup>
                                    </div>

                                    <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                        <FormGroup label="Date" required={true}>
                                            <Input type="text" autoFocus={true} placeholder="Enter Date" className="form-control" name="Date" value={this.props.data.Date} />
                                        </FormGroup>
                                    </div>


                                    <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                        <FormGroup label="Regular Hours" required={true}>
                                            <Input type="text" autoFocus={true} placeholder="Enter Regular Hours" className="form-control" name="RegularHours" value={this.props.data.RegularHours} />
                                        </FormGroup>
                                    </div>

                                </div>

                                <div className="row">

                                    <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                        <FormGroup label="Overtime Hours" required={true}>
                                            <Input type="text" autoFocus={true} placeholder="Enter Overtime Hours" className="form-control" name="OvertimeHours" value={this.props.data.OvertimeHours} />
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
        'data': state.hr.timesheet.employeeHours.get("data").toObject()
    }
}

let mapDispatchToProps = function (dispatch) {
    return {
        dispatch
    }
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(EmployeeHours) 