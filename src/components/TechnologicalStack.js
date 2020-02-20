import React, {Component} from 'react';
import TechStackIconTable from "./TechStackIconTable";
import ProjectTable from "./ProjectTable";
import Education from "./Education";
import InterestsAndPassions from "./InterestsAndPassions";
import Languages from "./Languages";
import Certification from "./Certification";
import Rungs from "./Rungs"


class TechnologicalStack extends Component {
    render() {
        return (
            <div>
               <TechStackIconTable/>
               <hr/>
               <ProjectTable/>
<Rungs  items={'Lorem ipsum dolor sit dsadsa'.split(' ')}/>
               <hr/>
               <Education/>
               <hr/>
               <Languages/>
               <hr/>
               <Certification/>
               <hr/>
               <InterestsAndPassions/>

            </div>
        );
    }
}

export default TechnologicalStack;