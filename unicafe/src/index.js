import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistic = ({text, value}) => <p>{text} {value}</p>

const Statistics = ({good, neutral, bad}) => {
  const total = good + neutral + bad;
  const average = (good - bad) / total;
  const positive = 100 * good / total;
  if (!total) {
    return (
      <p>No feedback given</p>
    )
  }
  return (
    <div>
      <h2>Statistics</h2>
      <Statistic text='Good' value={good}/>
      <Statistic text='Neutral' value={neutral}/>
      <Statistic text='Bad' value={bad}/>
      <Statistic text='All' value={total}/>
      <Statistic text='Average' value={average}/>
      <Statistic text='Positive' value={positive + ' %'}/>
    </div>
  );
}

const Button = ({children, onClick}) => <button onClick={onClick}>{children}</button>

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  return (
    <div>
      <h2>Give feedback</h2>
      <div className="buttons">
        <Button onClick={() => setGood(good + 1)}>good</Button>
        <Button onClick={() => setNeutral(neutral + 1)}>neutral</Button>
        <Button onClick={() => setBad(bad + 1)}>bad</Button>
      </div>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)
