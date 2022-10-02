import React from 'react';
import { connect } from 'react-redux';
import Form from 'staticComponents/form';
import Input from 'staticComponents/input';
import TextArea from 'staticComponents/textarea';
import FormGroup from 'staticComponents/formGroup';
import Dropdown from 'staticComponents/dropdown';

export default class ContactInformation extends React.Component {

    render() {
        return (<div className="ibox-content">
            <div className="row">
                <div className="col-md-12 col-xs-12 col-sm-12 col-lg-12">
                    <Form>

                        <div className="row">

                            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                <FormGroup label="Email" >
                                    <Input name="Email" className="form-control" value={this.props.data.Email} onChange={this.props.onChange} placeholder="Enter email" />
                                </FormGroup>
                            </div>

                            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                <FormGroup label="Phone 1" >
                                    <Input name="Phone1" className="form-control" value={this.props.data.Phone1} onChange={this.props.onChange} placeholder="Enter phone 1" />
                                </FormGroup>
                            </div>

                            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                <FormGroup label="Phone 2" >
                                    <Input name="Phone2" className="form-control" value={this.props.data.Phone2} onChange={this.props.onChange} placeholder="Enter phone 2" />
                                </FormGroup>
                            </div>

                            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                <FormGroup label="Nationality" required={true}>
                                    <Dropdown multi={false} name="NationalityId" updateAlways={true} dataSource={this.props.data.CountryList.toArray()} value={this.props.data.NationalityId} onChange={this.props.onChange} placeholder="Select nationality" />
                                </FormGroup>
                            </div>
                        </div>

                        <div className="row">

                            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                <FormGroup label="Country" required={true}>
                                    <Dropdown multi={false} name="CountryId" updateAlways={true} dataSource={this.props.data.CountryList.toArray()} value={this.props.data.CountryId} onChange={this.props.onChange} placeholder="Select country" />
                                </FormGroup>
                            </div>

                            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                <FormGroup label="State" required={true}>
                                    <Dropdown multi={false} name="StateId" updateAlways={true} dataSource={this.props.data.StateList.toArray()} value={this.props.data.StateId} onChange={this.props.onChange} placeholder="Select state" />
                                </FormGroup>
                            </div>

                            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                <FormGroup label="City" >
                                    <Input name="City" className="form-control" value={this.props.data.City} onChange={this.props.onChange} placeholder="Enter city" />
                                </FormGroup>
                            </div>

                            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                <FormGroup label="Place" >
                                    <Input name="Place" className="form-control" value={this.props.data.Place} onChange={this.props.onChange} placeholder="Enter place" />
                                </FormGroup>
                            </div>

                        </div>

                        <div className="row">

                            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                <FormGroup label="Landmark" >
                                    <Input name="Landmark" className="form-control" value={this.props.data.Landmark} onChange={this.props.onChange} placeholder="Enter Landmark" />
                                </FormGroup>
                            </div>

                            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                <FormGroup label="Pincode" required={true}>
                                    <Input name="Pincode" className="form-control" value={this.props.data.Pincode} onChange={this.props.onChange} placeholder="Enter pincode" />
                                </FormGroup>
                            </div>

                            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                <FormGroup label="Current Address" required={true}>
                                    <TextArea name="CurrentAddress" className="form-control" value={this.props.data.CurrentAddress} onChange={this.props.onChange} placeholder="Enter current address" />
                                </FormGroup>
                            </div>

                            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                <FormGroup label="Permenant Address" required={true}>
                                    <TextArea name="PermenantAddress" className="form-control" value={this.props.data.PermenantAddress} onChange={this.props.onChange} placeholder="Enter permenant address" />
                                </FormGroup>
                            </div>

                        </div>
                    </Form>
                </div>
            </div>
        </div>)
    }
}