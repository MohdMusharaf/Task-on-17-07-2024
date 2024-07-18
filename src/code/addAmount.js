import React, { useState } from 'react';

function AddAmount(){
        
const [mountAdd , setMountAdd]=useState(1500)

const fivtyBtn = ()=>{
    setMountAdd(mountAdd -50)
}
const hundredBtn = ()=>{
    setMountAdd(mountAdd -100)
}
const twohundredBtn = ()=>{
    setMountAdd(mountAdd -200)
}
const fiveHundredBtn = ()=>{
    setMountAdd(mountAdd -500)
}

return(
    
    <div className='addAmountDiv'>  
        <p> 4</p>
        <div className='addAmountMiddle'>
            <div className='circleAmount'>
            <span className='scircle'>S</span>
            <span>Sarah Williams</span>
        </div>
        <div className='circleAmount '>
            <span className='balance'>Your Balance</span>
            <span className='displayAmount'>{mountAdd}</span>
        </div>
        <p className='withdraw' >Withdraw</p>
        <p>CHOOSE SUM (IN RUPEE)</p>
        <div className='buttonAmount'>
            <button className='amountBtn exact' onClick={fivtyBtn} >50 </button>
            <button className='amountBtn'  onClick={hundredBtn} >100</button>
            <button className='amountBtn' onClick={twohundredBtn} >200</button>
            <button className='amountBtn' onClick={fiveHundredBtn} >500</button>
        </div>
        </div>
      
    </div>
    )

}
        
      
      
      
    


export default AddAmount;