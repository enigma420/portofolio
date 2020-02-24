import React, {Component} from 'react';

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

class EducationTechnologyStack extends Component {

    EducationStack() {
        return (
            <div style={ProjectsStackTable}>
                <div style={ParagrafProjectsStack}>
                    <h2>AKADEMICKI STOS TECHNOLOGICZNY</h2>
                    <hr/>
                    <div className="row">
                        <div className="column col-md-4">
                            <ul>
                                <li>Matlab</li>
                                <li>PLECS</li>
                                <li>AutoCAD</li>
                            </ul>
                        </div>
                        <div className="column col-md-4">
                            <ul>
                                <li>CodeSYS</li>
                                <li>TIA Portal</li>
                                <li>EAGLE</li>
                            </ul>
                        </div>
                        <div className="column col-md-4">
                            <ul>
                                <li>C,C++,C#</li>
                                <li>LabView</li>
                                <li>MS Office</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        return (
            <>
                {this.EducationStack()}
            </>
        );
    }
}

export default EducationTechnologyStack;