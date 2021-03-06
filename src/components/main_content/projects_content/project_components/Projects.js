import React, {Component} from 'react';

const projectIcon = {
    width: "auto",
    height: "auto",
    textAlign: "center",
    margin: 8,

};
const projectIconParameters = {
    width: 125,
    height: 125,
    border: '1px solid black',
    cursor: 'pointer'
};
const projectIconNameParameter = {
    fontFamily: "Verdana, sans-serif",
    color: 'whitesmoke',
    fontSize: 12,
    margin: 0,
    marginTop: 5,
    textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black",
    fontWeight: 'bolder'
};

class Projects extends Component {

    ProjectItemDesign() {
        return (
            <div className="column" style={projectIcon}>
                <a href={this.props.githubHref}>
                    <img src={this.props.imgName} alt={this.props.alt} style={projectIconParameters}/>
                </a>
                <h1 style={projectIconNameParameter}>{this.props.iconName}</h1>
            </div>
        )
    }

    render() {
        return (
            <>
                {this.ProjectItemDesign()}
            </>
        );
    }
}

export default Projects;