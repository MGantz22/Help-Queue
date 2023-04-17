import React from 'react';
import NewTicketForm from './NewTicketForm';
import TicketList from './TicketList';

// this must be a class based component to handle state

class TicketControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
    this.handleClick = this.handleClick.bind(this); 
  }
// this is so cool for sure
//like, it makes a lot of sense logic frfr 100 no cap
//ongod ong fr
//0234
//? just the time lol ohhhh
//<button onClick={this.handleClick}>Add ticket</button>

  handleClick(){
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewTicketForm />
      buttonText = "Return to Ticket List";
    } else {
      currentlyVisibleState = <TicketList />
      buttonText = "Add Ticket";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }

}

export default TicketControl;