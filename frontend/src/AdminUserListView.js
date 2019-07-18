import React from 'react';

/**
 * A component that displays a list of all the messages in our application.
 */
class AdminUserListView extends React.Component {
    constructor(props) {
        super(props);

        // This is a stateful component so we need to define a default representation of our state
        this.state = {
            text: '',
            members: null
        };
    }

    render() {
        if (this.state.members == null) {
            return (<div> loading members</div>);
        }
        return (
            <div>
                <div>
                    <textarea value={this.state.text} onChange={this.onTextChange.bind(this)}></textarea>
                    <button onClick={this.onButtonClick.bind(this)} disabled={this.state.text.length === ''}> submit </button>
                </div>
                <div className="member-container">
                    {this.state.members.length === 0 && (<p> There are no members yet </p>)}
                    {this.state.members.map((member) =>
                        <div key={member.id} className="member-div">
                            <div className="member-body">{member.email}</div>
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
       this.getMembers();
    }

    onTextChange(event) {
        event.preventDefault();
        this.setState({text: event.target.value});
    }

    onButtonClick(event) {
        event.preventDefault();
        fetch(`/create-user?cohortId=${this.props.match.params.cohortId}&teamId=${this.state.props.match.params.teamId}&email=${this.state.text}`, {method: 'POST'}) 
            .then((response) => this.getMembers()) 
            .catch(() => alert('Unable to upload the member. An error occured.'));
    }

    getMembers() {
         // Make a call to our API
        return fetch(`/admin-user-list?teamId=${this.props.match.params.teamId}`)
            // Coax the response to json
            .then((response) => response.json())
            // Set our state using the returned members. React will now rerender the component.
            .then((members) => this.setState({members}));
    }
}

export default AdminUserListView;