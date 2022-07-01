import React, {useState, useEffect} from 'react';

const HelloWorld8 = (props) => {
    //const [state, setState] = useState(initialState);
    const [date, setDate] = useState(new Date());
    //function below responsible for setting new date value in state which will provoke a re-render of component.
    const tick = () => {
        setDate(new Date());
    }
    useEffect(() => {
        const timerID = setInterval(tick, 1000); //pass tick as callback function. Called every 1000ms to set a new Date() in state.
        /*now we need to let this useEffect know that there is work to do when component is to unmount. We indicate
        this work to do in a return statement that takes a function callback.*/
        return(
            () => {
                clearInterval(timerID); //cleanup the timer
            }
        )
    }, []);
    return (
        <div>
            <h1> SIMS PAU </h1>
            <h3>Hello {props.name}.</h3>
            <p>
                {`Date: ${date.toLocaleDateString('en-GB')}. Time: ${date.toLocaleTimeString('en-GB')}`}
            </p>
        </div>
    )
}

HelloWorld8.defaultProps = {
name: "User"
}

export default HelloWorld8;