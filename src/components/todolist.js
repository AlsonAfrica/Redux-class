import { useSelector, useDispatch } from "react-redux";
import {deleteTodoItem } from  '../redux/todoListReducer'

function TodoList() {
    const todoList = useSelector(state => state.todoList);

    const dispatch = useDispatch() ;


    return (
        <ul>
            {todoList.map((item) => (
                <div>
            
                <li key={item.id}>{item.todoItem}</li>
                <button onClick={()=> dispatch(deleteTodoItem(item.id))}>delete</button>
                <button>Update</button>
                </div>
            ))}
        </ul>
    );
}

export default TodoList;
