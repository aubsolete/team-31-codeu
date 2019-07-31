import React from 'react';
import {Link} from "react-router-dom";

class SelectCohortView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            teams: null,
            cohorts: null,
            selectedCohort: '',
            selectedCohortId: ''
        }
    };

    render() {
        return (
          <div>
            <select value={this.state.selectedCohort} onChange={this.onChangeCohortId.bind(this)}>
                { this.state.cohorts.map((cohort) =>
                    <option value={cohort.cohortId}> {cohort.cohortName} </option>
                )};
            </select>
            <div>
                {this.state.teams === null && (<p> There are no teams yet </p>)}
                {this.state.teams.map((team) =>
                    <div key={team.teamId}>
                        <div>
                            <li>
                                <Link to={`/team/${team.teamId}`}> {team.teamName} </Link>
                            </li>
                        </div>
                    </div>
                )}
            </div>
          </div>
        );
    }

    onChangeCohortId(event) {
        this.setState({selectedCohortId: event.target.value});
        this.getThisCohortsTeams(event.target.value);
    }

    getThisCohortsTeams(teamId) {
        return fetch(`/admin-team-list?cohortId=${teamId}`)
            .then((response) => response.json())
            .then((teams) => this.setState({teams}));
    }
}

export default SelectCohortView