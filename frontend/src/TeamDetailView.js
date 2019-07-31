import React from 'react';
import {Link} from "react-router-dom";

class TeamDetailView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            team: null,
            users: null
        }
    };

    render() {
        let {team,users} = this.state;
        if(!team) {
            return (<p> Team is loading... </p>)
        }
        return(
          <div>
            <h1>
                {team.teamName}
            </h1>
            <form>
                <input value={team.projectName} placeholder="Project Name" onChange={this.onProjectNameChange.bind(this)}></input>
                <textarea value={team.projectDescription} placeholder="There is no project description yet." onChange={this.onProjectDescChange.bind(this)}></textarea>
                <input value={team.githubLink} placeholder="Github Link" onChange={this.onGithubLinkChange.bind(this)}></input>
                <button onClick={this.onButtonClick.bind(this)}> Edit Project </button>
            </form>
            <ul>
                {users.map((user) =>
                    <div key={user.userId}>
                        <img src={user.imgUrl} alt="User"/>
                        <Link to={`/user/${user.userId}`}> {user.firstName} {user.lastName} </Link>
                        <p> {user.aboutMe} </p>
                    </div>
                )};
            </ul>
          </div>
        );
    }

    componentDidMount() {
        fetch(`/team?teamId={this.props.match.params.teamId}`)
            .then((response) => response.json())
            .then((team) => {
                this.setState({team});
                fetch(`/admin-user-list?teamId={team.teamId}`)
                    .then((response) => response.json())
                    .then((users) => this.setState({users}));
            });
    }

    //
    // Information Changers
    //
    onProjectNameChange(event) {
        event.preventDefault();
        var team = Object.assign(this.state.team, {projectName: event.target.value});
        this.setState({team});
    }

    onProjectDescChange(event) {
        event.preventDefault();
        var team = Object.assign(this.state.team, {projectDescription: event.target.value});
        this.setState({team});
    }

    onGithubLinkChange(event) {
        event.preventDefault();
        var team = Object.assign(this.state.team, {githubLink: event.target.value});
        this.setState({team});
    }
}

export default TeamDetailView;