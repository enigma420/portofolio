import React, {Component} from 'react';
import TextingLoop from './TextingLoop'

const footer = {
    position:'fixed',
    bottom:0,
    width:'100%',
    backgroundColor:'deepskyblue',
    textAlign:'center',
    WebkitAlignItems:'center'
}



class Footer extends Component {

    render() {
        return (
            <div style={footer}>
<TextingLoop/>
            </div>
        );
    }
}

export default Footer;