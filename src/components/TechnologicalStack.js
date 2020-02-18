import React, {Component} from 'react';
import TechStackIconTable from "./TechStackIconTable";
import ProjectTable from "./ProjectTable";
import InterestsAndPassions from "./InterestsAndPassions";
import Education from "./Education";
import EducationTechStack from "./EducationTechStack";


class TechnologicalStack extends Component {
    render() {
        return (
            <div>
               <TechStackIconTable/>
               <hr/>
               <ProjectTable/>
               <hr/>
               <InterestsAndPassions/>
               <hr/>
               <Education/>
               <hr/>
               <EducationTechStack/>
            </div>
        );
    }
}

export default TechnologicalStack;