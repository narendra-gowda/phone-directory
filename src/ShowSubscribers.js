import React,{Component} from 'react';
import Header from './Header';
import {Fragment} from 'react';
import './ShowSubscribers.css';

function deleteHandler(props) {
  alert(props);
}
// let subscribers = [
//   { id: 1,
//     name: 'Naren',
//    phone: 9980636388
//   },
//   { id: 2,
//     name: 'Deepu',
//     phone: 1234567890
//   },
//   {
//     id:3,
//     name: 'Jinny',
//     phone: 8125637264
//   }
// ]

class ShowSubscribers extends Component {

  constructor(){
    super();
    this.state = {
      subscribers:[]
    }
    console.log("Constructor called");
  }

  // componentDidMount(){
  //   console.log("Mount called");
  //   let newSubscriber = {id: 1,
  //     name: "Naren",
  //     phone: 9980636388
  //   }
  //   let subscribersList = this.state.subscribers;
  //   subscribersList.push(newSubscriber);
  //   this.setState({subscribers : subscribersList});
  //   console.log("state",this.state);
  // }
  render(){
    console.log("Render called");
  return (
    <Fragment>
      <Header heading="PHONE DIRECTORY"/>
      <div className="body-container">
        <button className="add-btn custom-btn">ADD</button>
        <div className="grid-container">
          <span className="grid-headings">NAME</span>
          <span className="grid-headings">PHONE</span>
        </div>
        {
          this.props.subscriberList.map(sub =>{
            return(
              <div className="grid-container" key={sub.id}>
                <span className="grid-items">{sub.name}</span>
                <span className="grid-items">{sub.phone}</span>
                <div className="action-btn-container">
                 <button className="grid-del-btn" onClick={deleteHandler.bind(this, "Delete button clicked")}>DELETE</button>
                </div>
              </div>
            )
          })
        }
      </div>
    </Fragment>
  );  
  }
}

export default ShowSubscribers;



