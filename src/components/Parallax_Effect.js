import React, {Component} from 'react';
import { Parallax, Background } from 'react-parallax';
import photo from '../img/parallax_1.jpg'
import photo1 from '../img/lightning.jpg'
import TechnologicalStack from "./TechnologicalStack";


const UpperStyles = {
    background: "dimgrey",
    width: "85%",
    height: "auto",
    position: "relative",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    borderRadius:"8%",
    border:'1px solid black',
};

class ParallaxEffect extends Component {
    render() {
        return (
            <div>

                    {/* -----renderProp: "renderLayer"-----*/}
                    <Parallax bgImage={photo} strength={800}>
                        <div style={{ height:1800}}>
                            <div style={UpperStyles}> <TechnologicalStack/></div>
                        </div>
                    </Parallax>
                    {/*<Parallax bgImage={photo3} strength={1000}>*/}
                    {/*    <div style={{ height: 1800 }}>*/}
                    {/*        <div style={UpperStyles}>HTML inside the parallax</div>*/}
                    {/*    </div>*/}
                    {/*</Parallax>*/}

            </div>
        );
    }
}

export default ParallaxEffect;