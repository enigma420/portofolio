import React, {Component} from 'react';
import TechStackIconTable from "./TechStackIconTable";
import ProjectTable from "./ProjectTable";


class TechnologicalStack extends Component {
    render() {
        return (
            <div>
               <TechStackIconTable/>
               <hr/>
               <ProjectTable/>
            </div>
        );
    }
}

export default TechnologicalStack;