import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

/**
 * The core building block of React is a component. A component can be declared two different ways.
 *
 * The simplest of components are 'stateless components'. As the name implies they do not have any
 * state. They simply take in some inputs and render a view based on that input.
 *
 * This function below is an example of a stateless component.
 *
 * @param props Inputs to this component. Right now we aren't doing anything with it but stayed tuned.
 */
function Index(props) {
  return (
      <div>
          <h1>CodeU Starter Project</h1>
          <p>This is the CodeU starter project. Click the links above to login and visit your page.
              You can post messages on your page, and you can visit other user pages if you have
              their URL.</p>
          <p>This is your code now! Feel free to make changes, and don't be afraid to get creative!
              You could start by modifying this page to tell the world more about your team.</p>
      </div>
  );
}

function About(props) {
  return (
    <div>
        <h1>About Our Team</h1>
        <h2>Teammate A Name</h2>
        <ul>
            <li>Summer Feelz: </li>
            <li>Aspirational Hobby: </li>
            <li>Ask me About: </li>
        </ul>
        <h2>Teammate B Name: Natalie </h2>
        <ul>
            <li>Summer Feelz: relaxing, exciting, free </li>
            <li>Aspirational Hobby: Cooking</li>
            <li>Ask me About: Where to get a delicious $5 breakfast in Miami </li>
        </ul>
        <h2>Aubree Dix</h2>
        <ul>
            <li>Summer Feelz: Sad, adventurous, and relieved!</li>
            <li>Aspirational Hobby: I would spend all of my time and money learning how to ride a dragon. Yes, I know dragons don't exist, but GOT just ended and I don't know what to do with my emotions right now. (If this *must* be reality, I would learn how to fix up cars.)</li>
            <li>Ask me About: Maintaining a long-distance relationship.</li>
        </ul>

    </div>
  );
}

/**
 * This component illustrates another way to declare a component. You simply extend `React.Component`.
 * More importantly you need to declare a `render()` function. React will call this under the hood in
 * order to get the view that will be displayed.
 *
 * More complex components will have to use this approach. As things stand this current component is a bit overkill
 * because it doesn't really do much(we could've declared it the same way that we did the above components.
 */
class App extends React.Component {

  render() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about/">About Our Team</Link>
                        </li>
                    </ul>
                </nav>

                <Route path="/" exact component={Index} />
                <Route path="/about/" component={About} />
            </div>
        </Router>
    );
  }
}
export default App;
