import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Button = (props) => {
    return (
        <button onClick={props.handleClick}>{props.text}</button>
    )
}

const Statistics = (props) => {
    return (
        <p>{props.name} {props.counter}</p>
    )
}

const FeedBack = (props) => {
    const [selected,setSelected] = useState(0)
    // save clicks of each button to own state
    const [good, setGood] = useState(0)
    const [netural, setNeural] = useState(0)
    const [bad, setBad] = useState(0)

    const handleGood = () => {
        setGood(good + 1)
    }

    const handlenetural = () => {
        setNeural(netural + 1)
    }

    const handleBad = () => {
        setBad(bad + 1)
    }


    return (
        <div>
            {props.anecdotes[selected]}
            <h1>give FeedBack</h1>
            <Button handleClick={handleGood} text={'good'}></Button>
            <Button handleClick={handlenetural} text={'netural'}></Button>
            <Button handleClick={handleBad} text={'bad'}></Button>
            <h1>statistics</h1>
            <Statistics name={'good'} counter={good} ></Statistics>
            <Statistics name={'netural'} counter={netural} ></Statistics>
            <Statistics name={'bad'} counter={bad} ></Statistics>
        </div>

    )
}


export default FeedBack