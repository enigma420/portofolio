import React, { useState, useRef } from 'react'
import { render } from 'react-dom'
import { useTransition, useSpring, useChain, config } from 'react-spring'
import {  Container, Item } from './styles'
import data from './Data'
import TechStackIconTable from "./TechStackIconTable";

export default function App() {
    const [open, set] = useState(false)

    const springRef = useRef()
    const { size, opacity, ...rest } = useSpring({
        ref: springRef,
        config: config.stiff,
        from: { width: '100%', background: 'deepskyblue' },
        to: { size: open ? '100%' : '10%', width: open ? '100%' : '100%' , background: open ? 'white' : 'deepskyblue' }
    })

    const transRef = useRef()
    const transitions = useTransition(open ? data : [], item => item.name, {
        ref: transRef,
        unique: true,
        trail: 500 / data.length,
        from: { opacity: 0, transform: 'scale(0)' },
        enter: { opacity: 1, transform: 'scale(1)' },
        leave: { opacity: 0, transform: 'scale(0)' }
    })

    // This will orchestrate the two animations above, comment the last arg and it creates a sequence
    useChain(open ? [springRef, transRef] : [transRef, springRef], [0, open ? 0.1 : 0.6])

    return (
        <>
            <Container style={{ ...rest,  height: size }} onClick={() => set(open => !open)}>
                Technology Stack
                {transitions.map(({ item, key, props }) => (
                    <Item key={key} style={{ ...props, background: item.css }} ></Item>
                ))}
            </Container>
        </>
    )
}

render(<App />, document.getElementById('root'))
