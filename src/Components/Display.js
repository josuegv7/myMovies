import React, { Component } from 'react';
import { Link } from 'react-router';
import Nav from './Nav';
import { isLoggedIn } from '../Utils/AuthService';
import { CloudinaryContext, Transformation, Video } from 'cloudinary-react';
import FacebookProvider, { ShareButton } from 'react-facebook';
import { Share } from 'react-twitter-widgets'
import axios from 'axios';



class Display extends Component {

  state = { videos: [] };

  getVideos() {
    axios.get('https://res.cloudinary.com/deqhphist/video/list/mymovieapp.json')
          .then(res => {
            console.log(res.data.resources);
            this.setState({ videos: res.data.resources});
          })
  }

  componentDidMount(){
    this.getVideos();
  }

  render() {

    const { videos } = this.state;

    return (
      <div>
        <Nav />
        <h3 className="text-center"> Latest Videos</h3>
        <hr/>

        <div className="col-sm-12">
          <CloudinaryContext cloudName="deqhphist">
            { videos.map((data, index) => (
              <div className="col-sm-4" key={index}>
                <div className="embed-responsive embed-responsive-4by3">
                  <Video publicId={data.public_id} width="300" height="300" controls></Video>
                </div>
                <div> Created at {data.created_at} </div>
                <FacebookProvider appId="123456789">
                  <ShareButton href="http://www.facebook.com" />
                </FacebookProvider>

                <Share url={`http://res.cloudinary.com/deqhphist/video/upload/${data.public_id}.mp4`} />
              </div>
            ))
          }
        </CloudinaryContext>
        </div>
      </div>
    );
  }
}

export default Display;
