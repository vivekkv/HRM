import React from 'react';
import { connect } from 'react-redux';
import Dropdown from 'staticComponents/dropdown';
import Input from 'staticComponents/input';
import Form from 'staticComponents/form';
import FormGroup from 'staticComponents/formGroup';
import TextArea from 'staticComponents/textarea';

class PayPeriod extends React.Component {

    render() {
        return (<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="ibox float-e-margins">
                    <div className="ibox-title">
                        <h5><i className="fa fa-clipboard" aria-hidden="true"></i>Pay Period</h5>
                    </div>
                    <div className="ibox-content">
                        <Form>

                            <div className="col-md-3 col-xs-12 col-sm-12 col-lg-3">
                                <FormGroup label="Period Type">
                                    <Dropdown multi={false} name="PeriodType" updateAlways={true} dataSource={this.props.data.payperiodTypeList.toArray()} value={this.props.data.PeriodType} onChange={this.props.onChange} placeholder="Select payperiod type" />
                                </FormGroup>
                            </div>

                            <div className="col-md-3 col-xs-12 col-sm-12 col-lg-3">
                                <FormGroup label="Start Date">
                                     <Input type="date" placeholder="Enter start date" className="form-control" name="StartDate" value={this.props.data.StartDate} />
                                </FormGroup>
                            </div>

                            <div className="col-md-3 col-xs-12 col-sm-12 col-lg-3">
                                <FormGroup label="To date">
                                    <Input type="date" placeholder="Enter end date" className="form-control" name="EndDate" value={this.props.data.EndDate} />
                                </FormGroup>
                            </div>

                            <div className="col-md-3 col-xs-12 col-sm-12 col-lg-3">
                                <FormGroup label="Description">
                                    <TextArea className="form-control tlnt-input-one" autoFocus={true} name="Description" value={this.props.data.Description} placeholder="Enter description" onChange={this.props.onChange} />
                                </FormGroup>
                            </div>

                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <FormGroup label="Description" required={true}>
                                        <TextArea placeholder="Enter description" className="form-control" name="Description" value={this.props.data.Description} />
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
        'data': state.hr.payroll.payPeriod.get("data").toObject()
    }
}

let mapDispatchToProps = function (dispatch) {
    return {
        dispatch
    }
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(PayPeriod)