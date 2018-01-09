import React, { Component } from 'react';
import Nav from './Nav';




class Upload extends Component {
  uploadWidget = () => {
    window.cloudinary.openUploadWidget(
      { cloud_name: 'deqhphist',
        upload_preset: 'bgcz3etc',
        tags: ['mymovieapp'],
        sources: ['local', 'url', 'image_search', 'google_photos']
        },
        function(error, result) {
          console.log("This is the result of the last upload", result);
        });
    }

  render() {

    return (
      <div>
        <Nav />
        <h3 className="text-center">Upload Your 20-second Video</h3>
        <hr/>

        <div className="col-sm-12">
          <div className="jumbotron text-center">
            <button className="btn btn-lg btn-info" onClick={this.uploadWidget}> Upload Video</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Upload;
