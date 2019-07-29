import React from 'react';

/**
 * A component that displays a list of all the messages in our application.
 */
class UserDetailView extends React.Component {
    constructor(props) {
        super(props);
	
	    // This is a stateful component so we need to define a default representation of our state
	    this.state = {
	    	  firstName: '',
	        lastName: '',
	        imgUrl: '',
	        description: '',
	        email: '',
	        team: '',
	        action: '',
	        owner: false,
          file: null
	    };
    }

  /* This lifecycle hook gets executed when the component mounts */

  handleInput(event) {
    event.preventDefault();
    let name = event.target.name;
    this.setState({name: event.target.value}); //I'm not sure if this works. I want to pass the name of the field from the input to setState
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
                // Update the state with the image URL so that the image will be displayed.
                this.setState({imgUrl});
            }).catch((error) => {
                alert('unable to upload image');
        });
  }

  handleFormSubmit(event) {
    event.preventDefault();
    let userData = this.state.newUser;

    fetch("http://example.com", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    }).then(response => {
      response.json().then(data => {
        console.log("Successful" + data);
      });
    });
  }
//<textarea value={this.state.text} onChange={this.onTextChange.bind(this)}></textarea>
  render() {
    //owner = {this.props.match.params.userId} == current user I DON'T KNOW HOW TO GET THE ID OF THE CURRENT USER
    return (
      <div>
        <form action={this.state.action}
              method="POST"
              encType="multipart/form-data"
              onSubmit={this.handleFormSubmit.bind(this)}>
        <div>
            <input inputType={"text"} title={"First name"} name={"firstName"} value={this.state.firstName} onChange={this.handleInput.bind(this)}></input> 
            <input inputType={"text"} title={"Last name"} name="lastName" value={this.state.lastName} onChange={this.handleInput.bind(this)}></input>  
        </div>
        <div>
        <input type="file" name="image" onChange={this.handleImg.bind(this)}></input>
        </div>
        <div>
          <TextArea title={"About"} value={this.state.description} name={"description"} handleChange={this.handleInput} placeholder={"Tell us about you"}></input> 
        </div>
        <div>
          <button action={this.handleFormSubmit.bind(this)} type={"primary"} title={"Submit"} style={buttonStyle} disabled = !(owner)></button> 
        </div>
        </form>
        {this.state.imgUrl != null && <img alt="user profile" src={this.state.imgUrl}></img>}
      </div>
    );
  }
  componentDidMount() {
        // Fetch the url that we are going to submit the image to.
        fetch('/blobstore-upload-url') //DOES THIS ACCOUNT FOR THE ENTIRE FORM OR JUST THE IMG
            .then((response) => response.text())
            .then((action) => {
                this.setState({action});
            });
  }
}
export default UserDetailView;
