import React from 'react';
import { connect } from 'react-redux';
import Form from 'staticComponents/form';
import Input from 'staticComponents/input';
import TextArea from 'staticComponents/textarea';
import FormGroup from 'staticComponents/formGroup';
import Dropdown from 'staticComponents/dropdown';

class Attendence extends React.Component {

    render() {
        return (<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="ibox float-e-margins">
                <div className="ibox-title">
                    <h5><i className="fa fa-clipboard" aria-hidden="true"></i>Attendence</h5>
                </div>
                <div className="ibox-content">
                    <div className="row">
                        <div className="col-md-12 col-xs-12 col-sm-12 col-lg-12">
                            <Form>
                                <div className="row">

                                    <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                        <FormGroup label="Employee" required={true}>
                                            <Dropdown multi={false} name="Employee" updateAlways={true} dataSource={this.props.data.EmployeeList.toArray()} value={this.props.data.Employee} onChange={this.props.onChange} placeholder="Select employee" />
                                        </FormGroup>
                                    </div>

                                    <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                        <FormGroup label="Forward Application To" required={true}>
                                            <Dropdown multi={false} name="ForwardApplicationTo" updateAlways={true} dataSource={this.props.data.ForwardApplicationToList.toArray()} value={this.props.data.Employee} onChange={this.props.onChange} placeholder="Select employee" />
                                        </FormGroup>
                                    </div>

                                    <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                        <FormGroup label="Date" required={true}>
                                            <Input type="text" autoFocus={true} placeholder="Enter Date" className="form-control" name="Date" value={this.props.data.Date} />
                                        </FormGroup>
                                    </div>

                                    <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                        <FormGroup label="Sign In Time" required={true}>
                                            <Input type="text" autoFocus={true} placeholder="Enter sign in time" className="form-control" name="SignInTime" value={this.props.data.SignInTime} />
                                        </FormGroup>
                                    </div>

                                </div>

                                <div className="row">

                                    <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                        <FormGroup label="Sign Out Time" required={true}>
                                            <Input type="text" autoFocus={true} placeholder="Enter sign out time" className="form-control" name="SignOutTime" value={this.props.data.SignOutTime} />
                                        </FormGroup>
                                    </div>

                                    <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                        <FormGroup label="Lunch Break In Time" required={true}>
                                            <Input type="text" autoFocus={true} placeholder="Enter lunch break in time" className="form-control" name="LunchBreakInTime" value={this.props.data.LunchBreakInTime} />
                                        </FormGroup>
                                    </div>

                                    <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                        <FormGroup label="Lunch Break Out Time" required={true}>
                                            <Input type="text" autoFocus={true} placeholder="Enter lunch break out time" className="form-control" name="LunchBreakOutTime" value={this.props.data.LunchBreakOutTime} />
                                        </FormGroup>
                                    </div>

                                       <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                        <FormGroup label="Additional Break In Time" required={true}>
                                            <Input type="text" autoFocus={true} placeholder="Enter additional break out time" className="form-control" name="AdditionalBreakoutTime" value={this.props.data.AdditionalBreakoutTime} />
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
        'data': state.hr.timesheet.attendence.get("data").toObject()
    }
}

let mapDispatchToProps = function (dispatch) {
    return {
        dispatch
    }
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(Attendence) 