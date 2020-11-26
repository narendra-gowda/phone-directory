import React, {Component} from 'react';
import Header from './Header';
import './AddSubscriber.css';
import {Link} from 'react-router-dom';

class AddSubscriber extends Component{
  constructor(){
    super();
    this.state = {
      id:0,
      name: '',
      phone: '',
      nameValidation: 'dispNone',
      phoneValidation: 'dispNone'
    }
  }
  phoneInputChangedHandler = (e) =>{
    // const state = this.state;
    // state[e.target.name] = e.target.value;
    // this.setState(state);
    this.setState({phone: e.target.value});
    // console.log(state.phone);
  }
  nameInputChangedHandler = (e) => {
    this.setState({name: e.target.value});
    // console.log(this.state.name);
  }
  // onSubscribeButton = (e) =>{  
  //   if(this.state.name !=='' && this.state.phone !== ''){
  //     e.preventDefault();
  //     this.props.addSubscriberHandler(this.state);
  //     this.setState({id:0, name: '', phone: ''});
  //     this.props.history.push("/");
  //   }    
  // }
  addHandler = () =>{
    this.state.name === '' ? this.setState({nameValidation: 'dispBlock'}) : this.setState({nameValidation: 'dispNone'})
    this.state.phone === ''? this.setState({phoneValidation: 'dispBlock'}) : this.setState({phoneValidation: 'dispNone'})
    this.props.addSubscriberHandler(this.state);
    if(this.state.name !=='' && this.state.phone !== '')    //To avoid redirecting without filling fields--
    this.props.history.push("/");
  }
  
  render(){
    return(
      <div>
        <Header heading="ADD SUBSCRIBER" />     
        <div className="body-container">
         <Link to="/"><button className="custom-btn">Back</button></Link>
        </div>
        <form className="form-container" autoComplete="off" >
          <label htmlFor="name" className="label-control">Name: </label><br/>
          <input id="name" name="name" type="text" className="input-control" onChange={this.nameInputChangedHandler}/>
          <p className={this.state.nameValidation} style={{margin: 0, color: 'red'}}>*Required</p>
          <br/><br/>
          <label htmlFor="phone" className="label-control">Phone: </label><br/>
          <input id="phone" name="phone" type="text" maxLength="10" className="input-control" onChange={this.phoneInputChangedHandler}/>
          <p className={this.state.phoneValidation} style={{margin: 0, color: 'red'}}>*Required</p>
          <br/><br/>
          <div>
            <span className="subscriber-info-container">Subscriber to be added: </span><br/>
            <span className="subscriber-info">Name: {this.state.name}</span><br/>
            <span className="subscriber-info">Phone: {this.state.phone}</span><br/><br/><br/>
            </div>
        </form>         
          <button  type="submit" className="custom-btn add-btn padding" onClick={this.addHandler}>ADD</button>
      </div>
    )
  }
}
export default AddSubscriber;