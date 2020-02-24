import {animated} from 'react-spring'
import styled, {createGlobalStyle} from 'styled-components'

const Global = createGlobalStyle`
  * {
    box-sizing: border-box;
  
  }
`;
const Container = styled(animated.div)`
  
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, minmax(4px, 1fr));
  grid-gap: 15px;
  padding: 30px;
  background: wheat;
  cursor: pointer;
  box-shadow: 0px 10px 10px -5px rgba(0, 0, 0, 0.05);
  will-change: width, height;
  
`;
const Item = styled(animated.div)`

    position: relative;
  width: auto;
 height: auto;
  background: white;
  border-radius: 10px;
  will-change: transform, opacity;
  align-items:center ;
  justify-content:center;
  display:flex;
 
`;
const Frame = styled('div')`
  position: relative;
  padding: 4px 0px 0px 0px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow-x: hidden;
  vertical-align: middle;
  color: dimgrey;
  fill: black;
`;
const Title = styled('span')`
  vertical-align: middle;
`;
const Content = styled(animated.div)`
  will-change: transform, opacity, height;
  margin-left: 6px;
  padding: 0px 0px 0px 14px;
  border-left: 1px dashed rgba(255, 255, 255, 0.4);
  overflow: hidden;
`;
const toggle = {
    width: '1em',
    height: '1em',
    marginRight: 10,
    cursor: 'pointer',
    verticalAlign: 'middle',
};

export {Global, Container, Item, Frame, Content, toggle, Title}
