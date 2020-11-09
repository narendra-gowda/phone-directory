import React, {Component} from 'react';
import AddSubscriber from './AddSubscriber';
import ShowSubscribers from './ShowSubscribers';
import {BrowserRouter as Router, Route} from 'react-router-dom';


class PhoneDirectory extends Component{
  constructor(){
    super();
    this.state = {
      subscriberList : [
        { id: 1,
              name: 'Naren',
             phone: 9980636388
            }
      ]
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
    console.log("Phone Directory");
  }
  render(){
    return(
      <div className="main-container">
        <Router>
          <Route exact path='/' render={(props) => <ShowSubscribers {...props} subscriberList={this.state.subscriberList} />} />
          <Route exact path='/add' render={({history}, props) => <AddSubscriber history={history} {...props} addSubscriberHandler={this.addSubscriberHandler} />} />
        </Router>
      {/*<AddSubscriber addSubscriberHandler = {this.addSubscriberHandler}/>
      <ShowSubscribers subscriberList = {this.state.subscriberList}/>*/}
      </div>
    )
  }
}

export default PhoneDirectory;