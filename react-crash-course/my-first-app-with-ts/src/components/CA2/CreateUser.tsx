import React from 'react';
type Props = {
    name?: string;
    other?: string;
}
const CreateUser: React.FC<Props> = (props) => {
    return (
        <div>
            <form id="createUserForm" action="http://isms.com/students" method="POST">
                <label>Department:</label>
                <p>
                    <input id="department" name="department" type="text" placeholder="Department"></input>
                </p>

                <label>Matriculation  Number:</label>
                <p>
                    <input id="matriculation" name="matriculationNumber" type="text" placeholder="Matriculation Number"></input>
                </p>

                <label>Mode of Entry:</label>
                <p><select id="modeOfEntry">
                        <option selected value="UTME">UTME</option>
                        <option value="Direct Entry">Direct Entry</option>
                        <option value="Transfer">Transfer</option>
                    </select>
                </p>

                <label>Program Of Study:</label>
                <p>
                    <input id="programOfStudy" name="programOfStudy" type="text" placeholder="Program of Study"></input>
                </p>

                <label>Year of Entry:</label>
                <p>
                    <input id="yearOfEntry" name="yearOfEntry" type="number" placeholder="yyyy"></input>
                </p>

                <p>
                    <button type="submit" id="submitCreateUserForm">
                        Create
                    </button>
                </p>
                <p>
                    <button type="reset">Clear</button>
                </p>
            </form>
        </div>
    )
}

export default CreateUser;