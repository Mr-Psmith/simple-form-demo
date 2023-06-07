//WELL AS I BUILT AN APP WITH LOGIC DIFFERENT FROM MAX I SIMPLY CANNOT WRAP MY HEAD AROUND MAX'S INVERT LOGIC, AND THIS WAY I CANNOT UNDERSTAND HOW THE F. SHOULD I DO THIS CUSTOM HOOK.
//HOPEFULLY WE WILL BE EXERCISING MORE WITH CUST. HOOKS, IF NOT I WILL BE BACK

// import { useState } from "react";

// const useInput = () => { /* for some reason we can expect a function as an argument */

//   const [enteredData, setEnteredData] = useState("");
//   const [enteredDataError, setEnteredDataError] = useState(false);

//   const dataHandler = event => {
//     setEnteredData(event.target.value);
//     if (event.target.value.trim() !== "") { 
//     setEnteredDataError(false);
//     }
//   };

//   const clickedOutHandler = () => {
//     if (enteredData.trim() === "") {
//       setEnteredDataError(true);
//     }
//   };

//   const reset = () => {
//     setEnteredDataError(false);
//   };

//   return {
//     enteredData, setEnteredData, enteredDataError, setEnteredDataError, dataHandler, clickedOutHandler, reset
//   };



//     const [enteredValue, setEnteredValue] = useState("");
//     const [isTouched, setIsTouched] = useState(false);

//     const valueIsValid = validateValue(enteredValue); 
//     const hasError = !valueIsValid && isTouched;

//     const valueChangeHandler = (event) => {
//         setEnteredValue(event.target.value);
//       };

//       const inputBlurHandler = (event) => {
//         setIsTouched(true);
//       };

//     const reset = () => {
//         setEnteredValue("");
//         setIsTouched(false);
//     };

//     return {
//         value: enteredValue, IsValid: valueIsValid, hasError/* = "hasError: hasError" */, valueChangeHandler, inputBlurHandler, reset
//     };
// };

//export default useInput;