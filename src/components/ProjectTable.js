import React, {Component} from 'react';
import Projects from "./Projects";
import dtgcrew from "../img/dtg_crew.png"

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
ProjectStack: {
    margin: "auto",
    display: "inline-block",
    alignItems: 'center',
    ':hover':{
        opacity:0.8,
        color: "#ffffff"
    }
}
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
                    <h2>PROJEKTY</h2>
                    <td style={ProjectsStackStyles.ProjectStack}>
                        <Projects  imgName={dtgcrew} iconName={"React"} alt={"React_Icon"}/>
                    </td>
                    <td style={ProjectsStackStyles.ProjectStack}>
                        hello
                    </td>
                </p>
            </div>
        );
    }
}


export default ProjectTable;