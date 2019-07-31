import React from 'react';

/**
 * A component that displays a list of all the messages in our application.
 */
class UserDetailView extends React.Component {
    constructor(props) {
        super(props);
	
	    // This is a stateful component so we need to define a default representation of our state
	    this.state = {
	    	  user: null,
	        action: '',
	        currentUser: null,
	        file: null
	    };
    }

  /* This lifecycle hook gets executed when the component mounts */

  handleFirstName(event) {
    event.preventDefault();
    let newUser = Object.assign({}, this.state.user, {firstName: event.target.value});
    this.setState({user: newUser});
  }

  handleLastName(event) {
    event.preventDefault();
    let newUser = Object.assign({}, this.state.user, {lastName: event.target.value});
    this.setState({user: newUser});
  }
  
  handleAboutMe(event) {
    event.preventDefault();
    let newUser = Object.assign({}, this.state.user, {aboutMe: event.target.value});
    this.setState({user: newUser});
  }
  
  onFileUpload(event) {
        this.setState({file: event.target.files[0]});
  }
  
  handleImg(event) {
    event.preventDefault();
    let body = new FormData();
    body.append("image", this.state.file);
    
    let options = {
            method: "POST",
            mode: 'cors',
            body
    };
    fetch(this.state.action, options)
        .then((response) => {
                // Coax the response to text.
                return response.text();
            })
            .then((imgUrl) => {
                let newUser = Object.assign({}, this.state.user, {imgUrl: event.target.value});
                this.setState({user: newUser});
                return this.handleFormSubmit(event);
            }).catch((error) => {
                alert('unable to upload image');
        });
  }

  handleFormSubmit(event) {
    event.preventDefault();
    let {firstName, lastName, imgUrl, aboutMe} = this.state.user;
    return fetch(`/about?userId=${this.props.match.params.userId}&firstName=${firstName}&lastName=${lastName}&imgUrl=${imgUrl}&aboutMe=${aboutMe}`, {
      method: "POST",
    }).then(response => {
      response.json().then(data => {
        console.log("Successful" + data);
      });
    });
  }
//<textarea value={this.state.text} onChange={this.onTextChange.bind(this)}></textarea>
  render() {
    if (this.state.user == null) {
            return (<div> loading user</div>);
        }
    if (this.state.currentUser == null) {
            return (<div> checking current user</div>);
        }
    let notOwner = this.state.currentUser.id !== this.state.user.id;
    return (
      <div>
        <form action={this.state.action}
              method="POST"
              encType="multipart/form-data"
              onSubmit={this.handleImg.bind(this)}>
        {this.state.imgUrl != null && <img alt="user profile" src={this.state.imgUrl}></img>}
        <div>
        <input type="file" name="image" onChange={this.handleImg.bind(this)} disabled = {this.state.currentUser.id !== this.state.user.id}></input>
        </div>
        </form>
        <form method="POST"
              encType="multipart/form-data"
              onSubmit={this.handleFormSubmit.bind(this)}>
        <fieldset disabled = {this.state.currentUser.id !== this.state.user.id}>
        <div>
            <input inputType="text" title="First name" value={this.state.user.firstName} onChange={this.handleFirstName.bind(this)}></input> 
            <input inputType="text" title="Last name" value={this.state.user.lastName} onChange={this.handleLastName.bind(this)}></input>
            <input inputType="text" title="Email" value={this.state.user.email} disabled = {true}></input>
        </div>
        <div>
          <textarea title="About" value={this.state.user.aboutMe} handleChange={this.handleAboutMe.bind(this)} placeholder="Tell us about you"></textarea> 
        </div>
        <div>
          <button type={"primary"} title={"Submit"} disabled = {notOwner}></button> 
        </div>
        </fieldset>
        </form>
      </div>
    );
  }
  componentDidMount() {
        // Fetch the url that we are going to submit the image to.
        fetch(`/login-status`)
            .then((response) => response.json())
            .then((currentUser) => {
                this.setState({currentUser});
            });
        fetch(`/blobstore-upload-url`) 
            .then((response) => response.text())
            .then((action) => {
                this.setState({action});
            });
        fetch(`/about`)
            .then((response) => response.json())
            .then((user) => {
                this.setState({user});
            });
  }
}
export default UserDetailView;
