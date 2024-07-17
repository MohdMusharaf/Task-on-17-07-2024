import React, { useState } from 'react';

function ShowHide(){
    const [firstname,setFirstname] = useState("")
     
    const [lastname,setLastname] = useState("")


const nameBtn =()=>{
    let para1 =document.getElementById('para1')
        if(firstname ===""){
            setFirstname("Mohd");
            para1.classList.add('paraHidshow')
           
        }
        else{
            setFirstname("");
            para1.classList.remove('paraHidshow')
            
        }
}
const lastBtn =()=>{
    let para =document.getElementById('para')
    if(lastname ===""){
        setLastname("Musharaf");
        
        para.classList.add('paraHidshow')
       
    }
    else{
        setLastname("");
        para.classList.remove('paraHidshow')
    }
}

return(
    <div className='subscribe'>
      
       <h2>Show/Hide</h2>
    <div className='show'>
       <div>
       <button onClick={nameBtn} className='btnButton'>show/firstname</button>
       <p id='para1' className=''>{firstname}</p>
       </div>
      <div className='laseBtn'>
      <button onClick={lastBtn} className='btnButton'>show/lastname</button>
      
      <p id='para' className=''>{lastname}</p>
      </div>
      </div>
    </div>
)
}

export default ShowHide;