import React, {Component} from 'react';
import {Trans} from "react-i18next";

const ProjectsStackTable = {
    margin: "auto",
};
const ParagrafProjectsStack = {
    textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black",
    margin: 2,
    textAlign: 'center',
    fontFamily: "'Vergana' , sans-serif",
    color: 'whitesmoke',

};

class Certification extends Component {

    Certification() {
        return (
            <div style={ProjectsStackTable}>
                <div style={ParagrafProjectsStack}>
                    <h2><Trans i18nKey="certificate"/></h2>
                    <hr/>
                    <ul>
                        <li><strong>Cisco CCNA Routing and Switching: Indtroduction to Networks</strong></li>
                    </ul>
                </div>
            </div>
        )
    }

    render() {
        return (
            <>
                {this.Certification()}
            </>
        );
    }
}

export default Certification;