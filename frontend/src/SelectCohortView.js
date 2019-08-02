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
        let {teams, cohorts} = this.state;
        if (cohorts === null) {
            return <div> Loading cohorts...</div>
        }

        if (cohorts.length === 0) {
            return <div> no cohorts to select</div>
        }
        return (
          <div>
            <select value={this.state.selectedCohort} onChange={this.onChangeCohortId.bind(this)}>
                { cohorts.map((cohort) =>
                    <option value={cohort.cohortId}> {cohort.cohortName} </option>
                )};
            </select>
            <div>
                {teams === null && (<p> There are no teams yet </p>)}
                {teams != null && teams.map((team) =>
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

    componentDidMount() {
        fetch('/cohort-list')
            .then((response) => response.json())
            .then((cohorts) => this.setState({cohorts}));
    }

    onChangeCohortId(event) {
        console.log(event.target.value);
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