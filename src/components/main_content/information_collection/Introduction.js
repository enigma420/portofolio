import React, {useState, useCallback} from 'react'
import {useTransition, animated} from 'react-spring'
import {Trans} from "react-i18next";
import portofolio from "../../../img/portofolio.png"

const animatedStyle = {

    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: "center",
};
const simpleTransMain = {
    cursor: "pointer",
    position: "relative",
    width: "100%",
    height: 340,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontWeight: 200,
    fontSize: 25,
    willChange: "transform, opacity"
}

const pages = [
    ({style}) =>
        <animated.div style={{...style, animatedStyle}}>
        <img
            src={portofolio}
            style={{marginBottom: '10', objectFit: 'contain', width:'100%',margin:'auto',maxHeight:350,maxWidth:'100%'}}
            className="container" alt="portofolio"/>
    </animated.div>,
    ({style}) =>
        <animated.div style={{...style, animatedStyle}}>
            <h1><Trans i18nKey="introduction.first"/></h1>
        </animated.div>,
    ({style}) =>
        <animated.div style={{...style, animatedStyle}}>
            My
        </animated.div>,
];

export default function Introduction() {


    const [index, set] = useState(0);
    const onClick = useCallback(() => set(state => (state + 1) % 3), []);
    const transitions = useTransition(index, p => p, {
        from: {opacity: 1, transform: 'translate3d(0,0,0)', transition: "opacity 2s linear"},
        enter: {opacity: 1, transform: 'translate3d(0,0,0)', transition: "opacity 2s linear"},
        leave: {opacity: 1, transform: 'translate3d(0,0,0)', transition: "opacity 2s linear"},
    });

    return (
        <div className="container" id="box">
            <div style={simpleTransMain} onClick={onClick}>
                {transitions.map(({item, props, key}) => {
                    const Page = pages[item];
                    return <Page key={key} style={props}/>
                })}
            </div>
        </div>
    )
}



