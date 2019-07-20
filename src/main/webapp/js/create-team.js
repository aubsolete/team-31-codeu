import React from "react";

// Get the team name and member emails provided by user.
function getTeamInfo() {
    const url = `/team?teamId=${this.props.match.params.teamId}`;
    fetch(url)
        .then((response) => response.json())
        // This state update assumes that the component stores the teams in this.state.teams
        .then((teams) => this.setState({teams: teams});
}