import { useState } from "react"
import "./App.css"

function App() {
  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)
  const [operator, setOperator] = useState('+')
  const [total, setTotal] = useState(0)
  const [stored, setStored] = useState(0)

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const operators = ["+", "-", "*", "÷"]

  const toggleNum1 = (num) => {
    const intNum = parseInt(num)
    if (intNum === -1) {
      setNum1(0)
    } else if (num1 === 0) {
      setNum1(intNum)
    } else {
      setNum1(num1 * 10 + intNum)
    }
  }

  const toggleNum2 = (num) => {
    const intNum = parseInt(num)
    if (intNum === -1) {
      setNum2(0)
    } else if (num2 === 0) {
      setNum2(intNum)
    } else {
      setNum2(num2 * 10 + intNum)
    }
  }

  const recall1 = () => {
    setNum1(stored)
  }

  const recall2 = () => {
    setNum2(stored)
  }

  const toggleOperator = (newOperator) => {
    setOperator(newOperator)
  }

  const calcTotal = () => {
    switch (operator) {
      case "+":
        setTotal(num1 + num2)
        break
      case "-":
        setTotal(num1 - num2)
        break
      case "*":
        setTotal(num1 * num2)
        break
      case "÷":
        setTotal(num1 / num2)
        break
    }
  }


  return (
    <div className="calculator">
      <div className="panel">
        <p>{num1}</p>
        <div className="numbers">
          {numbers.map((num) => (
            <button key={num} onClick={() => toggleNum1(num)}>
              {num}
            </button>
          ))}
          <button onClick={() => toggleNum1(-1)}>Clear</button>
          <button onClick={() => recall1()}>Recall</button>
        </div>
      </div>

      <div className="panel">
        <p>{operator}</p>
        <div className="numbers">
          {operators.map((operator) => (
            <button key={operator} onClick={() => toggleOperator(operator)}>
              {operator}
            </button>
          ))}
        </div>
      </div>

      <div className="panel">
        <p>{num2}</p>
        <div className="numbers">
          {numbers.map((num) => (
            <button key={num} onClick={() => toggleNum2(num)}>
              {num}
            </button>
          ))}
          <button onClick={() => toggleNum2(-1)}>Clear</button>
          <button onClick={() => recall2()}>Recall</button>
        </div>
      </div>
      <div className="panel answer">
        <p>{total}</p>
        <div>
          <button onClick={() => calcTotal()}>=</button>
          <button onClick={() => setStored(total)}>Store</button>
        </div>
      </div>
    </div>
  )
}

export default App
