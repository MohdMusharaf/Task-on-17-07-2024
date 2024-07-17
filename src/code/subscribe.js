import React, { useState } from 'react';

function Subscribe(){
    const [sub,setSub] = useState("subscribe")


const subscribeBtn =()=>{
    setSub("subscribed")
}

return(
    <div className='subscribe'>
      
       <h2>Welcome</h2>
       <p>Thank you! Happy Learning</p>
      <button onClick={subscribeBtn} className='btnButton'>{sub}</button>
     
      
    </div>
)
}

export default Subscribe;