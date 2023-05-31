// import { useState } from "react";
import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {value: enteredName, IsValid: enteredNameIsValid,  hasError: nameInputIsValid, valueChangeHandler: nameInputChangeHandler, inputBlurHandler: nameInputBlurHandler, reset: resetNameInput} = useInput( value => value.trim() !== "");
  const { value: enteredEmail, IsValid: enteredEmailIsValid, hasError: enteredEmailIsInValid, valueChangeHandler: emailInputChangeHandler, inputBlurHandler: emailInputBlurHandler, reset: resetEmail} = useInput(value => value.includes("@"));

  let formIsValid = false;
  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    // setEnteredNameTouched(true);

    if (!enteredNameIsValid) {
      return;
    }

    console.log(enteredName);
    /* const enteredValue = nameInputref.current.value;
    console.log(enteredValue); */
    // setEnteredName(""); /* resetting */
    // setEnteredNameTouched(false);
    resetNameInput();
    /* nameInputref.current.value = ""; This is resetting too, but this we should not do as this would directly manipulate the DOM*/
    // setEnteredEmail("");
    // setenteredEmailTouched(false);
    resetEmail();
  };
  
  /* const nameInputref = useRef(""); */
  /* const [enteredNameIsValid, setEnteredNameIsValid] = useState(false); */ /*[We set this to true initially] this is in fact falsy(I think, but not true that for sure), but we are cheating a little. Which is not a problem now but might be later if we do anything else with this state */
  /* const [formIsValid, setFormIsValid] = useState(false); */
  /* const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false); */

  
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [enteredEmailTouched, setenteredEmailTouched] = useState(false);

  /* const [enteredEmailIsValid, setEnteredEmailIsValid] = useState(false); */

  // const enteredNameIsValid = enteredName.trim() !== ""; /* So we dont need a state for this as we commented out abowe, but we can solve this with this logic */
  //           /* And by using this we can omit all the if-s about enteredName, because we just done that check as well  */
  // const nameInputIsValid = !enteredNameIsValid && enteredNameTouched;

  // const enteredEmailIsValid = enteredEmail.includes("@");
  // const enteredEmailIsInValid = !enteredEmailIsValid && enteredEmailTouched;

  /* this is the same as with useEffect */

  /* useEffect(() => {
    if (enteredNameIsValid) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [enteredNameIsValid]); */
  // const nameInputChangeHandler = (event) => {
  //   setEnteredName(event.target.value);

  //   /* if (event.target.value.trim() !== "") { /* Not enteredName like elsewhere, but this, as enteredName could be an old value as we just modifyed a line abowe 
  //     setEnteredNameIsValid(true); 
  //   } */
  // };
  // const nameInputBlurHandler = (event) => {
  //   setEnteredNameTouched(true);

  //   /* if (enteredName.trim() === "") {
  //     setEnteredNameIsValid(false);
  //     return;
  //   } */
  // };

  // const emailInputChangeHandler = (event) => {
  //   setEnteredEmail(event.target.value);
  // };
  // const emailInputBlurHandler = event => {
  //   setenteredEmailTouched(true);
  // };

  

  /* if (enteredEmail.includes("@")) /* !contains @ ".mail" || !contains ".gmail" || ????????   { BASICALLY THIS ALL GOES TO SHIT, AS MAX IMORE WANTS TO TEACH US A REACT LOGIC, THAN T TEACH US HOW TO DO THIS LOGIC SADLY
    setEnteredEmailIsValid(true);
  } */

  
            // if (enteredName.trim() === "") {
            //   /* so if the value is empty, we seize the app exec */
            //   setEnteredNameIsValid(false);
            //   /*  alert("The app will seize working now......."); */
            //   return;
            // }

    

  const nameInputClasses = nameInputIsValid
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = enteredEmailIsInValid ? "form-control invalid" : "form-control";
  
  /* SO FOR SOME REASON IF THERE IS AN ERROR ALL THINGS RESETS, WHICH IS ONE OF THE WORST PRACTICES I THINK. SO I OUGHT TO CORRECT THAT LATER IF MAX DOESNT DOES THAT. and even if it has an error still logs for some reason */
    //what is happening here that max really shits on everything, only the react logic is what matters, which is a new level of negligence from him. I will go on for now, will fuck with this later, while job searching on my site prob
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
      <div className={emailInputClasses}>
        <label htmlFor="email">Your E-mail</label>
        <input
          /* ref={nameInputref} */
          type="email" /* there is a default browers validation check, so we dont have to do all the work, whick max forgot to mention ofc, only later added */
          id="email"
          onChange={emailInputChangeHandler}
          value={enteredEmail}
          onBlur={emailInputBlurHandler}
        />
        {enteredEmailIsInValid && (
          <p className="error-text">Ivalid Email address, please check it!</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;


/* the states I had no problem in the email validation logic I wanted to alidate what the browser already validating, so I checked that logic at your solution - and found out that I overthought it */