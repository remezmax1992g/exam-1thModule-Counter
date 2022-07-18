import React, {useState} from 'react';
import './App.css';
import Counter from "./components/Counter";

function App() {
    //data
    const minNumber = 0;
    const maxNumber = 5;
    let [number, setNumber] = useState<number>(minNumber)
    //function
    const onClickInc = () => {
        if (number < maxNumber) {
            setNumber(++number)
        }
    }
    const onClickReset = () => {
        setNumber(minNumber)
    }
    //UI
    return (
        <div className="App">
            <Counter number={number}
                     maxNumber={maxNumber}
                     minNumber={minNumber}
                     onClickInc={onClickInc}
                     onClickReset={onClickReset}/>
            <UsersList/>
        </div>
    );
}

export default App;


function UsersList() {
    const results = useState<any>(["Bob", "Alex", "Ann"])
    const users = results[0]
    const setUsers = results[1]

    const n = results.length

    return (
        <p>{n}</p>
    )
}
