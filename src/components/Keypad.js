// Code Keypad Component Here
import React, {useState} from "react";

function Keypad (){
    const [password, setPassword] = useState('');

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
        console.log('Entering password...');
    };
    return (
        <div>
            <input 
            type="password" 
            value={password}
            onChange={handlePasswordChange} 
            placeholder="Enter password"
            />
           
        </div>
    );
}

export default Keypad;