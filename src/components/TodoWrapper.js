import React, {useState} from 'react';
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import EditTodoForm from "./TodoEdit";

const TodoWrapper = () => {
    const [todos, setTodos] = useState([

    ])

    const AddTodo = (todo) => {
        if (todo) {
            setTodos([...todos, {id: Date.now(), task: todo, complited: false,isEditing: false}])
        }else  {
            alert('Please print something')
            }
    }
    const toggleComplete = (id) => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, complited: !todo.complited} : todo))
    }

    const DeleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }
    const EditTodo = (id) => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing, id: todo.id} : todo ))
    }
    const EditTask = (task, id) => {
        if (task){
            setTodos(todos.map(todo => todo.id === id ? {...todo,task, isEditing: !todo.isEditing} : todo ))
        } else  {
            alert('Printttt')
        }
    }

    return (
        <div className='TodoWrapper'>
            <TodoForm AddTodo={AddTodo}/>
            {todos.map((todo, index) => (
                todo.isEditing ? (
                    <EditTodoForm editTodo={EditTask} task={todo}/>
                    ): (
                        <Todo task={todo} key={index}
                              toggleComplete={toggleComplete}
                              deleteTodo={DeleteTodo}
                              editTodo={EditTodo}/>
                    )
            ))}
        </div>
    );
};

export default TodoWrapper;