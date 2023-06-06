import { useState } from "react";

const BasicForm = (props) => {
  const [enteredFirstName, setEnteredFirstName] = useState("");
  const [enteredFirstNameError, setEnteredFirstNameError] = useState(false);
  /* const [firstNameTuched, setFirstNameTuched] = useState(false); The "problem" is that I dont need the "tuchState", as my logic isnt inverted as max's is.....*/

  const [enteredLastName, setEnteredLastName] = useState("");
  const [enteredLastNameError, setEnteredLastNameError] = useState(false);

  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredEmailError, setEnteredEmailError] = useState(false);

  const firstNameHandler = event => {
    setEnteredFirstName(event.target.value);
    if (event.target.value.trim() !== "") { /* =>used enteredFirstName, but this is more correct, as this is always true the enteredFirstName might be incorrect if the state update is late. kinda. kinda we would be referring to an old state */
      setEnteredFirstNameError(false);
    }
  };
  const lastNameHandler = event => {
    setEnteredLastName(event.target.value);
    if (event.target.value.trim() !== "") {
      setEnteredLastNameError(false);
    }
  };
  const emailHandler = event => {
    setEnteredEmail(event.target.value);
    if (event.target.value.trim() !== "") { 
      setEnteredEmailError(false);
    }
  };

  const clickedOutFirstHandler = () => {
    if (enteredFirstName.trim() === "") {
      setEnteredFirstNameError(true);
    }
  };
  const clickedOutSecondHandler = () => {
    if (enteredLastName.trim() === "") {
      setEnteredLastNameError(true);
    }
  };
  const clickedOutEmailHandler = () => {
    if (enteredEmail.trim() === "") {
      setEnteredEmailError(true);
    }
  };

  const submitHandler = event => {
    event.preventDefault();
    if (enteredFirstName.trim() === "") {
      setEnteredFirstNameError(true);
    } if (enteredLastName.trim() === "") {
      setEnteredLastNameError(true);
    } if (enteredEmail.trim() === "") {
      setEnteredEmailError(true);
    } else {
      console.log("Everything is okay!");
    }
    if (enteredFirstName.trim() === "" || enteredLastName.trim() === "" || enteredEmail.trim() === "") {
      return;
    }
    console.log(enteredFirstName);
    console.log(enteredLastName);
    console.log(enteredEmail);
    setEnteredFirstNameError(false);
    setEnteredLastNameError(false);
    setEnteredEmailError(false);
  };

  const errorClass1 = enteredFirstNameError ? "form-control invalid" : "form-control";
  const errorClass2 = enteredLastNameError ? "form-control invalid" : "form-control";
  const errorClass3 = enteredEmailError ? "form-control invalid" : "form-control";


  return (
    <form onSubmit={submitHandler}>
      <div className='control-group'>
        <div className={errorClass1}>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name' onChange={firstNameHandler} onBlur={clickedOutFirstHandler} />
          {enteredFirstNameError && <p className="error-text">Please enter a Valid first Name</p>}
        </div>
        <div className={errorClass2}>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name' onChange={lastNameHandler} onBlur={clickedOutSecondHandler} />
          {enteredLastNameError  && <p className="error-text">Please enter a Valid last Name</p>}
        </div>
      </div>
      <div className={errorClass3}>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name' onChange={emailHandler} onBlur={clickedOutEmailHandler} />
        {enteredEmailError && <p className="error-text">Please enter a Valid Email</p>}
      </div>
      <div className='form-actions'>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
