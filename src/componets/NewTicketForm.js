import React from "react";
import PropTypes from "prop-types";
import ReusableForm from './ReusableForm';

function NewTicketForm(props) {
  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleNewTicketFormSubmission}
        buttonText="Help!" />
    </React.Fragment>
  );

  function handleNewTicketFormSubmission(event) {
    event.preventDefault();
    props.onNewTicketCreation({
      names: event.target.names.value, 
      location: event.target.location.value, 
      issue: event.target.issue.value, 
    });
  }
}

NewTicketForm.propTypes = {
  onNewTicketCreation: PropTypes.func
};

export default NewTicketForm;