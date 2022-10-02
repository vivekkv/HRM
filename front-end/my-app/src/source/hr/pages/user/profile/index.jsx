import React from 'react';
import { connect } from 'react-redux';
import AuthenticationComponent from '../../../../components/Base/AuthenticationComponent';

class UserProfile extends AuthenticationComponent {

    render() {

        return <div className="row">

            <div className="col-md-4">
                <div className="ibox float-e-margins">
                    <div className="ibox-title">
                        <h5>Profile Detail</h5>
                    </div>
                    <div>
                        <div className="ibox-content no-padding border-left-right">
                            <img alt="image" className="img-responsive" src="/assets/images/profile_big.jpg" />
                        </div>
                        <div className="ibox-content profile-content">
                            <h4><strong>Monica Smith</strong></h4>
                            <p><i className="fa fa-map-marker"></i> Riviera State 32/106</p>
                            <h5>
                                About me
                                </h5>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitat.
                                </p>
                            <div className="row m-t-lg">

                            </div>
                            <div className="user-button">
                                <div className="row">
                                    <div className="col-md-6">
                                        <button type="button" className="btn btn-primary btn-sm btn-block"><i className="fa fa-envelope"></i> Send Message</button>
                                    </div>
                                    <div className="col-md-6">
                                        <button type="button" className="btn btn-default btn-sm btn-block"><i className="fa fa-coffee"></i> Upload New Image</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-md-8">
                <div className="ibox float-e-margins">
                    <div className="ibox-title">
                        <h5>Activites</h5>
                        <div className="ibox-tools">
                            <a className="collapse-link">
                                <i className="fa fa-chevron-up"></i>
                            </a>
                            <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                                <i className="fa fa-wrench"></i>
                            </a>
                            <a className="close-link">
                                <i className="fa fa-times"></i>
                            </a>
                        </div>
                    </div>
                    <div className="ibox-content">
                        <div>
                            <div className="feed-activity-list">

                                <div className="feed-element">

                                    <div className="media-body ">
                                        <small className="pull-right text-navy">1m ago</small>
                                        <strong>Sandra Momot</strong> started following <strong>Monica Smith</strong>. <br />
                                        <small className="text-muted">Today 4:21 pm - 12.06.2014</small>
                                    </div>
                                </div>
                            </div>
                            <button className="btn btn-primary btn-block m"><i className="fa fa-arrow-down"></i> Show More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}

let mapStateToProps = function (state) {
    return {
        'data': state.hr.user.userProfile.get("data").toObject()
    }
}

let mapDispatchToProps = function (dispatch) {
    return {
        dispatch,
        onChange: function (name, value) {

        }
    }
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(UserProfile) 