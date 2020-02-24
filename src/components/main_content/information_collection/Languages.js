import React, {Component} from 'react';
import {Trans} from 'react-i18next';
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

class Languages extends Component {

    Languages() {
        return (
            <div style={ProjectsStackTable}>
                <div style={ParagrafProjectsStack}>
                    <h2><Trans i18nKey="languages.title"/></h2>
                    <hr/>
                    <div className="row">
                        <div className="column col-md-5"><Trans i18nKey="languages.english"/></div>
                        <div className="column col-md-6"><Trans i18nKey="languages.englishKnowledge"/></div>
                        <hr/>
                        <div className="column col-md-5"><Trans i18nKey="languages.sign"/></div>
                        <div className="column col-md-6"><Trans i18nKey="languages.signKnowledge"/></div>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        return (
            <>
                {this.Languages()}
            </>
        );
    }
}

export default Languages;