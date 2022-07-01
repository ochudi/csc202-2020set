/** Here we illustrate useEffect for fetching remote data */
import React, {useState, useEffect, useRef} from 'react';
import ShowUser from './ShowUser';

const HelloWorld7 = (props) => {
    //const [state, setState] = useState(initialState);
    const [user, setUser] = useState(null);
    let userIdInput = useRef();
    //to be called when refetch is required. User id is read from input with ref attribute name userId
    const refetchData = async () => {
        try {
            let response = await fetch(`http://isms.com/students/${userIdInput.current.value}`);
            let data = await response.json()
            setUser(data);
        } catch (error) {
        setUser(null);
        }
    };
    const fetchData = async () => {
        try {
            let response = await fetch(`http://isms.com/students/1`);
            let data = await response.json()
            setUser(data);
        } catch (error) {
            setUser(null);
        }
    };
    useEffect(() => {
        fetchData();
        userIdInput.current.focus(); //focus on the referenced input field after fetching initial data
        }, []);
        //prepare conditional showing of user
        const showUser = () => {
            if (user!==null){
                return <ShowUser user={user} />
            }
            else {
                return 'No user to display';
            }
        }
        return (
            <div>
                <p>
                    Hello {props.name}.
                    You can access students from the database, here:
                </p>
                <p>
                    <input ref={userIdInput} type="number" placeholder="Input Student ID" />
                </p>
                <p>
                    <button onClick={refetchData}>
                        Fetch Student
                    </button>
                </p>
                <p>
                    {showUser()}
                </p>
            </div>
        )
}

HelloWorld7.defaultProps = {
        name: "User"
}

export default HelloWorld7;