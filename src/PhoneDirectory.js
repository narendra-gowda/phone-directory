import React, {Component} from 'react';
import AddSubscriber from './AddSubscriber';
import ShowSubscribers from './ShowSubscribers';
import {BrowserRouter as Router, Route} from 'react-router-dom';


class PhoneDirectory extends Component{
  constructor(){
    super();
    this.state = {
      subscriberList : []
    }
  }

  addSubscriberHandler = (newSubsciber) => {
    let subscriberList = this.state.subscriberList;
    if(subscriberList.length > 0){
      newSubsciber.id = subscriberList[subscriberList.length-1].id + 1;
    }else{
      newSubsciber.id = 1;
    }
    subscriberList.push(newSubsciber);
    this.setState({subscriberList : subscriberList});
    console.log(this.state.subscriberList);
    // console.log("Phone Directory");
  }

  deleteSubscriberHandler = (subscriberID) => {
    let subscriberList = this.state.subscriberList;
    let subscriberIndex = 0;
    subscriberList.forEach(function(subscriber, index){
      if(subscriber.id === subscriberID){
        subscriberIndex = index;
      }
    })
    let newSubsciber = subscriberList;
    newSubsciber.splice(subscriberIndex, 1);
    this.setState({subscriberList : newSubsciber});
  }

  render(){
    return(
      <div className="main-container">
        <Router>
          <Route exact path='/' render={(props) => <ShowSubscribers {...props} subscriberList={this.state.subscriberList} deleteSubscriberHandler={this.deleteSubscriberHandler} />} />
          <Route exact path='/add' render={({history}, props) => <AddSubscriber history={history} {...props} addSubscriberHandler={this.addSubscriberHandler} />} />
        </Router>
      {/*<AddSubscriber addSubscriberHandler = {this.addSubscriberHandler}/>
      <ShowSubscribers subscriberList = {this.state.subscriberList}/>*/}
      </div>
    )
  }
}

export default PhoneDirectory;