import React, { useState } from 'react';

function RandomNum(){
    const [random,setRandom] = useState(null)
    const [counts,setCounts] = useState("Even")


    const generateRandomNum = () => {
        
        const number = Math.floor(Math.random() * 100) ; // Generates a random number between 1 and 100
        setRandom(number);
        
      }



return(
    
    <div className='linear'>  
    <p> 1</p>
      <p id='para' className='textRabdom'> Random Number </p>
      <p id="text" > Generate a ramdom number 0 to 100 </p>
       
      <button onClick={generateRandomNum} className='btnButton'>show/lastname</button>
      <p id="text" className='paraRandom'> {random} </p>
      
      
    </div>
)
}

export default RandomNum;