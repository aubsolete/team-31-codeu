import React from 'react';
import {Link} from "react-router-dom";

class TeamDetailView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            teamId: '',
            cohortId: '',
            teamName: '',
            projectName: '',
            projectDescription: '',
            githubLink: ''
            /* would having number editors (the team members) be a good way to know who can edit? */
        }
    };

    render() {
        // How does the page know a team member is on it, or a random viewer is on it?
        return(
            <h1>
                <TextArea value={this.state.text} placeholder={"Team Name"} onChange={this.onTeamNameChange.bind(this)}></TextArea>
                <button onClick={this.onButtonClick.bind(this)} /*disabled={this.state.teamName.length === ''}*/> Edit Team Name </button>
            </h1>
            <div>
                <TextArea value={this.state.text} placeholder={"Project Name"} onChange={this.onProjectNameChange.bind(this)}></TextArea>
                <button onClick={this.onButtonClick.bind(this)} /*disabled={this.state.projectName.length === ''}*/> Edit Project Name </button>
                <div>
                    <TextArea value={this.state.text} placeholder={"There is no project description yet." onChange={this.onProjectDescChange.bind(this)}></TextArea>
                    <button onClick={this.onButtonClick.bind(this)} /*disabled={this.state.projectDescription.length === ''}*/> Edit Project Description </button>
                </div>
                // make link, not just text
                <TextArea value={this.state.text} placeholder={"Github Link"} onChange={this.onGithubLinkChange.bind(this)}></TextArea>
                <button onClick={this.onButtonClick.bind(this)} /*disabled={this.state.githubLink.length === ''}*/> Edit Github Link </button>
            </div>
            <div key={team.teamId}>
                <li>
                    // Double check this (list of team members)
                    // Might need to use UserListServlet?
                    <Link to={`/user/${user.userId}`}> {user.userName} </Link>
                </li>
            </div>
        );
    }

    componentDidMount() { }

    //
    // Information Changers
    //
    onTeamNameChange(event) {
        event.preventDefault();
        this.setState({teamName: event.target.value});
    }

    onProjectNameChange(event) {
        event.preventDefault();
        this.setState({projectName: event.target.value});
    }

    onProjectDescChange(event) {
        event.preventDefault();
        this.setState({projectDescription: event.target.value});
    }

    onGithubLinkChange(event) {
        event.preventDefault();
        this.setState({githubLink: event.target.value});
    }
}

export default TeamDetailView