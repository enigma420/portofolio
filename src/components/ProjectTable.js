import React, {Component} from 'react';
import Projects from "./Projects";
import dtgcrew from "../img/dtg_crew.png"
import opcserver from "../img/opc_server.jpeg"
import jiraproject from "../img/jira_project.jpeg"
import sport_api from "../img/sport_api.png"
import java_design_pattern from "../img/java_design_pattern.png"

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

        };
}
    render() {
        return (
            <div style={ProjectsStackTable}>
                <p style={ParagrafProjectsStack}>
                    <h2 >PROJEKTY</h2>
                    <hr/>
                    <td style={ProjectsStackStyles} className="ProjectElement">
                        <Projects  imgName={dtgcrew} iconName={"Dtg Crew"} alt={"DtgCrew_Icon"}/>
                    </td>
                    <td style={ProjectsStackStyles} className="ProjectElement">
                        <Projects imgName={opcserver} iconName={"Opc Server"} alt={"OPC_Server"}/>
                    </td>
                    <td style={ProjectsStackStyles} className="ProjectElement">
                        <Projects imgName={jiraproject} iconName={"Simple Jira"} alt={"Jira"}/>
                    </td>
                    <td style={ProjectsStackStyles} className="ProjectElement">
                        <Projects  imgName={sport_api} iconName={"Simple Sport Website"} alt={"Jira"}/>
                    </td>
                    <td style={ProjectsStackStyles} className="ProjectElement">
                        <Projects imgName={java_design_pattern} iconName={"Java Design Patterns"} alt={"Design Patterns"}/>
                    </td>
                </p>
            </div>
        );
    }
}


export default ProjectTable;