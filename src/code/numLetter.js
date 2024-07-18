import React, { useState } from 'react';

function NumLetter(){
    const [numLetter,setNumLetter] = useState("")
   
   

    const numberOfLetters = (event) => {
        setNumLetter(event.target.value);
    }



return(
    <div className='calculator'>  
        <div className='paraDivCal'>
           <p className='calculatorPara'> Calculate the Letter you enter</p>
        </div>
        <span>Enter the phrase</span><br/>
      <input type='text' className='' id='inputLetter'   onChange={numberOfLetters} /><br/><br/>
      <span>Number of Leter </span><span className='numberLength'>{numLetter.length}</span>
      
    </div>
)
}

export default NumLetter;