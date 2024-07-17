
import React, { useState } from 'react';

function Counter() {

  const [count, setCount] = useState(0);


  return (
    <div className='head'>
      <h2 >the Button has been Clicked {count} times</h2>
      <p className='para'> click the button to increase the count</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      
    </div>
  );
}

export default Counter;
