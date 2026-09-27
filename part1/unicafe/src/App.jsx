import {useState} from 'react'

const Button = (props) => {
  return (
    <button onClick={props.onClick}>{props.text}</button>
  )
}

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}

const Statistics = (props) => {
  const total = props.allClicks.length

  if (total === 0) {
    return (
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }

  const average = (props.good * 1 + props.neutral * 0 + props.bad * -1) / total
  const positiveFeedback = (props.good / total) * 100

  return (
    <div>
      <h1>statistics</h1>
      <table>
        <tbody>
          <StatisticLine text="good" value={props.good}/>
          <StatisticLine text="neutral" value={props.neutral}/>
          <StatisticLine text="bad" value={props.bad}/>
          <StatisticLine text="all" value={total}/>
          <StatisticLine text="average" value={average}/>
          <StatisticLine text="positive" value={positiveFeedback + ' %'}/>
        </tbody>
      </table>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState([])

  const handleGood = () => {
    setAll(allClicks.concat('Good'))
    setGood(good + 1)
  }
  const handleNeutral = () => {
    setAll(allClicks.concat('Neutral'))
    setNeutral(neutral + 1)
  }
  const handleBad = () => {
    setAll(allClicks.concat('Bad'))
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={handleGood} text="good"/>
      <Button onClick={handleNeutral} text="neutral"/>
      <Button onClick={handleBad} text="bad"/>
      <Statistics good={good} neutral={neutral} bad={bad} allClicks={allClicks}/>
    </div>
  )
}

export default App
