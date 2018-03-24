import React, { Component } from 'react';
import { Link } from 'react-router';
import Nav from './Nav';
import { isLoggedIn } from '../Utils/AuthService';
import { CloudinaryContext, Transformation, Video } from 'cloudinary-react';
import { Share } from 'react-twitter-widgets'
import axios from 'axios';
import css from '../Style/Display.css';
import { Row, Col } from 'react-flexbox-grid';

export default class Display extends Component {

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
        <h3 className={css.textcenter}> Latest Videos</h3>
        <hr/>
          <div className={css.sidebar}>
            <div className={css.headerside}>
                <div className={css.clearFloat}></div>
                <div className={css.searchbox}>
                    <form>
                        <input type="text"/>
                        <input type="submit" value=""/>
                    </form>
                </div>
                <div className={css.clearFloat}></div>
            </div>
        <div className={css.widget}>
            <ul>
                <li><a href="#">All categories</a></li>
                <li><a href="#">Vidoes</a></li>
                <li className={css.active}><a href="#">Music</a></li>
            </ul>
        </div>
        <div className={css.clearFloat}></div>
        </div>        
        
       
        <div className={css.videocontent}>
        <Row>
          <div className={css.part}>
            <Col>
            <CloudinaryContext cloudName="deqhphist">
            { videos.map((data, index) => (
              <div key={index}>
                <Video publicId={data.public_id} width="400" height="400" controls></Video>
                <Share url={`http://res.cloudinary.com/deqhphist/video/upload/${data.public_id}.mp4`} />
              </div>
            ))}
            </CloudinaryContext>
            </Col>
          </div>
          </Row>
        </div>
        </div>
    );
  }
}