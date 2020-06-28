import React, { Component } from 'react'
import { connect } from 'react-redux';

import { TextField } from '../TextField/';
import { Button } from "../Button";
import { FormRow } from './styles';
import { changeRoute } from '../../actions';
import { setSessionData, validateLogin, setUserData } from "../../utils";

class Form extends Component {

    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.state = {
            formConfig: [
                { name: "uname", type: "text", value: "", placeholder: "Enter username", onChange: this.onChange, id: 1, label: "Username" },
                { name: "pwd", type: "password", value: "", placeholder: "Enter password", onChange: this.onChange, id: 2, label: "Password" }
            ],
            value_1: "",
            value_2: ""
        }
    }

    onChange(value, id) {
        this.setState({
            [`value_${id}`]: value
        });
    }

    logMeIn() {
        const { dispatch } = this.props;
        const { value_1: username, value_2: password } = this.state;

        if(!username || !password) return alert("Please enter credentials!!")

        if(validateLogin(username, password)) {
            dispatch(changeRoute({ route: "/dashboard"}));
            setSessionData("path", "/dashboard", 60 * 60);
            setUserData("_loggedinuser", username);
            setUserData("_hash", 1);
        } else {
            return alert("Invalid login credentials");
        }
    }

    render() {
        const { formConfig } = this.state;
        return (
            <React.Fragment>
                {formConfig.map(item => {
                    return (<FormRow key={item.name}>
                        <TextField
                            name={item.name}
                            type={item.type}
                            value={this.state[`value_${item.id}`]}
                            placeholder={item.placeholder}
                            label={item.label}
                            onChange={(e) => {
                                return this.onChange(e.target.value, item.id);
                            }}
                        />

                    </FormRow>);
                })}
                <FormRow>
                    <Button label={"Login"} primary onClick={() => {
                        return this.logMeIn();
                    }} />
                </FormRow>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        route: state.route
    };
};

export default connect(mapStateToProps)(Form);