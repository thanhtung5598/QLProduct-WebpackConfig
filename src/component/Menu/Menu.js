import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";

const menus = [
    {
        name: "Home",
        to: "/",
        exact: true
    },
    {
        name: "Manage Product",
        to: "/product-list",
        exact: false
    }
];

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
    return (
        <Route
            path={to}
            exact={activeOnlyWhenExact}
            children={({ match }) => {
                return (
                    <li className={match === true ? 'active' : ''}>
                        <Link to={to}>
                            {label}
                        </Link>
                    </li>
                )
            }}
        />
    )
}

class Menu extends Component {
    showMenu = (menus) => {
        var result = null;
        if (menus.length > 0) {
            result = menus.map((menu, index) => {
                return (
                    <MenuLink
                        key={index}
                        label={menu.name}
                        to={menu.to}
                        activeOnlyWhenExact={menu.exact}
                    />
                )
            });
        }
        return result;
    }
    render() {
        return (
            <div className="navbar">
                <a href="/" className="navbar-brand">API</a>
                <ul className="nav navbar-nav">
                    {this.showMenu(menus)}
                </ul>
            </div>
        );
    }
}

export default Menu;
