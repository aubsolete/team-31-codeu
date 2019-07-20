class AdminCohortListView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cohortName: '',
            cohorts: []
        };
    }

    render() {
        // Is it possible for no cohorts to be returned?
        return (
            <div>
                <h2> Cohorts </h2>
                <textarea value={this.state.cohortName} onChange={this.userChange.bind(this)}></textarea>
                <button> Submit </button>
                <div>
                    {this.state.cohorts.length == 0 && (<p> Sorry, we could not find a cohort with that name. </p>)}
                    {this.state.cohorts.length > 0 /* would we do some sort of for-each here? */
                        && ( <ol> {cohortName} </ol> )
                    }
                </div>
            </div>
        )
    }

    componentDidMount() {
        this.getCohorts();
    }

    userChange(event) {
        this.setState({cohortName: event.target.value});
    }

    getCohorts() {
        const url = `/cohort?cohortId=${this.props.match.params.cohortId}`;
        // Or would we want to get by name, due to the user search?
        // const url = `/cohort?cohortName=${this.props.match.params.cohortName}`;
        return
            fetch(url)
            .then((response) => response.json())
            .then((cohorts) => this.setState({cohorts});
    }

    createNewCohort() {
        const url = `/cohort?cohortId=${this.props.match.params.cohortId}`;
        fetch(url)
                .then((response) => response.json())
                .then((cohorts) => this.setState({cohorts: cohorts});
    }
}

export AdminCohortListView;