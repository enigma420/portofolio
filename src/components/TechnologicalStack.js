import React, {Component} from 'react';
import TechStackIconTable from "./TechStackIconTable";
import ProjectTable from "./ProjectTable";
import InterestsAndPassions from "./InterestsAndPassions";
import Education from "./Education";
import EducationTechStack from "./EducationTechStack";
import Languages from "./Languages";


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
               <hr/>
               <Languages/>
            </div>
        );
    }
}

export default TechnologicalStack;