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

class EducationList extends Component {

    Education() {
        return (
            <div style={ProjectsStackTable}>
                <div style={ParagrafProjectsStack}>
                    <h2><Trans i18nKey="education.title"/></h2>
                    <hr/>
                    <div className="row">
                        <div className="column col-md-5">2016 - 2020</div>
                        <div className="column col-md-6">
                            <strong><Trans i18nKey="education.electroStudy"/></strong>
                            <h6><Trans i18nKey="education.electroDepartment"/></h6>
                            <h6><Trans i18nKey="education.electroSpecialization"/></h6>
                            <h6><Trans i18nKey="education.electroSpeciality"/></h6>
                            <h6><Trans i18nKey="education.electroScholarship"/></h6>
                            <hr/>
                        </div>

                        <div className="column col-md-5">2015 - 2016</div>
                        <div className="column col-md-6">
                            <strong><Trans i18nKey="education.transportStudy"/></strong>
                            <h6><Trans i18nKey="education.transportDepartment"/></h6>
                            <h6><Trans i18nKey="education.transportSpecialization"/></h6>
                            <hr/>
                        </div>
                        <div className="column col-md-5">2012 - 2015</div>
                        <div className="column col-md-6">
                            <strong>I LO im. Konstantego Ildefonsa Gałczyńskiego</strong>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        return (
            <>
                {this.Education()}
            </>
        );
    }
}

export default EducationList;