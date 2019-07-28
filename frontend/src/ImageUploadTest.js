import * as React from "react";

class ImageUploadTest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            action: '',
            imageUrl: null,
            file: null,
        };

    }

    render() {
        return (
            <div>
                <form action={this.state.action}
                      method="POST"
                      encType="multipart/form-data"
                      onSubmit={this.onSubmit.bind(this)}>
                    <input type="file" name="image" onChange={this.onFileUpload.bind(this)}></input>
                    <input type="submit" value="Submit"></input>
                </form>

                {this.state.imageUrl != null && <img alt="user profile" src={this.state.imageUrl}></img>}
            </div>
        );
    }

    componentDidMount() {
        // Fetch the url that we are going to submit the image to.
        fetch('/blobstore-upload-url')
            .then((response) => response.text())
            .then((action) => {
                this.setState({action});
            });
    }

    // This method is called whenever the user uploads a file.
    onFileUpload(event) {
        this.setState({file: event.target.files[0]});
    }

    onSubmit(event) {
        event.preventDefault();

        // Create the contents of the request. Here we add the file to the request.
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
            .then((imageUrl) => {
                // Update the state with the image URL so that the image will be displayed.
                this.setState({imageUrl});
            }).catch((error) => {
                alert('unable to upload image');
        });
    }
}

export default ImageUploadTest;