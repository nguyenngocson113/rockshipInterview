import React, { Component } from 'react';
import fire from '../../config/Firebase';
import './Header.scss';

class Header extends Component {

    logout() {
        fire.auth().signOut();
    }
 
    render() {
        return (
            <div class="row topnav">
                <div className="col-md-6 left"><img className="logo" src="/rockship-logo.png" alt="logo"></img></div>
                <div className="col-md-6 right"><i class="fa fa-sign-out right signOut" aria-hidden="true" onClick={() => this.logout()}></i></div>
            </div>
        );

    }

}

export default Header;
