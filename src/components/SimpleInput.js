import { useState } from "react";

const SimpleInput = (props) => {
  /* const nameInputref = useRef(""); */
  const [enteredName, setEnteredName] = useState("");
  /* const [enteredNameIsValid, setEnteredNameIsValid] = useState(false); */ /*[We set this to true initially] this is in fact falsy(I think, but not true that for sure), but we are cheating a little. Which is not a problem now but might be later if we do anything else with this state */
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  /* const [formIsValid, setFormIsValid] = useState(false); */

  const enteredNameIsValid = enteredName.trim() !== ""; /* So we dont need a state for this as we commented out abowe, but we can solve this with this logic */
            /* And by using this we can omit all the if-s about enteredName, because we just done that check as well  */
  const nameInputIsValid = !enteredNameIsValid && enteredNameTouched;

  /* this is the same as with useEffect */
  let formIsValid = false;
  if (enteredNameIsValid) {
    formIsValid = true;
  }

  /* useEffect(() => {
    if (enteredNameIsValid) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [enteredNameIsValid]); */

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);

    /* if (event.target.value.trim() !== "") { /* Not enteredName like elsewhere, but this, as enteredName could be an old value as we just modifyed a line abowe 
      setEnteredNameIsValid(true); 
    } */
  };

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);

    /* if (enteredName.trim() === "") {
      setEnteredNameIsValid(false);
      return;
    } */
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setEnteredNameTouched(true);

    if (!enteredNameIsValid) {
      return;
    }

            // if (enteredName.trim() === "") {
            //   /* so if the value is empty, we seize the app exec */
            //   setEnteredNameIsValid(false);
            //   /*  alert("The app will seize working now......."); */
            //   return;
            // }

    console.log(enteredName);
    /* const enteredValue = nameInputref.current.value;
    console.log(enteredValue); */
    setEnteredName(""); /* resetting */
    setEnteredNameTouched(false);
    /* nameInputref.current.value = ""; This is resetting too, but this we should not do as this would directly manipulate the DOM*/
  };

  const nameInputClasses = nameInputIsValid
    ? "form-control invalid"
    : "form-control";

  const emailInputChangeHandler = (event) => {

  };


  
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          /* ref={nameInputref} */
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          value={enteredName}
          onBlur={nameInputBlurHandler}
        />
        {nameInputIsValid && (
          <p className="error-text">Name must not be empty</p>
        )}
      </div>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          /* ref={nameInputref} */
          type="text"
          id="email"
          onChange={emailInputChangeHandler}
          value={enteredEmail}
          onBlur={emailInputBlurHandler}
        />
        {nameInputIsValid && (
          <p className="error-text">Name must not be empty</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
