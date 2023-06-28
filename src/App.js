import React from "react"
import Die from "./Die"
import { nanoid } from "nanoid"
import Confetti from 'react-confetti'

export default function App() {

  function allNewDice() {
    const randArray = []
    for (let i = 0; i < 10; i++) {
      randArray.push(generateNewDie())
    }
    return randArray
  }

  function generateNewDie() {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid()
    }
  }

  const [startTime, setStartTime] = React.useState(null)
  const [endTime, setEndTime] =  React.useState(null)
  const [count, setCount] = React.useState(0)
  const [dice, setDice] = React.useState(allNewDice())
  const [tenzies, setTenzies] = React.useState(false)
  const [holds, setHolds] = React.useState(0)


  React.useEffect(() => {
    const allHeld = dice.every(die => die.isHeld)
    const firstValue = dice[0].value
    const allSameValue = dice.every(die => die.value === firstValue)
    if (allHeld && allSameValue) {
      setTenzies(true)
      console.log("You won!")
      setEndTime(Date.now())
    }

  },[dice])

  const rollDice = () => {
    setDice(oldDice => oldDice.map(die => {
      return die.isHeld ? die : generateNewDie()
    }))
    setCount(prevCount => prevCount + 1)
  }

  function holdDice (id) {
    setDice(oldDice => oldDice.map(die => {
      return die.id === id ? 
      {...die, isHeld: !die.isHeld} :
      die
    }))
    setHolds(hold => hold + 1)
    holds === 1 && setStartTime(Date.now)
  }

 
  const diceElements = dice.map(die => (
    <Die
      key={die.id}
      value={die.value}
      isHeld={die.isHeld}
      holdDice= {() => holdDice(die.id)}
    />
  ))

  function restart () {
      setTenzies(false)
      setDice(allNewDice())
      setCount(0)
      setHolds(0)
      setStartTime(Date.now) 
      setEndTime(Date.now)

  }

  return (
    <main>
      {tenzies && <Confetti />}
      {tenzies && <h3 className= "time">{`Time: ${((endTime-startTime)/1000).toFixed(1)} seconds!`}</h3>}
      <h3 className="count">Number of Rolls: {count}</h3>
      <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. 
            Click each die to freeze it at its current value between rolls.</p>
      <div className = "dice--grid">
        {diceElements}
      </div>
      <button onClick = {tenzies ? restart : rollDice} className = "roll">
        {tenzies ? "New Game" : "Roll"}
      </button>
    </main>
  )
}
