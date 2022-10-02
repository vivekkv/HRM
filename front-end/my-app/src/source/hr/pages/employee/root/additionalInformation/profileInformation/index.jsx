import React from 'react';
import { connect } from 'react-redux';
import Form from 'staticComponents/form';
import Input from 'staticComponents/input';
import Textarea from 'staticComponents/textarea';
import FormGroup from 'staticComponents/formGroup';
import Dropdown from 'staticComponents/dropdown';
import Checkbox from 'staticComponents/checkbox';  
import DatePicker from 'staticComponents/datepicker';

export default class ProfileInformation extends React.Component {

    render() {
        return (<div className="ibox-content">
            <div className="row">
                <div className="col-md-12 col-xs-12 col-sm-12 col-lg-12">

                    <Form onSubmit={this.onSubmit.bind(this)}>
                        <div className="row">

                            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                <FormGroup label="Blood Group">
                                    <Dropdown multi={false} name="BloodGroupId" updateAlways={true} dataSource={this.props.data.BloodGroupList.toArray()} value={this.props.data.BloodGroupId} onChange={this.props.onChange} placeholder="Select blood group" />
                                </FormGroup>
                            </div>

                            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                <FormGroup label="Government Id / Social Security">
                                    <Input name="Ssn" className="form-control" value={this.props.data.Ssn} onChange={this.props.onChange} placeholder="Enter Government Id / Social Security" />
                                </FormGroup>
                            </div>

                            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                <FormGroup label="Tax Number">
                                    <Input name="TaxNumber" className="form-control" value={this.props.data.TaxNumber} onChange={this.props.onChange} placeholder="Enter employee tax number" />
                                </FormGroup>
                            </div>

                            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                <FormGroup label="Passport Number">
                                    <Input name="PassportNumber" className="form-control" value={this.props.data.PassportNumber} onChange={this.props.onChange} placeholder="Enter passport number" />
                                </FormGroup>
                            </div>

                        </div>
                        <div className="row">


                               <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                <FormGroup label="Passport Expiary" required={true}>
                                    <DatePicker dateFormat="DD/MM/YYYY" name="PassportExpiaryDate" value={this.props.data.PassportExpiaryDate} className="form-control tlnt-input-one" placeholder="Enter passport expiary date" onChange={this.props.onChange} />
                                </FormGroup>
                            </div> 

                            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                <FormGroup label="Driving Licence">
                                    <Input name="DrivingLicence" className="form-control" value={this.props.data.DrivingLicence} onChange={this.props.onChange} placeholder="Enter driving licence number" />
                                </FormGroup>
                            </div>

                            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                <FormGroup label="ESI Inssurance Number">
                                    <Input name="Esi" className="form-control" value={this.props.data.Esi} onChange={this.props.onChange} placeholder="Enter ESI Insurance number" />
                                </FormGroup>
                            </div>

                            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                <FormGroup label="Pan Card">
                                    <Input name="PanCard" className="form-control" value={this.props.data.PanCard} onChange={this.props.onChange} placeholder="Enter pan card number" />
                                </FormGroup>
                            </div>
                        </div>

                        <div className="row">

                            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                <FormGroup label="PF Number">
                                    <Input name="PfNumber" className="form-control" value={this.props.data.PfNumber} onChange={this.props.onChange} placeholder="Enter PF Number" />
                                </FormGroup>
                            </div>

                            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                <FormGroup label="Avoid PF Contribution">
                                    <Checkbox type="checkbox" name="AvoidPfContribution" className="form-control form-chkbox-ctrl" checked={this.props.data.AvoidPfContribution} value={this.props.data.AvoidPfContribution} onChange={this.props.onChange} />
                                </FormGroup>
                            </div>

                            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                <FormGroup label="Holiday Elgibility">
                                    <Checkbox type="checkbox" name="HolidayWageEligibility" className="form-control form-chkbox-ctrl" checked={this.props.data.HolidayWageEligibility} value={this.props.data.HolidayWageEligibility} onChange={this.props.onChange} />
                                </FormGroup>
                            </div>

                            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                <FormGroup label="LWF Elgibility">
                                    <Checkbox type="checkbox" name="LwfEligibility" className="form-control form-chkbox-ctrl" checked={this.props.data.LwfEligibility} value={this.props.data.LwfEligibility} onChange={this.props.onChange} />
                                </FormGroup>
                            </div>

                        </div>

                    </Form>
                </div>
            </div>
        </div>)
    }

    onSubmit(e) {

        e.preventDefault();

    }
}