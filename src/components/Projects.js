import React, {Component} from 'react';


const projectIcon = {
    width:"auto",
    height:"auto",
    textAlign:"center",
    margin:8,

};
const projectIconParameters = {
    width:200,
    height:200,
};
const projectIconNameParameter = {
    fontFamily:"Verdana, sans-serif",
    color:'whitesmoke',
    fontSize:12,
    margin:0,
    marginTop:5,
    textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black",
}

class Projects extends Component {
    render() {
        return (
            <div className="column" style={projectIcon}>
                <img src={this.props.imgName} style={projectIconParameters} alt={this.props.alt}/>
                <h1 style={projectIconNameParameter}>{this.props.iconName}</h1>
            </div>
        );
    }
}

export default Projects;