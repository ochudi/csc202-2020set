import React from 'react';

const HelloWorld2 = (props) => {
    return (
        <div>
            <p>Hello {props.name} {props.other}. Greetings from React.</p>
        </div>
    )
}


HelloWorld2.defaultProps = {
    name: "User"
} 


export default HelloWorld2;