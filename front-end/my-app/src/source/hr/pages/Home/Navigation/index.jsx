import React from 'react';
import Styles from '../styles.css';
import { Link } from 'react-router';
import LinkWithTooltip from 'staticComponents/linkWithToolTip';
import { DropdownButton,MenuItem } from 'react-bootstrap';

export default class Navigation extends React.Component {

    render() {
        return (<div className={["fixed-navigation pace-done", this.props.data.isMiniSideBar ? "mini-navbar" : Styles.big_menu_bar].join(" ")}><nav className="navbar-default navbar-static-side" role="navigation">
            <div className="sidebar-collapse">
                <ul className="nav metismenu" id="side-menu">
                    <li className="nav-header">
                        <div className="dropdown profile-element"> <span>
                            <img alt="image" className="img-circle" src="/assets/Images/profile_small.jpg" />
                        </span>
                            <a data-toggle="dropdown" className="dropdown-toggle">
                                <span className="clear"> <span className="block m-t-xs"> <strong className="font-bold">David Williams</strong>
                                </span>
                                 </span> 
                                 <div className={[Styles.user_profile_ddl, "user-profile-ddl-wrapper"].join(" ")}>
                                   {/*<DropdownButton title={" "} key={"i"} id="dropdown1">
                                        <MenuItem eventKey="1">Action</MenuItem>
                                        <MenuItem eventKey="2">Another action</MenuItem>
                                        <MenuItem eventKey="3" active>Active Item</MenuItem>
                                        <MenuItem divider />
                                        <MenuItem eventKey="4">Separated link</MenuItem>
                                    </DropdownButton>*/}
                                </div>
                                </a>
                        </div>
                        <div className="logo-element">
                            ERP
                    </div>
                    </li>
                    <li>
                        <ul className="cd-accordion-menu animated nav metismenu">

                            <li className={[Styles.menu_group, "has-children"].join(" ")}>
                                <input type="checkbox" name="groupDashboard" id="groupDashboard" />
                                <label htmlFor="groupDashboard">
                                    <LinkWithTooltip tooltip="Dashboard" href="/hr/home" id="tooltip-1"><span>Dashboard</span> <i className="fa fa-desktop" aria-hidden="true"></i></LinkWithTooltip>
                                </label>
                            </li>

                            {/*<li className={[Styles.menu_group, "has-children"].join(" ")}>

                                <input type="checkbox" name="groupEmployee" id="groupEmployee" />
                                <label htmlFor="groupEmployee" > <span>Employees</span> <i className="fa fa-address-book-o" aria-hidden="true"></i></label>
                                <ul className="submenu">
                                    <li><Link to="/hr/employee"><i className="fa fa-window-maximize"></i><span>New Employee</span></Link></li>
                                </ul>
                            </li> 

                            <li className={[Styles.menu_group, "has-children"].join(" ")}>

                                <input type="checkbox" name="groupProjects" id="groupProjects" />
                                <label htmlFor="groupProjects" > <span>Projects</span> <i className="fa fa-fighter-jet" aria-hidden="true"></i></label>
                                <ul className="submenu">
                                    <li><Link to="/hr/project"><i className="fa fa-window-maximize"></i><span>New Project</span></Link></li>
                                </ul>
                            </li>*/}

                            <li className={[Styles.menu_group, "has-children"].join(" ")}>

                                <input type="checkbox" name="groupSettings" id="groupSettings" />
                                <label htmlFor="groupSettings" >
                                    <LinkWithTooltip tooltip="Settings" href={null}><span>Settings</span> <i className="fa fa-cog" aria-hidden="true"></i></LinkWithTooltip>
                                </label>

                                <ul className="submenu">
                                    <li>
                                        <LinkWithTooltip tooltip="User Management" href="/hr/settings/userManagement"><i className="fa fa-id-card-o"></i><span>User Management</span></LinkWithTooltip>
                                    </li>
                                </ul>
                            </li>

                            <li className={[Styles.menu_group, "has-children"].join(" ")}>

                                <input type="checkbox" name="groupCompany" id="groupCompany" />
                                <label htmlFor="groupCompany" >
                                    <LinkWithTooltip tooltip="Company" href={null}><span>Company</span> <i className="fa fa-circle-thin" aria-hidden="true"></i></LinkWithTooltip>
                                </label>

                                <ul className="submenu">
                                    <li>
                                        <LinkWithTooltip tooltip="New Company" href="/hr/company/add"><i className="fa fa-plus"></i><span>New</span></LinkWithTooltip>
                                    </li>
                                     <li>
                                        <LinkWithTooltip tooltip="Branch" href="/hr/company/branch"><i className="fa fa-braille"></i><span>Branch</span></LinkWithTooltip>
                                    </li>
                                    <li>
                                        <LinkWithTooltip tooltip="Department" href="/hr/company/department"><i className="fa fa-building-o"></i><span>Department</span></LinkWithTooltip>
                                    </li>

                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav></div>)
    }
}