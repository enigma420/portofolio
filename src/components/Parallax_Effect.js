import React, {Component} from 'react';
import { Parallax, Background } from 'react-parallax';
import photo from '../img/parallax_1.jpg'
import photo1 from '../img/lightning.jpg'
import TechnologicalStack from "./TechnologicalStack";
import Introduction from "./Introduction";
import Tiles from "./Tiles";



const UpperStyles = {
    background: "dimgrey",
    width: "90%",
    height:'900px',
    position: "relative",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    borderRadius:"8%",
    border:'1px solid black',
    overflowY:"scroll",
    float: 'left',
};
const UpperStyles1 = {
    background: "#585858",
    width: "75%",
    height:'1100px',
    position: "relative",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    borderRadius:"8%",
    border:'1px solid black',

    float: 'left',
};
class ParallaxEffect extends Component {
    render() {
        return (
            <div >

                    {/* -----renderProp: "renderLayer"-----*/}
                    <Parallax bgImage={photo} strength={800} >
                        <div style={{ height:1800}} >

                            <div style={UpperStyles1}>
                                <Introduction/>



                                <div style={UpperStyles}><Tiles/> <TechnologicalStack/></div>
                            </div>

                        </div>
                    </Parallax>


            </div>
        );
    }
}

export default ParallaxEffect;