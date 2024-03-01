import React, {useState} from 'react';

const EditTodoForm = ({editTodo ,task}) => {
    const [value, setValue] = useState(task.task)

    const HandleSubmit = (e) => {
        e.preventDefault()

        editTodo(value, task.id)
        setValue('')
    }
    return (
        <form className='EditTodoForm' onSubmit={HandleSubmit}>
            <input type="text" value={value} className='EditTodoInput'
                   placeholder='Edit todo' onChange={(e) =>
            {setValue(e.target.value)
            }} />
            <button type='submit' className='TodoBtn'>Edit Todo</button>
        </form>
    );
};

export default EditTodoForm;