import React from 'react';

const Form = ({ inputText, setInputText, todos, setTodos, setStatus, handleFilter }) => {

    const inputTextHandler = (e) => {
        const userInput = e.target.value;
        setInputText(userInput);
    }

    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, {text: inputText, completed: false, id: Math.random()*1000 }
        ]);

        setInputText('');
    }

    const statusHandler = (e) => {
        const status = e.target.value;
        setStatus(status);
    }

    return (
        <form>
            <input value={inputText} onChange={inputTextHandler} type='text' className='todo-input'/>
            <button onClick={submitTodoHandler} className='todo-button' type='submit'>
                <i className='fas fa-plus-square'></i>
            </button>
            <div className='select'>
                <select onClick={statusHandler} name='todos' className='filter-todo'>
                    <option value='all' >All</option>
                    <option value='completed'>Completed</option>
                    <option value={'uncompleted'}>Uncompleted</option>
                </select>
            </div>
        </form>
    )
}

export default Form;