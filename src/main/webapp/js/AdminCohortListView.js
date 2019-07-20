class AdminCohortListView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cohortName: '',
            cohorts: []
        };
    }

    render() {
        return (
            <div>
                <h2> Cohorts </h2>
                <textarea value={this.state.cohortName} onChange={this.userChange.bind(this)}></textarea>
                <button> Submit </button>
                <div>
                    {this.state.cohorts.length == 0 && (<p> Sorry, we could not find a cohort with that name. </p>)}
                    {this.state.cohorts.map((cohort) => <p> cohort.cohortName </p>) }
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
        const url = `/cohort-list`;
        return
            fetch(url)
            .then((response) => response.json())
            .then((cohorts) => this.setState({cohorts});
    }

    createNewCohort() {
        const url = `/cohort?cohortName=${this.props.match.params.cohortName}`;
        fetch(url)
                .then((response) => response.json())
                .then((cohorts) => this.setState({cohorts: cohorts});
    }
}

export AdminCohortListView;