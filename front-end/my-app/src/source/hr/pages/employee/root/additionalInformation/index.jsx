import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import ProfileInformation from './profileInformation';
import Documents from './documents';
import Gallery from './gallery';

export default class AdditionalInformation extends React.Component {

    render() {
        return (<div className="ibox-content">
            <div className="row">
                <div className="col-md-12 col-xs-12 col-sm-12 col-lg-12">
                    <div className="row">

                        <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
                            <Tab eventKey={1} title="Profile Info">

                                <ProfileInformation data={this.props.data} dispatch={this.props.dispatch} onChange={this.props.onChange}/>

                            </Tab>
                            <Tab eventKey={2} title="Documents">

                                <Documents data={this.props.data} dispatch={this.props.dispatch} onChange={this.props.onChange}/>

                            </Tab>

                            {/*<Tab eventKey={3} title="Gallery">

                                <Gallery data={this.props.data} dispatch={this.props.dispatch} onChange={this.props.onChange}/>

                            </Tab>*/}
                        </Tabs>

                    </div>
                </div>
            </div>
        </div>)
    }

    onBasicInformationSubmit(e) {
        e.preventDefault();
    }
}