import style from './TodoItem.module.css'
import { MdDeleteForever } from "react-icons/md";

function TodoItem({todo, toggleComplete, deleteTodo}) {
  return (
    <div className={`${style.items}`}>
        <ul>
            <input type="checkbox" checked={todo.complete} onChange={() => toggleComplete(todo.id)}/>
            <li style={{textDecoration: todo.complete ? 'line-through' : 'none'}}> 
                {todo.text} 
            </li>

            <button className={style.deleteBtn} onClick={() => deleteTodo(todo.id)}> 
                <MdDeleteForever fontSize='18px'/> 
            </button>

        </ul>
    </div>
  )
}

export default TodoItem

