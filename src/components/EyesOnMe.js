// Code EyesOnMe Component Here
// Code EyesOnMe Component Here
import React,{useState} from "react";

function EyesOnMe (){
    const [isFocused,isSetFocused] = useState('false');
    

    const handleFocus = () => {
        isSetFocused(true);
        console.log('Good!');
    };
    const handleBlur = () => {
        isSetFocused(false);
        console.log('Hey! Eyes on me!')
    }
    return( 
        <>
        <button 
        onFocus={handleFocus}
        onBlur={handleBlur}
        >
            Eyes on me</button>
         </>)
         
   
}

export default EyesOnMe;