import React from 'react';

/**
 * A component that displays a list of all the messages in our application.
 */
class Feed extends React.Component {
    constructor(props) {
        super(props);

        // This is a stateful component so we need to define a default representation of our state
        this.state = {
            messages: null
        };
    }

    render() {
        if (this.state.messages == null) {
            return (<div> loading messages</div>);
        }

        if (this.state.messages.length === 0) {
            return (<p> There are no posts yet </p>);
        }

        return (
            <div>
                <div className="message-container">
                    {this.state.messages.map((message) =>
                        <div key={message.id} className="message-div">
                            <div className="message-header">
                                {message.user} - {new Date(message.timestamp).toDateString()}
                            </div>
                            <div className="message-body">{message.text}</div>
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
        // Make a call to our API
        fetch('/feed')
            // Coax the response to json
            .then((response) => response.json())
            // Set our state using the returned messages. React will now rerender the component.
            .then((messages) => this.setState({messages}));
    }
}

export default Feed;