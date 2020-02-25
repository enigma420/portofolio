import React, {Component} from 'react';
import Introduction from "./information_collection/Introduction";
import Tiles from "./technology_stack_tiles/Tiles";
import ProjectTable from "./projects_content/ProjectTable";
import EducationList from "./information_collection/EducationList";
import Languages from "./information_collection/Languages";
import Certification from "./information_collection/Certification";
import InterestsAndHobbies from "./information_collection/InterestsAndHobbies";
import Header from "../header/Header";
import Footer from "../footer/Footer";


const UpperStyles = {
    background: "dimgrey",
    width: "90%",
    height: '85%',
    position: "relative",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    borderRadius: "8%",
    border: '1px solid black',
    overflowY: "scroll",
    overflowX:"hidden",
    margin:0

};
const UpperStylesParallax = {
    background: "#585858",
    width: "90%",
    height: '75%',
    position: "relative",
    top: "48%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    borderRadius: "8%",
    border: '1px solid black',
    float: 'left',

};

class ParallaxEffect extends Component {

    Parallax() {
        return (
            <>
                <Header/>

                    <div style={{height: '950px'}}>
                        <div style={UpperStylesParallax}>
                            <div style={UpperStyles}>
                                <Introduction/>
                                <Tiles/>
                                <hr/>
                                <ProjectTable/>
                                <hr/>
                                <EducationList/>
                                <hr/>
                                <Languages/>
                                <hr/>
                                <Certification/>
                                <hr/>
                                <InterestsAndHobbies/>
                            </div>
                        </div>
                    </div>

                <Footer/>
            </>
        )
    }

    render() {
        return (
            <>
                {this.Parallax()}
            </>
        );
    }
}

export default ParallaxEffect;