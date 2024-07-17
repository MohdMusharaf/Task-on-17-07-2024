import React, { useState } from 'react';

function Fruit(){
    const [mango, setMango] = useState(0);
    const [banana, setBanana] = useState(0);


const bananaIncrease =()=>{
    
    setBanana(banana + 1)
    
}
const mangoDeacrease =()=>{
    
    setMango(mango + 1)
    
}

return(
    <div className='fruits'>
      
        <p> Bob eat {mango} Mango {banana}bananas</p>
        <div className='friutDiv'>
            <div >
        <img src='	https://daganghalal.blob.core.windows.net/28749/Product/1000x1000__mango-1657087656055.jpg' className='mango'/><br/>
        <button onClick={mangoDeacrease} className='acceralte'>Mango</button>
            </div>

            <div style={{marginLeft:40}}>
        <img src='https://freshgenfoods.com/wp-content/uploads/2021/08/Bananas-min.jpg' className='mango' /><br/>
        <button onClick={bananaIncrease} className='acceralte'>Banana</button>
            </div>
        </div>
    
      
     
      
    </div>
)
}

export default Fruit;