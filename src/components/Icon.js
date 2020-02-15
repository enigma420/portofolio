import React, {Component} from 'react';
import Ratings from 'react-ratings-declarative';

const icon = {
    width:"auto",
    height:"auto",
    textAlign:"center",
    margin:50,

    borderRadius:"25%"
};
const iconParameter = {
    width:150,
    height:150,

};
const iconNameParameter = {
    fontFamily:"Verdana, sans-serif",
    color:'whitesmoke',
    fontSize:24,

}




class Icon extends Component {


    render() {
        return (
            <div className="column" style={icon}>
                <p style={iconNameParameter}>{this.props.iconName}</p>
                <img src={this.props.imgName} style={iconParameter} alt={this.props.alt}/>
                <div>
                    <Ratings
                        rating={this.props.starRating}
                        widgetDimensions="24px"
                        widgetSpacings="3px"
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