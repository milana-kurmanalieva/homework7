import React from 'react';

const Todo = ({task, toggleComplete, deleteTodo , editTodo}) => {
    return (
        <div className='Todo'>
            <p className={task.complited ? 'complited' : ''} onClick={() => toggleComplete(task.id)} key={task.id}>{task.task}</p>
            <div>
                <img width='20' height='20'
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Edit_icon_%28the_Noun_Project_30184%29.svg/1024px-Edit_icon_%28the_Noun_Project_30184%29.svg.png" alt="Edit"
                      onClick={() => editTodo(task.id)}/>

                <img width='20' height='20' src="https://cdn-icons-png.flaticon.com/512/1345/1345823.png" alt="Delete"
                     onClick={() => deleteTodo(task.id)}/>
            </div>
        </div>
    );
};

export default Todo;