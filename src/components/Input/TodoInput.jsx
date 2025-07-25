import { useState } from 'react';
import style from './TodoInput.module.css';

function TodoInput({addTodo}) {

  const [input, setInput] = useState('')

  function submitInput(e){
    e.preventDefault();
    if(input.trim() === '') return;
    setInput('');
    console.log(input);
    addTodo(input);
  }

  return (
    <form className={`${style.inputSection}`}  > 
        <input 
        type="text" 
        value={input}
        placeholder='Enter the Task..'
        onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={submitInput}>Add</button>

    </form>
  )
}

export default TodoInput
