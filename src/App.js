import React from 'react';
import Header from './Header';
import {Fragment} from 'react';
import './App.css';


function App() {
  return (
    <Fragment>
      <Header/>
      <div className="body-container">
        <button className="add-btn">ADD</button>
        <div id="fields-section">
          <span className="fields">NAME</span>
          <span className="fields">PHONE</span>
        </div>
      </div>
    </Fragment>
  );
  
}

export default App;



