import React from 'react'
import { connect } from 'react-redux';
import BasicInformation from './basicInformation';
import ContactInformation from './contactInformation';
import AdditionalInformation from './additionalInformation';
import UserInformation from './userInformation';
import OfficalInformation from './officialInformation';
import QualificationAndExperience from './qualificaitonAndExperience';
import actionCreator from '../../../actions/actionCreator';
import AuthenticationComponent from '../../../../components/Base/AuthenticationComponent';
import { formatDate, getAge, showDialog } from 'utils';
import Styles from './styles.css';

class Employee extends AuthenticationComponent {

    render() {

        return (<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">

            <div className="ibox float-e-margins">

                <div className="ibox-title">
                    <h5><i className="fa fa-user-secret" aria-hidden="true"></i>Employees</h5>
                    <p className={Styles.Emp_Info_Panel}>{ this.props.data.EmployeeCode ? (<span><i className="fa fa-address-card" aria-hidden="true"></i> Employee Code: {this.props.data.EmployeeCode} </span>) : null  }</p>
                </div>
                
                <div className="ibox-content">
                    <div className="row">

                        <div id="bootstrap-wizard-1" className="col-sm-12 col-md-12 col-xs-12 col-lg-12">
                            <div className="form-bootstrapWizard">
                                <ul className="bootstrapWizard form-wizard">
                                    
                                    <li className={this.props.data.currentTab == 1 ? "active": ""} data-target="#step1" ><a data-toggle="tab" ><span  className="step" data-id={1} onClick={this.props.goToTab}>1</span><span className="title">Basic information</span></a></li>
                                    
                                    <li className={this.props.data.currentTab == 2 ? "active": ""}  ><a data-toggle="tab" data-target="#step2" ><span  className="step" onClick={this.props.goToTab} data-id="2">2</span><span className="title">Contact information</span></a></li>

                                     <li className={this.props.data.currentTab == 3 ? "active": ""} data-target="#step3" ><a data-toggle="tab"><span  className="step" data-id={3} onClick={this.props.goToTab}>3</span><span className="title">Official Information</span></a></li>
                                   
                                     <li className={this.props.data.currentTab == 4 ? "active": ""} data-target="#step4"><a data-toggle="tab"><span data-id={4} onClick={this.props.goToTab} className="step">4</span><span className="title">Qualification &amp; Experience </span></a></li>

                                     <li className={this.props.data.currentTab == 5 ? "active": ""} data-target="#step5"><a data-toggle="tab"><span data-id={5} onClick={this.props.goToTab} className="step">5</span><span className="title">Additional Information</span></a></li>
                                </ul>
                            </div>

                            <div className="tab-content">
                                <div className="row">
                                    {
                                        this.props.data.currentTab == 1 ? <BasicInformation data={this.props.data} onChange={this.props.onChange} dispatch={this.props.dispatch} /> : null
                                    }
                                    {
                                        this.props.data.currentTab == 2 ? <ContactInformation data={this.props.data} onChange={this.props.onChange} dispatch={this.props.dispatch}/> : null
                                    }
                                    {
                                        this.props.data.currentTab == 3 ? <OfficalInformation data={this.props.data} onChange={this.props.onChange} dispatch={this.props.dispatch}/> : null
                                    }
                                    {
                                        this.props.data.currentTab == 4 ? <QualificationAndExperience data={this.props.data} onChange={this.props.onChange} dispatch={this.props.dispatch}/> : null
                                    }
                                    {
                                        this.props.data.currentTab == 5 ? <AdditionalInformation data={this.props.data} onChange={this.props.onChange} dispatch={this.props.dispatch}/> : null
                                    }
                                </div>
                            </div>

                                <div className="row">

                                    {
                                        this.props.data.currentTab != 5 ? 
                                         <button className="btn btn_submit pull-right" type="button" onClick={this.props.nextTab}><i className="fa fa-arrow-right" aria-hidden="true"></i> </button>: null
                                    } 
                                   

                                    <button className="btn btn-save pull-right" type="button"  onClick={this.saveTab.bind(this)}>SAVE<i className="fa fa-floppy-o" aria-hidden="true"></i> </button>

                                     {
                                        this.props.data.currentTab != 1 ? 
                                         <button className="btn btn_reset pull-right" type="button" onClick={this.props.previousTab}><i className="fa fa-arrow-left" aria-hidden="true"></i> </button> : null
                                    } 

                                    
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </div>)
    }

    componentDidMount() {
        
        this.props.dispatch(actionCreator("EMPLOYEE", "INPUT_CHANGED", { name: 'init' }));
    }

    saveTab() {

         if(this.props.data.DateOfBirth && getAge(formatDate(this.props.data.DateOfBirth)) < 18 && this.props.data.currentTab == 1) {

            showDialog("Employee age is under 18, are you sure to continue ? ", () => {
            
                this.props.dispatch(actionCreator("EMPLOYEE", "SAVE_EMPLOYEE_ROOT"))
            });
        } else {

            this.props.dispatch(actionCreator("EMPLOYEE", "SAVE_EMPLOYEE_ROOT"));
        }
    }
}

let mapStateToProps = function (state) {
    return {
        'data': state.hr.employee.root.get("data").toObject()
    }
}

let mapDispatchToProps = function (dispatch) {
    return {
        dispatch,
        nextTab: function() {

            dispatch(actionCreator("EMPLOYEE", "INPUT_CHANGED", { name: 'TabChange', 'value': { 'next': true } }))
        },
        previousTab: function() {
            
             dispatch(actionCreator("EMPLOYEE", "INPUT_CHANGED", { name: 'TabChange', 'value': { 'next': false } }))
        },
        onChange: function (name, value) {
            
            dispatch(actionCreator("EMPLOYEE", "INPUT_CHANGED", { name, value }))
        },
        goToTab: function(e) {

            let tabId = Number(e.target.getAttribute("data-id"));

            if(tabId >= 1 && tabId <=5) {

                dispatch(actionCreator("EMPLOYEE", "INPUT_CHANGED", { name: 'currentTab', 'value': tabId }))
            }
        }
    }
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(Employee)