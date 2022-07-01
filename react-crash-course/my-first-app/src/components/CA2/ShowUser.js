import React from 'react';

const ShowUser = (props) => {
    const showUser = () => {
        const user = props.user;
        try{
            if(user.id !== undefined){
                // make user that user object is trully available
                return(
                    <table>
                        <th>KEY</th>
                        <th>VALUE</th>
                        <tr>
                            <td>Student ID:</td>
                            <td>{user.id}</td>
                        </tr>
                        <tr>
                            <td>Department:</td>
                            <td>{user.department}</td>
                        </tr>
                        <tr>
                            <td>Matriculation Number:</td>
                            <td>{user.matriculationNumber}</td>
                        </tr>
                        <tr>
                            <td>Mode Of Entry:</td>
                            <td>{user.modeOfEntry}</td>
                        </tr>
                        <tr>
                            <td>Program Of Study:</td>
                            <td>{user.programOfStudy}</td>
                        </tr>
                        <tr>
                            <td>Year Of Entry:</td>
                            <td>{user.dateOfBirth}</td>
                        </tr>
                    </table>
                    )
            }
            else{
                return 'No user to display'; //user is null or elements are undefined
            }
        } catch(error){
            return `Problem fetching user ${error.message}`;
        }
    }
    return (
        <div>
            {showUser()}
        </div>
    )
}

export default ShowUser;