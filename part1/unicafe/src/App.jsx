import { useState } from 'react'

const StatisticLine = ({stat, text}) => {
  if (text == "positive") {
    return (
      <tr>
      <td>{text}</td>
      <td>{stat} %</td>  
      </tr>
    )
  } else {
    return(
      <tr>
      <td>{text}</td>
      <td>{stat}</td>  
      </tr>
    )
    
  }
  
}

const Statistics = ({good, bad, neutral}) => {
  const all = good + bad + neutral
  const average  = (good - bad)/all 
  const positive = (good/all)*100

  if (all == 0) {
    return (
      <div>
      <h1>statistics</h1>
      <p>No feedback given</p>
      </div>
    )
  } else {
      return (
    <div>
      <h1>statistics</h1>
      <table>
        <tbody>
          <StatisticLine stat={good} text="good" />
          <StatisticLine stat={neutral} text="neutral" />
          <StatisticLine stat={bad} text="bad" />
          <StatisticLine stat={average} text="average" />
          <StatisticLine stat={positive} text="positive" />
        </tbody>
      </table>
    </div>
      )
  }
}

const Button = ({onClick, text}) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    setGood(good + 1)
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
  }

  const handleBad = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={handleGood} text="good" />
      <Button onClick={handleNeutral} text="neutral" />
      <Button onClick={handleBad} text="bad" />

      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
