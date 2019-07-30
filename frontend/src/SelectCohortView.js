import React from 'react';
import {Link} from "react-router-dom";

class SelectCohortView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            teams: null
        }
    };

    render() {
        return(
            // Dropdown of cohorts, or text search for cohort?
            // If text search, will need to add button and change
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
        );
    }

    componentDidMount() {
        this.getThisCohortsTeams();
    }

    getThisCohortsTeams() {
        // Need to make a team-list servlet?
        return fetch(`/team-list?cohortId=${this.props.match.params.cohortId}`)
            .then((response) => response.json())
            .then((teams) => this.setState({teams}));
    }
}

export default SelectCohortView