
import React, { useState, useCallback } from 'react'

import { useTransition, animated } from 'react-spring'

const animatedStyle = {
    background: 'lightblue',
    width:'100%' ,
    height:'100%' ,
    alignItems:'center' ,
    justifyContent:"center",
    display:'flex'
}

const pages = [
    ({ style }) =>
        <animated.div style={{ ...style, animatedStyle }}>

            <h1>NACIŚNIJ !!!</h1>
        </animated.div>,
    ({ style }) => <animated.div style={{ ...style,animatedStyle }}>My</animated.div>,
    ({ style }) => <animated.div style={{ ...style,animatedStyle }}>Name</animated.div>,
]

export default function Introduction() {

   
    const [index, set] = useState(0)
    const onClick = useCallback(() => set(state => (state + 1) % 3), [])
    const transitions = useTransition(index, p => p, {
        from: { opacity: 1, transform: 'translate3d(-100%,0,0)' },
        enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
        leave: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    })
    return (

        <div className="container">
        <div className="simple-trans-main" onClick={onClick}>
            {transitions.map(({ item, props, key }) => {
                const Page = pages[item]
                return <Page key={key} style={props} />
            })}
        </div>
        </div>

    )
}

