import React, {Component, memo, useState} from 'react';
import Projects from "./project_components/Projects";
import dtgcrew from "../../../img/project_images/dtg_crew.png"
import opcserver from "../../../img/project_images/opc_server.jpeg"
import jiraproject from "../../../img/project_images/jira_project.jpeg"
import sport_api from "../../../img/project_images/sport_api.png"
import Modal from 'react-modal';
import {Collapse, CardBody, Card} from 'reactstrap';
import {useSpring, a} from 'react-spring'
import {useMeasure, usePrevious} from './project_components/helpers'
import {Frame, Title, Content, toggle} from '../technology_stack_tiles/technology_stack_components/styles'
import * as Icons from './project_components/icons'
import {Trans} from "react-i18next";

const ProjectsStackTable = {
    margin: "auto",
};
const ParagrafProjectsStack = {
    textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black",
    margin: 2,
    textAlign: 'center',
    fontFamily: "'Vergana' , sans-serif",
    color: 'whitesmoke',
};
const ProjectsStackStyles = {
    margin: "auto",
    display: "inline-block",
    alignItems: 'center',
};
const modalStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '40%'
    }
};
const h1ModalStyle = {
    textAlign: 'center',
    fontWeight: 'bolder',
    textShadow: "-1px 0 grey, 0 1px grey, 1px 0 grey, 0 -1px grey"
};
const modalDescriptionProjectStyle = {
    textAlign: 'center',
    fontWeight: 'bolder'
};
const modalButtonStyle = {
    fontSize: '20px',
    borderRadius: '5px',
    fontWeight: 'bolder',
};
const CollapseStyle = {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center'
};
const ProjectInformationButtonStyle = {
    borderRadius: '5px',
    color: 'wheat',
    fontWeight: 'bolder',
    textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black"
};

const Tree = memo(({children, name, style, defaultOpen = false}) => {
    const [isOpen, setOpen] = useState(defaultOpen);
    const previous = usePrevious(isOpen);
    const [bind, {height: viewHeight}] = useMeasure();
    const {height, opacity, transform} = useSpring({
        from: {height: 0, opacity: 0, transform: 'translate3d(20px,0,0)'},
        to: {
            height: isOpen ? viewHeight : 0,
            opacity: isOpen ? 1 : 0,
            transform: `translate3d(${isOpen ? 0 : 20}px,0,0)`
        }
    });
    const Icon = Icons[`${children ? (isOpen ? 'Minus' : 'Plus') : 'Close'}SquareO`];
    return (
        <Frame>
            <Icon style={{...toggle, opacity: children ? 1 : 0.3}} onClick={() => setOpen(!isOpen)}/>
            <Title style={style}>{name}</Title>
            <Content style={{opacity, height: isOpen && previous === isOpen ? 'auto' : height}}>
                <a.div style={{transform}} {...bind} children={children}/>
            </Content>
        </Frame>
    )
});

class ProjectTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            id: null,
            collapse: false,
            status: 'Closed',
            ProjectDescription: ["hello", "hello2", "hello3", "hello4", "hello5"]
        };
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.onEntering = this.onEntering.bind(this);
        this.onEntered = this.onEntered.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
        this.toggle = this.toggle.bind(this);
    }

    handleOpenModal(i) {
        this.setState({
            showModal: true,
            id:i
        });
    }

    handleCloseModal() {
        this.setState({showModal: false});
    }

    onEntering() {
        this.setState({status: 'Opening...'});
    }

    onEntered() {
        this.setState({status: 'Opened'});
    }

    onExiting() {
        this.setState({status: 'Closing...'});
    }

    onExited() {
        this.setState({status: 'Closed'});
    }

    toggle() {
        this.setState(state => ({collapse: !state.collapse}));
    }


    ModalButtons(CodeHref, ReadMeHref) {
        return (
            <>
                <div className="row">
                    <div className="col">
                        <a href={CodeHref}>
                            <button className="btn-success" style={{modalButtonStyle, float: 'left'}}><Trans i18nKey="modal.githubCode"/>
                            </button>
                        </a>
                    </div>
                    <div className="col">
                        <a href={ReadMeHref}>
                            <button className="btn-success" style={{modalButtonStyle, float: 'right'}}><Trans i18nKey="modal.readMe"/>
                            </button>
                        </a>
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div style={{margin: '0 auto'}}>{this.state.status}</div>
                </div>
                <div className="row">
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a style={{margin: '0 auto'}}>
                        <button className="btn-success" onClick={this.toggle}
                                style={modalButtonStyle}><Trans i18nKey="modal.techStack"/>
                        </button>
                    </a>
                </div>
            </>
        )
    }

    StackTree() {
        return (
            <>
                <Tree name="Project DTGCrew" defaultOpen>
                    <Tree name="Back-end">
                        <Tree name="None"/>
                    </Tree>
                    <Tree name="Front-end">
                        <Tree name="JavaScript" style={{color: '#37ceff'}}/>
                        <Tree name="React" style={{color: '#37ceff'}}>
                            <Tree name="Axios"/>
                            <Tree name="Reactstrap"/>
                        </Tree>
                        <Tree name="HTML5" style={{color: '#37ceff'}}>
                            <Tree name="Bootstrap"/>
                        </Tree>
                        <Tree name="CSS" style={{color: '#37ceff'}}/>
                        <Tree name="Others" style={{color: '#37ceff'}}>
                            <Tree name="Emailjs-com"/>
                            <Tree name="react-mapbox-gl"/>
                            <Tree name="react-image-gallery"/>
                            <Tree name="react-insta-stories"/>
                        </Tree>
                    </Tree>
                    <Tree name="Databases">
                        <Tree name="None"/>
                    </Tree>
                </Tree>
            </>)
    }

    CollapseItem() {
        return (
            <div className="row" style={CollapseStyle}>
                <Collapse
                    isOpen={this.state.collapse}
                    onEntering={this.onEntering}
                    onEntered={this.onEntered}
                    onExiting={this.onExiting}
                    onExited={this.onExited}
                >

                    <Card>
                        <CardBody>
                            <>
                                {this.StackTree()}
                            </>
                        </CardBody>
                    </Card>
                </Collapse>
            </div>
        )
    }

    ModalItem(ProjectDesc) {
        return (
            <Modal
                isOpen={this.state.showModal}
                style={modalStyles}
            >
                <h1 style={h1ModalStyle}><Trans i18nKey="modal.projectInfo"/></h1>
                <hr/>
                <h6 style={modalDescriptionProjectStyle}>{ProjectDesc}</h6>
                <hr/>
                {this.ModalButtons()}
                <hr/>
                {this.CollapseItem()}
                <hr/>
                <button style={{borderRadius: '5px'}} className="btn-danger"
                        onClick={this.handleCloseModal}><Trans i18nKey="projects.modal.close"/>
                </button>
            </Modal>
        )
    }

    ProjectItem(imgName, iconName, alt, id) {
        return (
            <>
                {this.ModalItem(this.state.ProjectDescription[id])}
                <span style={ProjectsStackStyles}>
                    <button style={ProjectInformationButtonStyle} className="btn-danger"
                            onClick={this.handleOpenModal} id={id}><Trans i18nKey="projects.info"/>
                    </button>
                    <div className="ProjectElement">
                        <Projects imgName={imgName} iconName={iconName} alt={alt}/>
                    </div>
                </span>
            </>

        )
    }

    finalProjects() {
        return (
            <div style={ProjectsStackTable}>
                <div style={ParagrafProjectsStack}>
                    <h2><Trans i18nKey="projects.title"/></h2>
                    <hr/>
                    {this.ProjectItem(dtgcrew, "Dtg Crew", "DtgCrew_Icon", 0)}
                    {this.ProjectItem(opcserver, "Opc Server", "OPC_Server", 1)}
                    {this.ProjectItem(jiraproject, "Simple Jira", "Jira", 2)}
                    {this.ProjectItem(sport_api, "Simple Sport Website", "Jira", 3)}
                </div>
            </div>
        )
    }

    render() {
        return (
            <>
                {this.finalProjects()}
            </>
        );
    }
}


export default ProjectTable;