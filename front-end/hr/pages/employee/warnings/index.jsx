import React from 'react'
import { connect } from 'react-redux';
import Form from 'staticComponents/form';
import Input from 'staticComponents/input';
import TextArea from 'staticComponents/textarea';
import FormGroup from 'staticComponents/formGroup';
import Dropdown from 'staticComponents/dropdown';

class Warnings extends React.Component {

    render() {

        return (<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="ibox float-e-margins">
                <div className="ibox-title">
                    <h5><i className="fa fa-clipboard" aria-hidden="true"></i>Add warnings</h5>
                </div>
                <div className="ibox-content">
                    <Form>
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                <FormGroup label="Warning To" required={true}>
                                    <Dropdown multi={false} name="WarningTo" updateAlways={true} dataSource={this.props.data.WarningToList.toArray()} value={this.props.data.PromotionFor} onChange={this.props.onChange} placeholder="Select warning to" />
                                </FormGroup>
                            </div>
                              <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                <FormGroup label="Foward to" required={true}>
                                    <Dropdown multi={false} name="ForwardTo" updateAlways={true} dataSource={this.props.data.ForwardToList.toArray()} value={this.props.data.ForwardTo} onChange={this.props.onChange} placeholder="Select forward to" />
                                </FormGroup>
                            </div>
                               <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                <FormGroup label="Warnined By" required={true}>
                                    <Dropdown multi={false} name="WarnedBy" updateAlways={true} dataSource={this.props.data.WarnedByList.toArray()} value={this.props.data.WarnedBy} onChange={this.props.onChange} placeholder="Select warned by" />
                                </FormGroup>
                            </div>
                            
                            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                <FormGroup label="Warning Date" required={true}>
                                    <Input type="date" placeholder="Enter warning date" className="form-control" name="WarningDate" value={this.props.data.WarningDate} />
                                </FormGroup>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                <FormGroup label="Warning Type" required={true}>
                                    <Dropdown multi={false} name="WarningType" updateAlways={true} dataSource={this.props.data.WarningTypeList.toArray()} value={this.props.data.WarningType} onChange={this.props.onChange} placeholder="Select warned type" />
                                </FormGroup>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <FormGroup label="Description" required={true}>
                                    <Input placeholder="Enter description" className="form-control" name="Description" value={this.props.data.Description} />
                                </FormGroup>
                            </div>
                        </div>
                    </Form>
                </div>
            </div>
        </div>)
    }
}

let mapStateToProps = function (state) {
    return {
        'data': state.hr.employee.warning.get("data").toObject()
    }
}

let mapDispatchToProps = function (dispatch) {
    return {
        dispatch
    }
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(Warnings)