import React, {Component} from 'react';
import TextingLoop from './TextingLoop'


const footer = {
    position: 'fixed',
    bottom: 0,
    width: '100%',
    backgroundColor: '#505050',
    textAlign: 'center',
    WebkitAlignItems: 'center',
    borderTop:'1px solid white'
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