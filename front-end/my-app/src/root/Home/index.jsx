// import React from 'react'
// import { connect } from 'react-redux';
import Navigation from './Navigation';
// import Header from './Header';
// import AuthenticationComponent from '../../../components/Base/AuthenticationComponent';
// import Styles from './styles.css';

// class Home extends AuthenticationComponent {

//     render() {

//         return (<div id="wrapper"> 

//             {/* <Navigation data={this.props.navigation} />

//             <div className={["gray-bg sidebar-content", Styles.page_content_wrapper, this.props.navigation.isMiniSideBar ? Styles.mini_page_wrapper : Styles.big_page_wrapper].join(" ")}>

//                 <Header dispatch={this.props.dispatch} />

//                 <div className="wrapper wrapper-content animated fadeInRight row">
                    
//                     {this.props.children}

//                 </div>
//             </div> */}
//         </div>)
//     }

// }

// let mapStateToProps = function (state) {
//     return {
//         'navigation': state.hr.home.get("layout").toObject().navigation.toObject()
//     }
// }

// let mapDispatchToProps = function (dispatch) {
//     return {
//         dispatch
//     }
// }

// Home.contextTypes = {
//     router: React.PropTypes.object.isRequired
// };

export default function Home() {

    return <div>
        <Navigation />
    </div>

}