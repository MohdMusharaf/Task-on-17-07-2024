import React, { useState } from 'react';

function DeleteTodo(){


  
    const [todos ,setTodos] = useState([
        {
          todoUniqueNo: 1,
          todoName: 'Melaka Mosque',
          
        },
        {
            todoUniqueNo: 2,
            todoName: 'Melaka Mosque',
            
          },
          {
            todoUniqueNo: 3,
            todoName: 'Melaka Mosque',
            
          },
          {
            todoUniqueNo: 4,
            todoName: 'Melaka Mosque',
            
          },
          {
            todoUniqueNo: 5,
            todoName: 'Melaka Mosque',
            
          }, 
        ])
        
        const filteredList = todos.filter(todo =>
          todo.todoName.toLowerCase()
      );
        
       
        const deleteTodo = (todoUniqueNo) => {
            setTodos(todos.filter(todo1 => todo1.todoUniqueNo !== todoUniqueNo));
        };

        

        
        

return(
    
    <div className='linear'>  
    <p> 2</p>
      <p id='para' className='textRabdom'> Todos  </p>
       
      <div className=''>
        {filteredList.map(todo =>(
            <div className='innerDiv' key={todo.todoUniqueNo} >
            
            <span className='fontDestina'>{todo.todoName}</span>
            <button onClick={()=>deleteTodo(todo.todoUniqueNo)} >Delete</button><br/><br/>
        </div>
        ))}
        
      </div>
      
      
    </div>
)
}

export default DeleteTodo;