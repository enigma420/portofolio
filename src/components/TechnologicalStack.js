import React, {Component} from 'react';
import TechStackIconTable from "./TechStackIconTable";
import ProjectTable from "./ProjectTable";
import InterestsAndPassions from "./InterestsAndPassions";


class TechnologicalStack extends Component {
    render() {
        return (
            <div>
               <TechStackIconTable/>
               <hr/>
               <ProjectTable/>
               <hr/>
               <InterestsAndPassions/>
            </div>
        );
    }
}

export default TechnologicalStack;