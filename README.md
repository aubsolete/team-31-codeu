# codeu-starter-project

## Development Instructions

### Server(Java)

Start the server by running `mvn appengine:devserver`.

### Frontend(React)

In order to run the frontend you need a few dependencies:

* Node.js: an open-source, cross-platform JavaScript run-time environment that executes JavaScript code outside of 
a browser.

* npm: a package manager for the JavaScript programming language. It is the default package manager for Node.js.

Node.js comes with npm so when you install Node.js you will also have npm! [Download Node.js here.](https://nodejs.org/en/)

Once you've installed Node.js:

`cd /frontend`

`npm start`

This starts a development server that will reload whenever you save __frontend end code__
(this does not apply to the server side Java).

### Ok what exactly is going on here? Why are we running two different servers?

While React is a joy to use, setting it up is bit complicated. So much so there is actually a command line application
for quickly creating react applications. Its called [create-react-app](https://facebook.github.io/create-react-app/).
That is what we use to set up our react project.

Unlike the vanilla javascript code that we started with, React requires some additional pre-processing in order for it 
to run in the browser. When you run `npm start` you are spinning up a development server that does this pre-processing 
for you and serves the React code. 

However, we still need to talk to our appengine app. We tell the server to proxy all requests to our appengine app.
Specifically we added `"proxy": "http://localhost:8080"` to our package.json file.

If the backend server is not up and running then you'll notice that any requests we make to it will fail. 