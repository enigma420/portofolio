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

const ListParameters = {
    fontSize:15,
}

class InterestsAndPassions extends Component {
    render() {
        return (
            <div className="row" style={ParagrafProjectsStack} >
                    <div className="column">
                        <h2>ZAINTERESOWANIA</h2>
                        <hr/>
                        <ul style={ListParameters}>
                            <li>Inżynieria Oprogramowania</li>
                            <li>Automatyka(Sterowniki PLC, Procesy Technologiczne)</li>
                            <li>Elektronika</li>
                            <li>Sterowanie(Automatyzacja Procesów)</li>
                            <li>Medycyna(Układ neurologiczny/immulogiczny)</li>
                        </ul>
                    </div>
                    <div className="column">
                        <h2>HOBBY</h2>
                        <hr/>
                        <ul style={ListParameters} >
                            <li>
                                Sport:
                                <ul>
                                    <li>Siłownia</li>
                                    <li>Kolarstwo</li>
                                    <li>Pływanie</li>
                                </ul>
                            </li>
                            <li>Kinematografia</li>
                            <li>Muzyka 50'-80'</li>
                        </ul>
                    </div>
            </div>
        );
    }
}

export default InterestsAndPassions;