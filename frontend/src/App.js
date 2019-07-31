import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Feed from './Feed';
import AdminTeamListView from './AdminTeamListView';
import AdminUserListView from './AdminUserListView';
import AdminCohortListView from './AdminCohortListView';
import ImageUploadTest from "./ImageUploadTest";
import UserDetailView from './UserDetailView';

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
      // Why is there HTML in my javascript?
      //
      // This is called JSX. Its basically an extension to javascript that makes it easier to write markup in
      // javascript. This must be converted to regular javascript in order for our code to run in the browser.
      //
      // Take a look at the react jsx documentation to learn more: https://reactjs.org/docs/introducing-jsx.html
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
        <h2>Denise Chacanaca</h2>
        <ul>
            <li>Summer Feelz: empowering, happy, and exciting :D </li>
            <li>Aspirational Hobby: My aspirational hobby is to dance. I love dancing, its a huge part of my culture
                and community so I would love to get better at it! </li>
            <li>Ask me About: True crime and Literature </li>
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
            <li>Aspirational Hobby: I would spend all of my time and money learning how to ride a dragon. Yes, I know
                dragons don't exist, but GOT just ended and I don't know what to do with my emotions right now.
                (If this *must* be reality, I would learn how to fix up cars.)</li>
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
                        <li>
                            <Link to="/feed/">Feed</Link>
                        </li>
                    </ul>
                </nav>

                <Route path="/" exact component={Index} />
                <Route path="/about/" component={About} />
                <Route path="/feed/" component={Feed} />
                <Route path="/cohort" exact component={AdminCohortListView} />
                <Route path="/team/:teamId" exact component={AdminUserListView} />
                <Route path="/cohort/:cohortId" exact component={AdminTeamListView} />
                <Route path="/image-upload" component={ImageUploadTest}/>
                <Route path="/:userId" component={UserDetailView} />
            </div>
        </Router>
    );
  }
}
export default App;
