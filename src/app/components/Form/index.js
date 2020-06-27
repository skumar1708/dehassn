import React from 'react'
import { connect } from 'react-redux';

import { TextField } from '../TextField/';
import { Button } from "../Button";
import { FormRow } from './styles';

class Form extends React.Component {

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

    onClick() {
        console.log(this.state["value_1"]);
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
                        return this.onClick();
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