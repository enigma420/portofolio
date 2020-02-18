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


class Certification extends Component {
    render() {
        return (
            <div style={ProjectsStackTable} >
                <p style={ParagrafProjectsStack}>
                    <h2>CERTYFIKATY</h2>
                    <hr/>
                    <ul>
                        <li><strong>Cisco CCNA Routing and Switching: Indtroduction to Networks</strong></li>
                    </ul>
                </p>
            </div>
        );
    }
}

export default Certification;