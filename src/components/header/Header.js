import React, {Component} from 'react';
import 'flag-icon-css/css/flag-icon.min.css';
import {Trans} from 'react-i18next';


const UpperHeader = {
    backgroundColor: "#505050",
    height: 47,
    borderBottom: "2px groove whitesmoke",
    position: "fixed",
    width: "100%",
    zIndex: 1
}

const mail = {
    textDecoration: "none",
    color: "whitesmoke",
    fontFamily: "'Acme', cursive",
    fontSize: 16,
    textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black"
}

const HeaderSocialMedias = {
    float: "right",
    transform: "translateY(10%)",
    paddingLeft: 10,
    marginRight: 10
}

class Header extends Component {


    Header() {
        return (
            <div style={UpperHeader}>
                {/*Social Media and Mail*/}
                <div style={HeaderSocialMedias}>
                    {/* eslint-disable jsx-a11y/anchor-has-content */}
                    <a href="https://www.facebook.com" className="fa fa-facebook"/>
                    <a href="https://github.com/enigma420" className="fa fa-github"/>
                    <a href="https://www.linkedin.com" className="fa fa-linkedin" style={{marginRight: '15px'}}/>
                    <i className="fa fa-envelope"/>
                    <a style={mail} className="mail" href="mailto:enigma3420@gmail.com">nowak.dominik420@gmail.com</a>
                </div>

                {/*Welcome Text*/}
                <div>
                    <h1 className="line-1 anim-typewriter" style={{color: 'whitesmoke',textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black"}}><Trans i18nKey="header.welcomeText"/></h1>
                </div>
            </div>
        )
    }

    render() {

        return (
            <>
                {this.Header()}
            </>
        );
    }
}

export default Header;