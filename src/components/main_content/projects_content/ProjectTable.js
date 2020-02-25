import React, {Component, memo, useState} from 'react';
import Projects from "./project_components/Projects";
import dtgcrew from "../../../img/project_images/dtg_crew.png"
import opcserver from "../../../img/project_images/opc_server.jpeg"
import jiraproject from "../../../img/project_images/jira_project.jpeg"
import sport_api from "../../../img/project_images/sport_api.png"
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
const ProjectsStackStyles = {
    margin: "auto",
    display: "inline-block",
    alignItems: 'center',
};
class ProjectTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items:[
                {
                    id:0,
                    imgName:dtgcrew,
                    iconName:"DTGCrew",
                    alt:"DTGCrew_icon",
                    githubHref: "https://github.com/enigma420/DTG_Crew",
                },
                {
                    id:1,
                    imgName:opcserver,
                    iconName:"ServerOPC",
                    alt:"ServerOPC_icon",
                    githubHref: "https://github.com/enigma420/OPC_SERVER-develop",
                },
                {
                    id:2,
                    imgName:sport_api,
                    iconName:"SPORT_API",
                    alt:"SPORT_API_icon",
                    githubHref: "https://github.com/enigma420/Sport_Api",
                },
                {
                    id:3,
                    imgName:jiraproject,
                    iconName:"JIRA",
                    alt:"JIRA_icon",
                    githubHref: "https://github.com/enigma420/Simple_Project_Jira",
                }
            ]
        };
    }

    ProjectItem(imgName, iconName, alt,href) {
        return (
            <>
                <span style={ProjectsStackStyles}>
                    <div className="ProjectElement">
                        <Projects imgName={imgName} iconName={iconName} alt={alt} githubHref={href}/>
                    </div>
                </span>
            </>
        )
    }

    finalProjects() {
        return (
            <div style={ProjectsStackTable}>
                <div style={ParagrafProjectsStack}>
                    <h2><Trans i18nKey="projects.title"/></h2>
                    <hr/>
                    {this.state.items.map((item) =>
                       <span key={item.id}> {this.ProjectItem(item.imgName,item.iconName,item.alt,item.githubHref) }</span>
                    )}
                </div>
            </div>
        )
    }

    render() {
        return (
            <>
                {this.finalProjects()}
            </>
        );
    }
}


export default ProjectTable;