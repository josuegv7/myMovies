import React, { Component } from 'react';
import { Link } from 'react-router';
import Nav from './Nav';
import { isLoggedIn } from '../Utils/AuthService';
import { CloudinaryContext, Transformation, Video } from 'cloudinary-react';
import { Share } from 'react-twitter-widgets'
import axios from 'axios';
import css from '../Style/Display.css';


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
      <div className={css.wrapper}>

        <div className={css.displayheader}>
          <h1 class="header__title">My Videos</h1>
        </div>

        <div className={css.cards}>
        <CloudinaryContext cloudName="deqhphist">
          { videos.map((data, index) => (
          <div class=" card [ is-collapsed ] " key={index}>
            <div class="card__inner [ js-expander ]">
              <span>Card</span>
              <i class="fa fa-folder-o"></i>
            </div>
            <div class="card__expander">
              <i class="fa fa-close [ js-collapser ]"></i>
              <Video publicId={data.public_id} width="300" height="300" controls></Video>
            </div>
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



// <div>
//         <Nav />
//         <h3 className="text-center"> Latest Videos</h3>
//         <hr/>

//         <div className="col-sm-12">
//           <CloudinaryContext cloudName="deqhphist">
//             { videos.map((data, index) => (
//               <div className="col-sm-4" key={index}>
//                 <div className="embed-responsive embed-responsive-4by3">
//                   <Video publicId={data.public_id} width="300" height="300" controls></Video>
//                 </div>
//                 <div> Created at {data.created_at} </div>
//                 <Share url={`http://res.cloudinary.com/deqhphist/video/upload/${data.public_id}.mp4`} />
//               </div>
//             ))
//           }
//         </CloudinaryContext>
//         </div>
//       </div>


{/* <div class="wrapper">

  <div class="header">
    <h1 class="header__title">Expanding Card Grid</h1>
    <h2 class="header__subtitle">with Flexbox</h2>
  </div>

  <div class="cards">
    <div class=" card [ is-collapsed ] ">
      <div class="card__inner [ js-expander ]">
        <span>Card</span>
        <i class="fa fa-folder-o"></i>
      </div>
      <div class="card__expander">
        <i class="fa fa-close [ js-collapser ]"></i>
        Expander
      </div>
    </div>
  </div>
</div> */}