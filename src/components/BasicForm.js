import { useState } from "react";

const BasicForm = (props) => {
  const [enteredFirstName, setEnteredFirstName] = useState("");
  const [enteredLastName, setEnteredLastName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  
  const firstNameHandler = event => {
    setEnteredFirstName(event.target.value);
  };
  const lastNameHandler = event => {
    setEnteredLastName(event.target.value);
  };
  const emailHandler = event => {
    setEnteredEmail(event.target.value);
  };

  const submitHandler = event => {
    console.log(enteredFirstName);
    console.log(enteredLastName);
    console.log(enteredEmail);
  };

  //Dont know how this is below, bbecause max only showed the difficult shit
 /*  const errorClassFirstName = () => {
    if (enteredFirstName.trim().length() < 1) {
      "form-control invalid"
    } else {
      "form-control"
    }
  }; */

  return (
    <form onSubmit={submitHandler}>
      <div className='control-group'>
        <div className='form-control'>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name' onChange={firstNameHandler} />
        </div>
        <div className='form-control'>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name' onChange={lastNameHandler}  />
        </div>
      </div>
      <div className='form-control'>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name' onChange={emailHandler} />
      </div>
      <div className='form-actions'>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
