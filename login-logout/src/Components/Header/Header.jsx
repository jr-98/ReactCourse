import React, { Component } from 'react';
import Login from '../Login/Login';
import Logout from '../Logout/Logout';
import "bootstrap/dist/css/bootstrap.min.css";
import './Header.css';


class Header extends Component {
    render() {
        return (
            <div className='callout primary d-flex' id='Header'>
                <div className='row colum'>
                    <h1>{this.props.name}</h1>
                </div>
                <div>
                    <Logout></Logout>
                    <Login></Login>
                </div>
            </div>
        );
    }
}
export default Header;