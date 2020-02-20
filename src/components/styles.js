import { animated } from 'react-spring'
import styled, { createGlobalStyle } from 'styled-components'



const Container = styled(animated.div)`
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, minmax(50px, 1fr));
  grid-gap: 15px;
  padding: 20px;
  background: wheat;
  cursor: pointer;
  box-shadow: 0px 10px 10px -5px rgba(0, 0, 0, 0.05);
  will-change: width, height;
`

const Item = styled(animated.div)`
  width: 100%;
  height: 100%;
  background: white;
  border-radius: 10px;
  will-change: transform, opacity;
  align-items:center ;
  justify-content:center;
  display:flex;
`

export {  Container, Item }
