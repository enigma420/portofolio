import React, {Component} from 'react';
import 'flag-icon-css/css/flag-icon.min.css';

class Header extends Component {


    render() {
        return (

            <div className="UpperHeader">
                {/* eslint-disable jsx-a11y/anchor-has-content,jsx-a11y/anchor-is-valid */}
                {/*Social Media*/}
                {/*Mail*/}
                <div className="HeaderSocialMedias">
                    <a href="https://www.facebook.com" className="fa fa-facebook"/>
                    <a href="https://github.com/enigma420" className="fa fa-github"/>
                    <a href="https://www.linkedin.com" className="fa fa-linkedin" style={{marginRight: '15px'}}/>
                    <i className="fa fa-envelope"/>
                    <a className="mail" href="mailto:enigma3420@gmail.com">enigma3420@gmail.com</a>
                </div>
                {/*Flags => Languages*/}
                <div className="HeaderFlags">
                    <a className="flag-icon flag-icon-pl pulse"/>
                    <a className="flag-icon flag-icon-gb pulse"/>
                    <a className="flag-icon flag-icon-de pulse"/>
                </div>
                <div>
                    <h1 className="line-1 anim-typewriter" style={{color: 'whitesmoke'}}>Cześć ! Nazywam się Dominik
                        Nowak i chciałbym zostać Programistą !</h1>
                </div>
            </div>
        );
    }
}

export default Header;