import React, { useEffect } from "react";
import { getSmurfs } from "../actions/Actions";
import { connect } from "react-redux";
import { SmurfCard } from "./SmurfCard"
import { Card, Image } from "semantic-ui-react";
import smurfpic from "../smurfPicture/smurfpic.jpg";

function SmurfList({ getSmurfs, smurfs, error }) {
    useEffect(() => {
        getSmurfs();
        console.log(getSmurfs)
    },
        [getSmurfs]
    );
    debugger
    return (
        <div>
            <h3>Smurf List</h3>

            {smurfs.map(smurf => {
                console.log(smurfs)
                return (
                    <Card>
                        <Image src={smurfpic}></Image>
                        <div key={smurf.id}>
                            <p>Name: {smurf.name}</p>
                            <p>Age: {smurf.age}</p>
                            <p>Height: {smurf.height}</p>
                        </div>
                    </Card>
                );
            })}
        </div>
    )
}

const mapStateToProps = state => {


    return {

        smurfs: state.smurfs,
        error: state.error
    };
};

export default connect(
    mapStateToProps,
    { getSmurfs }
)(SmurfList);

// const SmurfList = ({ smurfs }) => {
//     return (
//         <div>
//             {smurfs.map(smurf =>
//                 <div key={smurf.id} smurf={smurf} />
//             )}
//         </div>
//     )
// }

// export default SmurfList