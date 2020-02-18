import React, {Component} from 'react';

const ProjectsStackTable = {
    margin: "auto",
};
const ParagrafProjectsStack = {
    textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black",
    margin: 2,
    textAlign:'center',
    fontFamily: "'Vergana' , sans-serif",
    color: 'whitesmoke',

};

class Languages extends Component {
    render() {
        return (
            <div style={ProjectsStackTable} >
                <p style={ParagrafProjectsStack}>
                    <h2>JĘZYKI OBCE</h2>
                    <hr/>
                    <div className="row">
                        <div className="column col-md-5">Angielski</div>
                        <div className="column col-md-6">Komunikatywny (B2 ACERT)</div>
                        <hr/>
                        <div className="column col-md-5">Migowy</div>
                        <div className="column col-md-6">Komunikatywny</div>
                    </div>
                </p>
            </div>
        );
    }
}

export default Languages;