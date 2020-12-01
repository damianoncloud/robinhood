import React, { Component } from 'react'
import logo from './robinhood.svg';
import './Header.css'; 

export default class Header extends Component {
    render() {
        return (
            <div className="header__wrapper">
                {/* logo */}
                <div className="header__logo">
                    <img src={logo} width={25}/>
                </div>
                {/* search */}
                <div className="header__search">
                    <div className="header__searchContainer">
                        
                        <input type="text" placeholder="Search" />
                    </div>
                </div>
                {/* menuitems */}
                <div className="header__menuItems">
                    <a href="#">Free Stocks</a>
                    <a href="#">Portfolio</a>
                    <a href="#">Cash</a>
                    <a href="#">Messages</a>
                    <a href="#">Account</a>
                </div>
            </div>
        )
    }
}

