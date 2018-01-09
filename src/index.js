import React from 'react';
import ReactDOM from 'react-dom';
import Upload from './Components/Upload';
import Display from './Components/Display';
import Callback from './Components/Callback';
import { Router, Route, browserHistory } from 'react-router';
import { requireAuth } from './Utils/AuthService';

const Root = () => {
  return (
    <div className="container">
      <Router history={browserHistory}>
        <Route path="/" component={Display}/>
        <Route path="/upload" component={Upload} onEnter={requireAuth} />
        <Route path="/callback" component={Callback} />
      </Router>
    </div>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'));
