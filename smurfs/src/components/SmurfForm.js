import React, {useState} from "react";
import useForm from "react-hook-form";
import axios from "axios";
import { connect } from "react-redux";
import { addSmurfs } from "../actions/Actions";

function SmurfForm({addSmurfs}) {
    const [ state, setState] = useState({})
    const onChange = e => {
        setState({...state, [e.target.name]: e.target.value})
    }
    const onSubmit = e => {
        debugger;
        e.preventDefault();
        console.log(state)
        addSmurfs(state)
    }
       
    
    return (
        <form onSubmit={onSubmit}>
            <input type="text" onChange={onChange} placeholder="Name" name="name"  />
            <input type="number" onChange={onChange} placeholder="Age" name="age"  />
            <input type="text" onChange={onChange} placeholder="Height" name="height" />
            <input type="submit" />
        </form>
    );
}

const mapStateToProps = state => {
    return {
    };
};

export default connect(
    mapStateToProps,
    { addSmurfs }
)(SmurfForm);