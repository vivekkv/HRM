import Styles from "../styles.css";

export default function Navigation() {
  return (
    <div
      className={[
        "fixed-navigation pace-done",
        this.props.data.isMiniSideBar ? "mini-navbar" : Styles.big_menu_bar,
      ].join(" ")}
    >
      <nav className="navbar-default navbar-static-side" role="navigation">
        <div className="sidebar-collapse">
          <ul className="nav metismenu" id="side-menu">
            <li className="nav-header">
              <div className="dropdown profile-element">
                {" "}
                <span>
                  <img
                    alt="image"
                    className="img-circle"
                    src="/assets/Images/profile_small.jpg"
                  />
                </span>
                <a data-toggle="dropdown" className="dropdown-toggle">
                  <span className="clear">
                    {" "}
                    <span className="block m-t-xs">
                      {" "}
                      <strong className="font-bold">David Williams</strong>
                    </span>
                  </span>
                  <div
                    className={[
                      Styles.user_profile_ddl,
                      "user-profile-ddl-wrapper",
                    ].join(" ")}
                  ></div>
                </a>
              </div>
              <div className="logo-element">ERP</div>
            </li>
            <li>
              <ul className="cd-accordion-menu animated nav metismenu">
                <li className={[Styles.menu_group, "has-children"].join(" ")}>
                  <input
                    type="checkbox"
                    name="groupDashboard"
                    id="groupDashboard"
                  />
                  <label htmlFor="groupDashboard">
                    <a tooltip="Dashboard" href="/hr/home" id="tooltip-1">
                      <span>Dashboard</span>{" "}
                      <i className="fa fa-desktop" aria-hidden="true"></i>
                    </a>
                  </label>
                </li>

                <li className={[Styles.menu_group, "has-children"].join(" ")}>
                  <input
                    type="checkbox"
                    name="groupSettings"
                    id="groupSettings"
                  />
                  <label htmlFor="groupSettings">
                    <a tooltip="Settings" href={null}>
                      <span>Settings</span>{" "}
                      <i className="fa fa-cog" aria-hidden="true"></i>
                    </a>
                  </label>

                  <ul className="submenu">
                    <li>
                      <a
                        tooltip="User Management"
                        href="/hr/settings/userManagement"
                      >
                        <i className="fa fa-id-card-o"></i>
                        <span>User Management</span>
                      </a>
                    </li>
                  </ul>
                </li>

                <li className={[Styles.menu_group, "has-children"].join(" ")}>
                  <input
                    type="checkbox"
                    name="groupCompany"
                    id="groupCompany"
                  />
                  <label htmlFor="groupCompany">
                    <a tooltip="Company" href={null}>
                      <span>Company</span>{" "}
                      <i className="fa fa-circle-thin" aria-hidden="true"></i>
                    </a>
                  </label>

                  <ul className="submenu">
                    <li>
                      <a tooltip="New Company" href="/hr/company/add">
                        <i className="fa fa-plus"></i>
                        <span>New</span>
                      </a>
                    </li>
                    <li>
                      <a tooltip="Branch" href="/hr/company/branch">
                        <i className="fa fa-braille"></i>
                        <span>Branch</span>
                      </a>
                    </li>
                    <li>
                      <a tooltip="Department" href="/hr/company/department">
                        <i className="fa fa-building-o"></i>
                        <span>Department</span>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
