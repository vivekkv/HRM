import React from 'react';
import { connect } from 'react-redux';
import Dropdown from 'staticComponents/dropdown';
import Form from 'staticComponents/form';
import FormGroup from 'staticComponents/formGroup';
import Input from 'staticComponents/input';

class SystemSettings extends React.Component {

    render() {
        return (<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="ibox float-e-margins">
                <div className="ibox-title">
                    <h5><i className="fa fa-clipboard" aria-hidden="true"></i>System Settings</h5>
                </div>
                <div className="ibox-content">

                    <Form>

                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                <FormGroup label="Default Time Zone">
                                    <Dropdown multi={false} name="TimeZoneId" updateAlways={true} dataSource={this.props.data.TimezoneList.toArray()} value={this.props.data.TimeZoneId} onChange={this.props.onChange} placeholder="Select time zone" />
                                </FormGroup>
                            </div>


                            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                <FormGroup label="Date Format">
                                    <Dropdown multi={false} name="DateFormatId" updateAlways={true} dataSource={this.props.data.DateFormatList.toArray()} value={this.props.data.DateFormatId} onChange={this.props.onChange} placeholder="Select date format" />
                                </FormGroup>
                            </div>

                            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                <FormGroup label="Time Format">
                                    <Dropdown multi={false} name="TimeFormatId" updateAlways={true} dataSource={this.props.data.TimeFormatList.toArray()} value={this.props.data.TimeFormatId} onChange={this.props.onChange} placeholder="Select time format" />
                                </FormGroup>
                            </div>

                            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                <FormGroup label="No Of Rows In Grid">
                                    <Dropdown multi={false} name="NoOfRowsInGrid" updateAlways={true} dataSource={this.props.data.GridRowCountList.toArray()} value={this.props.data.NoOfRowsInGrid} onChange={this.props.onChange} placeholder="Select no of rows in grid" />
                                </FormGroup>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                <FormGroup label="Currency">
                                    <Dropdown multi={false} name="CurrencyId" updateAlways={true} dataSource={this.props.data.CurrencyList.toArray()} value={this.props.data.CurrencyId} onChange={this.props.onChange} placeholder="Select currency" />
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
        'data': state.hr.settings.systemSettings.get("data").toObject()
    }
}

let mapDispatchToProps = function (dispatch) {
    return {
        dispatch
    }
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(SystemSettings);