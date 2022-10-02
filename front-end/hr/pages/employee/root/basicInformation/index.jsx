import React from 'react';
import { connect } from 'react-redux';
import Form from 'staticComponents/form';
import Input from 'staticComponents/input';
import TextArea from 'staticComponents/textarea';
import FormGroup from 'staticComponents/formGroup';
import Dropdown from 'staticComponents/dropdown';
import DatePicker from  'staticComponents/datepicker';

export default class BasicInformation extends React.Component {

    render() {

        return (<div className="ibox-content">

            <div className="row">

                <div className="col-md-12 col-xs-12 col-sm-12 col-lg-12">

                    <Form onSubmit={this.onBasicInformationSubmit.bind(this)}>

                        <div className="row">

                            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                <FormGroup label="Salutation" required={true}>
                                    <Dropdown multi={false} name="SalutationId" updateAlways={true} dataSource={this.props.data.SalutationList.toArray()} value={this.props.data.SalutationId} onChange={this.props.onChange} placeholder="Select salutation" />
                                </FormGroup>
                            </div>

                            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                <FormGroup label="Firstname" required={true}>
                                    <Input name="Firstname" className="form-control" value={this.props.data.Firstname} onChange={this.props.onChange} placeholder="Enter firstname" />
                                </FormGroup>
                            </div>

                            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                <FormGroup label="Middlename" >
                                    <Input name="Middlename" className="form-control" value={this.props.data.Middlename} onChange={this.props.onChange} placeholder="Enter middlename" />
                                </FormGroup>
                            </div>


                            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                <FormGroup label="Lastname" >
                                    <Input name="Lastname" className="form-control" value={this.props.data.Lastname} onChange={this.props.onChange} placeholder="Enter lastname" />
                                </FormGroup>
                            </div>

                        </div>

                        <div className="row">

                            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                <FormGroup label="Gender" required={true}>
                                    <Dropdown multi={false} name="GenderId" updateAlways={true} dataSource={this.props.data.GenderList.toArray()} value={this.props.data.GenderId} onChange={this.props.onChange} placeholder="Select gender" />
                                </FormGroup>
                            </div>

                            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                <FormGroup label="Employee Type" required={true}>
                                    <Dropdown multi={false} name="EmployeeTypeId" updateAlways={true} dataSource={this.props.data.EmployeeTypeList.toArray()} value={this.props.data.EmployeeTypeId} onChange={this.props.onChange} placeholder="Select employee type" />
                                </FormGroup>
                            </div>

                            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                <FormGroup label="Employee Category" required={true}>
                                    <Dropdown multi={false} name="EmployeeCategoryId" updateAlways={true} dataSource={this.props.data.EmployeeCategoryList.toArray()} value={this.props.data.EmployeeCategoryId} onChange={this.props.onChange} placeholder="Select employee category" />
                                </FormGroup>
                            </div>

                            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                <FormGroup label="Maritial Status" required={true}>
                                    <Dropdown multi={false} name="MaritialStatusId" updateAlways={true} dataSource={this.props.data.MaritialStatusList.toArray()} value={this.props.data.MaritialStatusId} onChange={this.props.onChange} placeholder="Select maritial status" />
                                </FormGroup>
                            </div>

                        </div>

                        <div className="row">

                            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                <FormGroup label="Religion" required={true}>
                                    <Dropdown multi={false} name="ReligionId" updateAlways={true} dataSource={this.props.data.ReligionList.toArray()} value={this.props.data.ReligionId} onChange={this.props.onChange} placeholder="Select religion" />
                                </FormGroup>
                            </div>

                            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                <FormGroup label="Caste" required={true}>
                                    <Dropdown multi={false} name="CasteId" updateAlways={true} dataSource={this.props.data.CasteList.toArray()} value={this.props.data.CasteId} onChange={this.props.onChange} placeholder="Select caste" />
                                </FormGroup>
                            </div>

                            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                <FormGroup label="Date Of Birth" required={true}>
                                    <DatePicker dateFormat="DD/MM/YYYY" name="DateOfBirth" value={this.props.data.DateOfBirth} className="form-control tlnt-input-one" placeholder="Enter date of birth" onChange={this.props.onChange} />
                                </FormGroup>
                            </div>

                            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                <FormGroup label="Reports To" required={true}>
                                    <Dropdown multi={false} name="ReportsTo" updateAlways={true} dataSource={this.props.data.ReportsToList.toArray()} value={this.props.data.ReportsTo} onChange={this.props.onChange} placeholder="Select employee report to" />
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