import React, {useState, useRef} from 'react'
import {useTransition, useSpring, useChain, config} from 'react-spring'
import {Container, Item} from './technology_stack_components/styles'
import data from './technology_stack_components/Data'
import Icon from "./technology_stack_components/Icon";
import {Trans} from "react-i18next";

const TechStackTable = {

    alignItems:'center'
};
const ParagrafTechStack = {
    textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black",
    margin:2,
    textAlign:'center',
    fontFamily:"'Vergana' , sans-serif",
    color:'whitesmoke'
};

const hr = {
    margin:25,
};


export default function App() {

    const [open, set] = useState(false);

    const springRef = useRef();
    const {size, opacity, ...rest} = useSpring({
        ref: springRef,
        config: config.stiff,
        from: {border:"10px solid orange",width: '90%', background: 'gold', marginLeft:'5%',borderRadius:'15px'},
        to: {border: open ? "10px solid orange":"10px solid orange" , size: open ? '100%' : '10%', width: open ? '90%' : '90%', marginLeft: open ? '5%' : '5%' ,background: open ? '#fefbd8' : 'gold', opacity: open ? '1.0' : "0.5"}
    });

    const transRef = useRef();
    const transitions = useTransition(open ? data : [], item => item.name, {
        ref: transRef,
        unique: true,
        trail: 500 / data.length,
        from: {opacity: 0, transform: 'scale(0)', content:'hello'},
        enter: {opacity: 1, transform: 'scale(1)'},
        leave: {opacity: 0, transform: 'scale(0)'}
    });

    // This will orchestrate the two animations above, comment the last arg and it creates a sequence
    useChain(open ? [springRef, transRef] : [transRef, springRef], [0, open ? 0.1 : 0.6]);




    return (
        <>
            <div style={TechStackTable}>
                <div style={ParagrafTechStack}>
                    <hr style={hr}/>
                    <h2><Trans i18nKey="tiles"/></h2>
                    <hr/>
            <Container style={{...rest, height: size}} onClick={() => set(open => !open)}>
                {transitions.map(({item, key, props}) => (
                    <Item key={key} style={{...props,background: item.css}}>
                        <Icon
                            imgName={item.imgName}
                            starRating={item.starRating}
                            iconName={item.iconName}
                            alt={item.alt}/>
                    </Item>
                ))}
            </Container>
                </div>
            </div>
        </>
    )
}


