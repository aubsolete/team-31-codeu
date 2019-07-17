import React from 'react';

/**
 * A component that displays a list of all the messages in our application.
 */
class AdminTeamListView extends React.Component {
    constructor(props) {
        super(props);

        // This is a stateful component so we need to define a default representation of our state
        this.state = {
            text: '',
            teams: null
        };
    }

    render() {
        if (this.state.teams == null) {
            return (<div> loading teams</div>);
        }
        return (
            <div>
                <div>
                    <textarea value={this.state.text} onChange={this.onTextChange.bind(this)}></textarea>
                    <button onClick={this.onButtonClick.bind(this)} disabled={this.state.text.length === ''}> submit </button>
                </div>
                <div className="team-container">
                    {this.state.teams.length === 0 && (<p> There are no teams yet </p>)}
                    {this.state.teams.map((team) =>
                        <div key={team.teamId} className="team-div">
                            <div className="team-body">{team.teamName}</div>
                        </div>
                    )}
                </div>
            </div>
        );
    }

    // componentDidMount is a very special function in React. It's part of a group of functions that form part of
    // the React lifecycle. React calls each one of these functions to notify you the programmer that certain things
    // have happened or are about to occur.
    //
    // Internally React will call componentDidMount after a component's output has been rendered to the DOM.
    // Its common React practice to make any API calls in componentDidMount().
    //
    // Additional documentation about React's lifecycle can be found here:
    // https://reactjs.org/docs/react-component.html#commonly-used-lifecycle-methods
    componentDidMount() {
       this.getTeams();
    }

    onTextChange(event) {
        event.preventDefault();
        this.setState({text: event.target.value});
    }

    onButtonClick(event) {
        event.preventDefault();
        fetch(`/team?text=${this.state.text}`, {method: 'POST'})
            .then((response) => this.getTeams()) 
            .catch(() => alert('Unable to upload the team. An error occured.'));
    }

    getTeams() {
         // Make a call to our API
        return fetch('/admin-team-list')
            // Coax the response to json
            .then((response) => response.json())
            // Set our state using the returned teams. React will now rerender the component.
            .then((teams) => this.setState({teams}));
    }
}

export default AdminTeamListView;