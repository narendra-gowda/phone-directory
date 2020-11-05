import React, {Component} from 'react';
import Header from './Header';
import './AddSubscriber.css';

class AddSubscriber extends Component{
  render(){
    return(
      <div>
        <Header heading="ADD SUBSCRIBER" />     
        <div className="body-container">
          <button className="custom-btn">Back</button>
        </div>
        <form className="form-container">
          <label htmlFor="name" className="label-control">Name: </label><br/>
          <input id="name" name="name" type="text" className="input-control"/><br/><br/>
          <label htmlFor="phone" className="label-control">Phone: </label><br/>
          <input id="phone" name="phone" type="text" className="input-control"/><br/><br/>
          <div>
            <span className="subscriber-info-container">Subscriber to be added: </span><br/>
            <span className="subscriber-info">Name: </span><br/>
            <span className="subscriber-info">Phone: </span><br/><br/><br/>
            </div>
          <button type="submit" className="custom-btn add-btn">ADD</button>
        </form>
      </div>
    )
  }
}

export default AddSubscriber;