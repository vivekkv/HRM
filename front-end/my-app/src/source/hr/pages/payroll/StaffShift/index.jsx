import React from 'react';
import { connect } from 'react-redux';
import Dropdown from 'staticComponents/dropdown';
import Form from 'staticComponents/form';
import FormGroup from 'staticComponents/formGroup';
import Input from 'staticComponents/input';
import TextArea from 'staticComponents/textarea';
import Radio from 'staticComponents/radio';

class StaffShift extends React.Component {

    render() {
        return (<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="ibox float-e-margins">
                <div className="ibox-title">
                    <h5><i className="fa fa-clipboard" aria-hidden="true"></i>Staff Shift</h5>
                </div>
                <div className="ibox-content">
                    <Form>

                        <div className="row">

                            <div className="col-md-3 col-xs-12 col-sm-12 col-lg-3">
                                <FormGroup label="Staff">
                                    <Dropdown multi={false} name="StaffId" updateAlways={true} dataSource={this.props.data.staffList.toArray()} value={this.props.data.StaffId} onChange={this.props.onChange} placeholder="Select staff" />
                                </FormGroup>
                            </div>

                            <div className="col-md-3 col-xs-12 col-sm-12 col-lg-3">
                                <FormGroup label="Shift">
                                    <Dropdown multi={false} name="ShiftId" updateAlways={true} dataSource={this.props.data.shiftList.toArray()} value={this.props.data.ShiftId} onChange={this.props.onChange} placeholder="Select shift" />
                                </FormGroup>
                            </div>

                            <div className="col-md-3 col-xs-12 col-sm-12 col-lg-3">
                                <FormGroup label="Start Date">
                                    <Input type="date" placeholder="Enter start date" className="form-control" name="StartDate" value={this.props.data.StartDate} />
                                </FormGroup>
                            </div>


                            <div className="col-md-3 col-xs-12 col-sm-12 col-lg-3">
                                <FormGroup label="EndDate">
                                    <Input type="date" placeholder="Enter start date" className="form-control" name="StartDate" value={this.props.data.StartDate} />
                                </FormGroup>
                            </div>
                        </div>

                        <div className="row">
                            
                            <div className="col-md-3 col-xs-12 col-sm-12 col-lg-3">
                                <FormGroup label="">
                                    <label>
                                        <span>Punch Required</span>
                                        <Input type="checkbox" className="form-control tlnt-input-one" name="PunchRequired" value={this.props.data.PunchRequired} checked={this.props.data.PunchRequired} onChange={this.props.onChange} />
                                    </label>
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
        )
    }
}

let mapStateToProps = function (state) {
    return {
        'data': state.hr.payroll.staffShift.get("data").toObject()
    }
}

let mapDispatchToProps = function (dispatch) {
    return {
        dispatch
    }
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(StaffShift);