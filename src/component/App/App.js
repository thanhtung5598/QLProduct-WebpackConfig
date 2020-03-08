import React, { Component } from 'react';
import "./App.css";
import Menu from "./../Menu/Menu";
import routes from "./../../routes";
import { Switch, Route, BrowserRouter as Router, HashRouter} from "react-router-dom";

class App extends Component {
    showContentMenu = (routes) => {
        var result = null;
        if (routes.length > 0) {
            result = routes.map((route, index) => {
                return <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.main}
                />
            });
        }
        return result;
    }
    render() {
        console.log("render");
        return (
            <HashRouter>
                <div>
                    <Menu />
                    <div className="container">
                        <Switch>
                            {this.showContentMenu(routes)}
                        </Switch>
                    </div>
                </div>
            </HashRouter>
        );
    }


}
export default App;
