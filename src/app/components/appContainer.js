import React, { Component } from "react";
import { connect } from 'react-redux';
import Form from "./Form";
import Dashboard from "./dashboard";
import { getSessionData } from "../utils"

class AppContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            route: "/"
        }
    }

    static getDerivedStateFromProps (np)  {
        return {
            route: np.route
        }
    }

    getContent () {
        const { route } = this.state;
        let contentJSX = <Form />;
        let pathTo = route || getSessionData("path") || "/";
        switch (pathTo) {
            case "/":
                contentJSX = <Form />;
                break;
            case "/dashboard":
                contentJSX = <Dashboard />;
                break;
            default:
                contentJSX = <Form />;
                break;
        }
        history.pushState({page: 0}, "", pathTo );
        return contentJSX;
    }

    render() {
        return  this.getContent();
    }
}

const mapStateToProps = (state) => {
    return {
        route: state.route
    };
};

export default connect(mapStateToProps)(AppContainer);