import axios from "axios";



export const GET_SMURFS = "GET_SMURFS";
export const GET_SMURFS_FAILURE = "GET_SMURFS_FAILURE";
export const ADD_SMURFS = "ADD_SMURFS";

export const getSmurfs = () => dispatch => {
    debugger

    axios
        .get("http://localhost:3333/smurfs")
        .then(res => {
            console.log(res)
            dispatch({ type: GET_SMURFS, payload: res.data })
        })
        .catch(error => {
            dispatch({ type: GET_SMURFS_FAILURE, payload: error })
            console.log(error)
        })
}

export const addSmurfs = (newSmurf) => dispatch => {
    debugger
    axios
        .post("http://localhost:3333/smurfs", newSmurf)
        .then(res => {
            debugger
            console.log(res)
            dispatch({ type: ADD_SMURFS, payload: res.data })
        })
        .catch(err => {
            console.log(err)
            debugger
        });

}