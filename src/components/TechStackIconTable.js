import React, {Component} from 'react';

import Java_photo from '../img/java.png'
import Html_photo from '../img/html-5.png'
import Css_photo from '../img/css.png'
import Json_photo from '../img/json.png'
import Spring_photo from '../img/spring-icon.png'
import Linux_photo from '../img/linux.png'
import Sql_photo from '../img/sql.png'
import React_photo from '../img/react.jpg'
import Gitflow_photo from '../img/gitflow.png'
import Jira_photo from '../img/jira.png'
import RestApi_photo from '../img/rest_api.png'
import MongoDB_photo from '../img/mongodb.png'
import Icon from "./Icon";

const TechStack = {

        margin: "auto",
        display: "inline-block",
        alignItems:'center'
};
const TechStackTable = {

    alignItems:'center'
};
const ParagrafTechStack = {
    textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black",
    margin:2,
    textAlign:'center',
    fontFamily:"'Vergana' , sans-serif",
    color:'whitesmoke'
};
const ShowUpButton = {
    width:'auto',
    height:'auto',
    textAlign:'center',
    margin:1,
    fontSize:9,
    fontWeight:"bolder",
}
class TechStackIconTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggle: false,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state =>({
            isToggleOn: !state.isToggleOn
        }));
    }
    ToggleOffIcon= () => {
        return (
            <div>
                <h4>Chuj ci w dupe cwelu</h4>
            </div>
        )
    }
    render() {
        return (
            <div style={TechStackTable}>
                <p style={ParagrafTechStack}>
                    <h2>STOS TECHNOLOGICZNY</h2>
                    <div>

                        <td style={TechStack}>
                            <button type="button" className="btn btn-dark" style={ShowUpButton} onClick={this.handleClick}>Show Up!</button>
                            <Icon imgName={React_photo} starRating={3} iconName={"React"} alt={"React_Icon"}/>{this.state.isToggleOn ?  this.ToggleOffIcon() : ''}
                        </td>
                        <td style={TechStack}>
                            <button type="button" className="btn btn-dark" style={ShowUpButton} onClick={this.handleClick}>Show Up!</button>
                            <Icon imgName={Html_photo} starRating={3.5} iconName={"Html"} alt={"Html_Icon"}/>{this.state.isToggleOn ?  this.ToggleOffIcon() : ''}
                        </td>
                        <td style={TechStack}>
                            <button type="button" className="btn btn-dark" style={ShowUpButton} onClick={this.handleClick}>Show Up!</button>
                            <Icon imgName={Css_photo} starRating={3.5} iconName={"Css"} alt={"Css_Icon"}/>
                        </td>

                    <td style={TechStack}>
                        <button type="button" className="btn btn-dark" style={ShowUpButton} onClick={this.handleClick}>Show Up!</button>
                        <Icon imgName={Java_photo} starRating={3} iconName={"Java"} alt={"Java_Icon"}/>
                    </td>
                    <td style={TechStack}>
                        <button type="button" className="btn btn-dark" style={ShowUpButton} onClick={this.handleClick}>Show Up!</button>
                        <Icon imgName={Spring_photo} starRating={2} iconName={"Spring"} alt={"Spring_Icon"}/>
                    </td>

                    <td style={TechStack}>
                        <button type="button" className="btn btn-dark" style={ShowUpButton} onClick={this.handleClick}>Show Up!</button>
                        <Icon imgName={Sql_photo} starRating={2} iconName={"Sql"} alt={"Sql_Icon"}/>
                    </td>
                    <td style={TechStack}>
                        <button type="button" className="btn btn-dark" style={ShowUpButton} onClick={this.handleClick}>Show Up!</button>
                        <Icon imgName={MongoDB_photo} starRating={1} iconName={"MongoDB"} alt={"MongoDB_Icon"}/>
                    </td>

                    <td style={TechStack}>
                        <button type="button" className="btn btn-dark" style={ShowUpButton} onClick={this.handleClick}>Show Up!</button>
                        <Icon imgName={Linux_photo} starRating={1} iconName={"Linux"} alt={"Linux_Icon"}/>
                    </td>
                    <td style={TechStack}>
                        <button type="button" className="btn btn-dark" style={ShowUpButton} onClick={this.handleClick}>Show Up!</button>
                        <Icon imgName={Json_photo} starRating={2} iconName={"Json"} alt={"Json_Icon"}/>
                    </td>
                    <td style={TechStack}>
                        <button type="button" className="btn btn-dark" style={ShowUpButton} onClick={this.handleClick}>Show Up!</button>
                        <Icon imgName={Gitflow_photo} starRating={3} iconName={"Gitflow"} alt={"Gitflow_Icon"}/>
                    </td>
                    <td style={TechStack}>
                        <button type="button" className="btn btn-dark" style={ShowUpButton} onClick={this.handleClick}>Show Up!</button>
                        <Icon imgName={Jira_photo} starRating={3} iconName={"Jira"} alt={"Jira_Icon"}/>
                    </td>
                    <td style={TechStack}>
                        <button type="button" className="btn btn-dark" style={ShowUpButton} onClick={this.handleClick}>Show Up!</button>
                        <Icon imgName={RestApi_photo} starRating={2} iconName={"RestApi"} alt={"RestApi_Icon"}/>
                    </td>
                    </div>
                </p>






            </div>

        );
    }
}

export default TechStackIconTable;