import React, {Component} from 'react';
import {Trans} from 'react-i18next';
const ParagrafProjectsStack = {
    textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black",
    margin: 2,
    textAlign: 'center',
    fontFamily: "'Vergana' , sans-serif",
    color: 'whitesmoke',

};
const ListParameters = {
    fontSize: 15,
}

class InterestsAndHobbies extends Component {

    InterestsAndPassion() {
        return (
            <div className="row" style={ParagrafProjectsStack}>
                <div className="column">
                    <h2><Trans i18nKey="interests.title"/></h2>
                    <hr/>
                    <ul style={ListParameters}>
                        <li><Trans i18nKey="interests.first"/></li>
                        <li><Trans i18nKey="interests.second"/></li>
                        <li><Trans i18nKey="interests.third"/></li>
                        <li><Trans i18nKey="interests.fourth"/></li>
                        <li><Trans i18nKey="interests.fifth"/></li>
                    </ul>
                </div>
                <div className="column">
                    <h2>HOBBY</h2>
                    <hr/>
                    <ul style={ListParameters}>
                        <li>
                            <Trans i18nKey="hobbies.first"/>
                            <ul>
                                <li><Trans i18nKey="hobbies.second"/></li>
                                <li><Trans i18nKey="hobbies.third"/></li>
                                <li><Trans i18nKey="hobbies.fourth"/></li>
                            </ul>
                        </li>
                        <li><Trans i18nKey="hobbies.fifth"/></li>
                        <li><Trans i18nKey="hobbies.sixth"/></li>
                        <li><Trans i18nKey="hobbies.seventh"/></li>
                    </ul>
                </div>
            </div>
        )
    }

    render() {
        return (
            <>
                {this.InterestsAndPassion()}
            </>
        );
    }
}

export default InterestsAndHobbies;