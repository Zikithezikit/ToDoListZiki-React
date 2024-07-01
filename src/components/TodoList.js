import React, { useState } from 'react';
import TodoItem from "./TodoItem";


function TodoList(){
    
    function uniqueID() {
        return Math.floor(Math.random() * Date.now())
        }
    const [tasks, setTasks] = useState([
        {
            id:1,
            text:'To make a todo list',
            completed:false
        },
        {
            id:2,
            text:'To change logos and such...',
            completed:false
        },
        {
            id:3,
            text:'This is a test',
            completed: true
        }
    ]);
    const [text, setText] = useState('');
    // Add a task to the list
    function addTask(text){
        const newTask = {
            id:uniqueID(),
            text,
            completed:false
        }
        tasks.push(newTask);
        setText('');
    }

    // Delete task from the list by filtering the list to exclude the id provided 
    function deleteTask(id){
        setTasks(tasks.filter(task => task.id !== id))
    }

    // Toggle Completed Task (true/false)
    function toggleCompleted(id){
        setTasks(tasks.map(task => {
            // finds the asked task to change completed bool value 
            if(task.id === id) {
                // changes the value if the task id if found
                return {...task, completed: !task.completed};
            }
            else {
                // doesn't change the value if the asked task is not found
                return task;
            }
        }));
    }

    return (
        <div className="todo-list">
            {tasks.map(task => (
                <TodoItem 
                key={task.id}
                task={task}
                deleteTask={deleteTask}
                toggleCompleted={toggleCompleted}
                />
            ))}
            <input
            className='TextBoxStyle'
            value={text}
            onChange={e => setText(e.target.value)}/>
            <button className='AddButton' onClick={() => addTask(text)}>Add</button>
        </div>
    );
}

export default TodoList;