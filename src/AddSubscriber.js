import React, {Component} from 'react';
import Header from './Header';
import './AddSubscriber.css';

class AddSubscriber extends Component{
  constructor(){
    super();
    this.state = {
      id:0,
      name: '',
      phone: ''
    }
  }
  inputChangedHandler = (e) =>{
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
    console.log(state);
  }
  onSubscribeButton = (e) =>{
    e.preventDefault();
    this.props.addSubscriberHandler(this.state);
    this.setState({id:0, name: '', phone: ''});
  }
  render(){
    return(
      <div>
        <Header heading="ADD SUBSCRIBER" />     
        <div className="body-container">
          <button className="custom-btn">Back</button>
        </div>
        <form className="form-container" onSubmit={this.onSubscribeButton.bind(this)}>
          <label htmlFor="name" className="label-control">Name: </label><br/>
          <input id="name" name="name" type="text" className="input-control" onChange={this.inputChangedHandler}/><br/><br/>
          <label htmlFor="phone" className="label-control">Phone: </label><br/>
          <input id="phone" name="phone" type="text" className="input-control" onChange={this.inputChangedHandler}/><br/><br/>
          <div>
            <span className="subscriber-info-container">Subscriber to be added: </span><br/>
            <span className="subscriber-info">Name: {this.state.name}</span><br/>
            <span className="subscriber-info">Phone: {this.state.phone}</span><br/><br/><br/>
            </div>
          <button type="submit" className="custom-btn add-btn">ADD</button>
        </form>
      </div>
    )
  }
}

export default AddSubscriber;