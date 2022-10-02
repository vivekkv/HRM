import React from 'react';
import { connect } from 'react-redux';
import Dropdown from 'staticComponents/dropdown';
import Form from 'staticComponents/form';
import FormGroup from 'staticComponents/formGroup';

class PayPeriodClose extends React.Component {

    render() {
        return (<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="ibox float-e-margins">
                    <div className="ibox-title">
                        <h5><i className="fa fa-clipboard" aria-hidden="true"></i>Pay Period Close</h5>
                    </div>
                    <div className="ibox-content">
                        <Form>

                            <div className="col-md-3 col-xs-12 col-sm-12 col-lg-3">
                                <FormGroup label="Payperiod">
                                    <Dropdown multi={false} name="PayPeriodId" updateAlways={true} dataSource={this.props.data.payperiodList.toArray()} value={this.props.data.PayPeriodId} onChange={this.props.onChange} placeholder="Select pey period" />
                                </FormGroup>
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
        'data': state.hr.payroll.payPeriodClose.get("data").toObject()
    }
}

let mapDispatchToProps = function (dispatch) {
    return {
        dispatch
    }
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(PayPeriodClose)