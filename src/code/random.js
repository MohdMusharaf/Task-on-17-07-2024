import React, { useState } from 'react';

function Random(){
    const [random,setRandom] = useState(null)
    const [counts,setCounts] = useState("Even")


    const generateRandomNumber = () => {
        let text = document.getElementById('text')
        const number = Math.floor(Math.random() * 100) ; // Generates a random number between 1 and 100
        setRandom(number);
        if(number%2 === 0){
            text.textContent="count is  even number"
        }else{
            text.textContent="count is  odd number"
        }
      }



return(
    <div className='linear'>  
      <p id='para' className='textRabdom'>Count {random}</p>
      <p id="text" className='paraRandom'>count {counts} </p>
       
      <button onClick={generateRandomNumber} className='btnButton'>show/lastname</button>
      
      
    </div>
)
}

export default Random;