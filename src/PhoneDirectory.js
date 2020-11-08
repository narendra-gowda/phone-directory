import React, {Component} from 'react';
import AddSubscriber from './AddSubscriber';
import ShowSubscribers from './ShowSubscribers';


class PhoneDirectory extends Component{
  constructor(){
    super();
    this.state = {
      subscriberList : [
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
      // <AddSubscriber addSubscriberHandler = {this.addSubscriberHandler}/>
      <ShowSubscribers subscriberList = {this.state.subscriberList}/>
    )
  }
}

export default PhoneDirectory;