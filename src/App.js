import React from 'react';
import Header from './Header';
import {Fragment} from 'react';
import './App.css';


function App() {
  let subscribers = [
    { id: 1,
      name: 'Naren',
     phone: 9980636388
    },
    { id: 2,
      name: 'Deepu',
      phone: 1234567890
    },
    {
      id:3,
      name: 'Jinny',
      phone: 8125637264
    }
  ]
  return (
    <Fragment>
      <Header/>
      <div className="body-container">
        <button className="add-btn">ADD</button>
        <div className="grid-container">
          <span className="grid-headings">NAME</span>
          <span className="grid-headings">PHONE</span>
        </div>
        {
          subscribers.map(sub =>{
            return(
              <div className="grid-container" key={sub.id}>
                <span className="grid-items">{sub.name}</span>
                <span className="grid-items">{sub.phone}</span>
              </div>
            )
          })
        }
      </div>
    </Fragment>
  );
  
}

export default App;



