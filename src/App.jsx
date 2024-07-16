import {useState} from "react";

import Header from "./components/Header.jsx";
import Form from "./components/Form.jsx";
import Result from "./components/Result.jsx";

function App() {
    const [userInput, setUserInput] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10
    })

    const inputIsValid = userInput.duration >= 1;

    function handleChange(inputId, newValue) {
        setUserInput((prevUserInput) => {
            return {
                ...prevUserInput,
                [inputId]: +newValue
            }
        })
    }

  return (
      <>
        <Header />
        <Form onChangeInput={handleChange} userData={userInput} />
        {!inputIsValid && <p className="center">Please enter valid duration!</p>}
        {inputIsValid && <Result userData={userInput} />}
      </>
  )
}

export default App
