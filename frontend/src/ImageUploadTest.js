import * as React from "react";

class ImageUploadTest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            action: '',
            imageUrl: null
        }

    }

    render() {
        return (
            <div>
                <form action={this.state.action} method="POST">
                    <input type="file" name="image"></input>
                    <input type="submit" value="Submit"></input>
                </form>

                {this.state.imageUrl && <img alt="user profile" src={this.state.imageUrl}></img>}
            </div>
        );
    }

    componentDidMount() {
        fetch('/blobstore-upload-url')
            .then((response) => response.text())
            .then((action) => {
                this.setState({action});
        });
    }

    onSubmit(event) {
        event.preventDefault();
        fetch('/')
    }
}

export default ImageUploadTest;