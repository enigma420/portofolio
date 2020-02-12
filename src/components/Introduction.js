import React, {Component} from 'react';
import portofolio from '../img/portofolio.png';

class Introduction extends Component {
    constructor() {
        super();
        this.state={

        }
    }
    render() {
        return (
            <div className="container">
                <img src={portofolio} alt="portofolio_logo" />
                <div className="quadrate_left" style={{animationName:'example_quadrate_1'}}>
                    Wykształcenie
                </div>
                <div className="quadrate_left" style={{animationName:'example_quadrate_2'}}>
                    Dane Osobowe
                </div>
                <div className="quadrate_left" style={{animationName:'example_quadrate_3'}}>
                    Kim jestem?
                </div>
                <span className="quadrate_left" style={{animationName:'example_quadrate_4'}}>
                    Czego szukam?
                </span>
            </div>
        );
    }
}

export default Introduction;