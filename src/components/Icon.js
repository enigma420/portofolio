import React, {Component} from 'react';
import Ratings from 'react-ratings-declarative';

const icon = {
    width:"auto",
    height:"auto",
    textAlign:"center",
    margin:5,

};
const iconParameter = {
    width:35,
    height:35,
};
const iconNameParameter = {
    fontFamily:"Verdana, sans-serif",
    color:'whitesmoke',
    fontSize:12,
    textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black",
}
class Icon extends Component {
    render() {
        return (
            <div className="column" style={icon}>

                <img src={this.props.imgName} style={iconParameter} alt={this.props.alt}/>
                <h1 style={iconNameParameter}>{this.props.iconName}</h1>
                <div >

                    <Ratings
                        rating={this.props.starRating}
                        widgetDimensions="10px"
                        widgetSpacings="0.1px"

                    >
                        <Ratings.Widget widgetRatedColor="gold" />
                        <Ratings.Widget widgetRatedColor="gold" />
                        <Ratings.Widget widgetRatedColor="gold" />
                        <Ratings.Widget widgetRatedColor="gold" />
                        <Ratings.Widget widgetRatedColor="gold" />
                    </Ratings>
                </div>

            </div>
        );
    }
}

export default Icon;