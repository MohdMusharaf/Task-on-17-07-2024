import React, { useState } from 'react';

function Speed(){
    const [speed, setSpeed] = useState(0);

const speedIncrease =()=>{
    if(speed < 200){
    setSpeed(speed + 10)
    }
}
const speedDeacrease =()=>{
    if(speed > 0){
    setSpeed(speed - 10)
    }
}

return(
    <div className='speed'>
      
       <p>{speed}</p>
      <button onClick={speedIncrease} className='acceralte'>Accelerate</button>
      <button onClick={speedDeacrease}>Break</button>
      
    </div>
)
}

export default Speed;