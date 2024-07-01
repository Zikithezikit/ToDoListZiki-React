import React from 'react';


function TodoItem({task, deleteTask, toggleCompleted}) {
    function handleChange(){
        toggleCompleted(task.id);
    }


        if (!(task.completed)){
            return(
                <div className='todo-item'>
                    <input
                    className='checkbox-basic'
                    type="checkbox"
                    checked={task.completed}
                    onChange={handleChange}
                    ></input>
                    <p>{task.text}</p>
                    <button className='ButtonDelete' onClick={() => deleteTask(task.id)} ></button>
                </div>
            );

        } else{
            return(
                <div className='todo-item-toggle'>
                        <input 
                        className='checkbox-basic'
                        type="checkbox"
                        checked={task.completed}
                        onChange={handleChange}
                        ></input>
                        <p>{task.text}</p>
                        
                        <button className='ButtonDelete' onClick={() => deleteTask(task.id)} ></button>
                    </div>
            );
        };
}

export default TodoItem;