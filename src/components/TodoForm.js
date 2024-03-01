import React, {useState} from 'react';

const TodoForm = ({AddTodo}) => {
    const [value, setValue] = useState('')

    const HandleSubmit = (e) => {
        e.preventDefault()

        AddTodo(value)
        setValue('')
    }
    return (
        <form className='TodoForm' onSubmit={HandleSubmit}>
            <input type="text" value={value} className='TodoInput' placeholder='Print todo' onChange={(e) => {setValue(e.target.value)
            }} />
            <button type='submit' className='TodoBtn'>Create Todo</button>
        </form>
    );
};

export default TodoForm;