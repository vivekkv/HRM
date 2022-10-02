import React from 'react';
import { connect } from 'react-redux';
import Form from 'staticComponents/form';
import Input from 'staticComponents/input';
import FormGroup from 'staticComponents/formGroup';
import Dropdown from 'staticComponents/dropdown';
import DatePicker from 'staticComponents/datepicker';

export default class OfficeInformation extends React.Component {

    render() {
        return (<div className="ibox-content">
            <div className="row">
                <div className="col-md-12 col-xs-12 col-sm-12 col-lg-12">
                    <Form onSubmit={this.onBasicInformationSubmit.bind(this)}>
                        <div className="row">

                            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                <FormGroup label="Department" required={true} >
                                    <Dropdown multi={false} name="DepartmentId" updateAlways={true} dataSource={this.props.data.DepartmentList.toArray()} value={this.props.data.DepartmentId} onChange={this.props.onChange} placeholder="Select department" />
                                </FormGroup>
                            </div>


                            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                <FormGroup label="Joining Date" required={true}>
                                    <DatePicker dateFormat="DD/MM/YYYY" name="JoiningDate" value={this.props.data.JoiningDate} className="form-control tlnt-input-one" placeholder="Enter joining date" onChange={this.props.onChange} />
                                </FormGroup>
                            </div>

                            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                <FormGroup label="Service Start Date" required={true}>
                                    <DatePicker dateFormat="DD/MM/YYYY" name="ServiceStartDate" value={this.props.data.ServiceStartDate} className="form-control tlnt-input-one" placeholder="Enter service start date" onChange={this.props.onChange} />
                                </FormGroup>
                            </div>


                            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                <FormGroup label="Grade" required={true}>
                                    <Dropdown multi={false} name="Grade" updateAlways={true} dataSource={this.props.data.GradeList.toArray()} value={this.props.data.Grade} onChange={this.props.onChange} placeholder="Select grade" />
                                </FormGroup>
                            </div>

                        </div>
                        <div className="row">

                            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                <FormGroup label="Designation" required={true}>
                                    <Dropdown multi={false} name="DesignationId" updateAlways={true} dataSource={this.props.data.DesignationList.toArray()} value={this.props.data.DesignationId} onChange={this.props.onChange} placeholder="Select designation" />
                                </FormGroup>
                            </div>

                        </div>
                    </Form>
                </div>
            </div>
        </div>)
    }

    onBasicInformationSubmit(e) {
        e.preventDefault();
    }
}