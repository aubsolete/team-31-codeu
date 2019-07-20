// Get the cohort name provided by user.
function getCohortInfo() {
    const url = '/cohort';  // Connect to cohortServlet.
    fetch(url)
        .then((response) => response.json())
        .then((cohorts) => this.setState({cohorts: cohorts});
}