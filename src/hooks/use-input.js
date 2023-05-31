import { useState } from "react";

const useInput = (validateValue) => { /* for some reason we can expect a function as an argument */
    const [enteredValue, setEnteredValue] = useState("");
    const [isTouched, setIsTouched] = useState(false);

    const valueIsValid = validateValue(enteredValue); 
    const hasError = !valueIsValid && isTouched;

    const valueChangeHandler = (event) => {
        setEnteredValue(event.target.value);
      };

      const inputBlurHandler = (event) => {
        setIsTouched(true);
      };

    const reset = () => {
        setEnteredValue("");
        setIsTouched(false);
    };

    return {
        value: enteredValue, IsValid: valueIsValid, hasError/* = "hasError: hasError" */, valueChangeHandler, inputBlurHandler, reset
    };
};

export default useInput;