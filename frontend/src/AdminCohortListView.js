import * as React from "react";
import {Link} from "react-router-dom";

class AdminCohortListView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cohortName: '',
            cohorts: null,
        };
    }

    render() {
        if (this.state.cohorts == null) {
            return (<div> loading cohorts</div>);
        }
        return (
            <div>
                <div>
                    <textarea value={this.state.cohortName} onChange={this.onCohortNameChange.bind(this)}></textarea>
                    <button onClick={this.onButtonClick.bind(this)} disabled={this.state.cohortName.length === ''}> Submit </button>
                </div>
                <div>
                    {this.state.cohorts.length === 0 && (<p> There are no cohorts yet </p>)}
                    {this.state.cohorts.map((cohort) =>
                        <div key={cohort.cohortID}>
                            <div>
                                <li>
                                    <Link to={`/cohort/${cohort.cohortId}`}> {cohort.cohortName} </Link>
                                </li>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    }

    componentDidMount() {
        this.loadCohorts();
    }

    onCohortNameChange(event) {
        event.preventDefault();
        this.setState({cohortName: event.target.value});
    }

    onButtonClick(event) {
        event.preventDefault();
        fetch(`/cohort?cohortName=${this.state.cohortName}`, {method: 'POST'})
            .then((response) => this.loadCohorts());
    }

    loadCohorts() {
        fetch('/cohort-list')
            .then((response) => response.json())
            .then((cohorts) => this.setState({cohorts}));
    }
}

export default AdminCohortListView;