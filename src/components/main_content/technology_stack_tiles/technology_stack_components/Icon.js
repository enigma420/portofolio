import React, {Component} from 'react';
import Ratings from 'react-ratings-declarative';

const icon = {
    width: "auto",
    height: "auto",
    textAlign: "center",
    margin: 15,

};
const iconParameter = {
    width: 80,
    height: 80,
};
const iconNameParameter = {
    fontFamily: "Verdana, sans-serif",
    color: 'whitesmoke',
    fontSize: 20,
    margin: 0,
    marginTop: 5,
    textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black",
}

class Icon extends Component {

    TechStackIcon() {
        return (
            <div className="Column" style={icon}>

                <img src={this.props.imgName} style={iconParameter} alt={this.props.alt}/>
                <h1 style={iconNameParameter}>{this.props.iconName}</h1>
                <div>
                    <Ratings
                        rating={this.props.starRating}
                        widgetDimensions="24px"
                        widgetSpacings="1px"
                    >
                        <Ratings.Widget widgetRatedColor="gold"/>
                        <Ratings.Widget widgetRatedColor="gold"/>
                        <Ratings.Widget widgetRatedColor="gold"/>
                        <Ratings.Widget widgetRatedColor="gold"/>
                        <Ratings.Widget widgetRatedColor="gold"/>
                    </Ratings>
                </div>
            </div>
        )
    }

    render() {
        return (
            <>
                {this.TechStackIcon()}
            </>
        );
    }
}

export default Icon;