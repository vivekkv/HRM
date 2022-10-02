import Form from 'staticComponents/form';
import React from 'react';
import { connect } from 'react-redux';
import Qualification from './qualification';
import Experiecne from './experience';
import { Tabs, Tab } from 'react-bootstrap';

export default class QualificationAndExperience extends React.Component {

    render() {
        return (<div className="ibox-content">
            <div className="row">
                <div className="col-md-12 col-xs-12 col-sm-12 col-lg-12">
                        <div className="row">

                            <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
                                <Tab eventKey={1} title="Qualification">

                                    <Qualification data={this.props.data} dispatch={this.props.dispatch} onChange={this.props.onChange}/>
                                    
                                </Tab>
                                <Tab eventKey={2} title="Experience">
                                    
                                    <Experiecne data={this.props.data} dispatch={this.props.dispatch} onChange={this.props.onChange}/>

                                </Tab>
                            </Tabs>

                        </div>
                </div>
            </div>
        </div>)
    }
}