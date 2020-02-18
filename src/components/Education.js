import React, {Component} from 'react';


const ProjectsStackTable = {
    margin: "auto",
};
const ParagrafProjectsStack = {
    textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black",
    margin: 2,
    textAlign:'center',
    fontFamily: "'Vergana' , sans-serif",
    color: 'whitesmoke',
};

class Education extends Component {
    render() {
        return (
            <div style={ProjectsStackTable} >
                <p style={ParagrafProjectsStack}>
                    <h2>EDUKACJA</h2>
                    <hr/>
                    <div className="row">
                        <div className="column col-md-5">2016 - 2020</div>
                        <div className="column col-md-6">
                            <strong>Politechnika Warszawska (Stacjonarne I Stopnia)</strong>
                            <h6>Wydział: Elektryczny</h6>
                            <h6>Kierunek: Elektrotechnika</h6>
                            <h6>Specjalność: Elektronika Przemysłowa (Automatyka)</h6>
                            <h6>Stypendium naukowe za osiągniecia w nauce 2016/2017</h6>
                            <hr/>
                        </div>

                        <div className="column col-md-5">2015 - 2016</div>
                        <div className="column col-md-6">
                            <strong>Politechnika Warszawska (Stacjonarne I Stopnia)</strong>
                            <h6>Wydział: Transport</h6>
                            <h6>Kierunek: Transport</h6>
                            <hr/>
                        </div>
                        <div className="column col-md-5">2012 - 2015</div>
                        <div className="column col-md-6">
                            <strong>I LO im. Konstantego Ildefonsa Gałczyńskiego</strong>
                        </div>
                    </div>
                </p>
            </div>
        );
    }
}

export default Education;