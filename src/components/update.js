// components/UpdateTodoForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTodoItem } from '../redux/todoListReducer';

const UpdateTodoForm = ({ todo, onClose }) => {
    const dispatch = useDispatch();
    const [updatedTodo, setUpdatedTodo] = useState(todo.todoItem);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(editTodoItem({ id: todo.id, updatedFields: { todoItem: updatedTodo } }));
        onClose(); // Close the form after submission
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Update Todo:
                <input
                    type="text"
                    value={updatedTodo}
                    onChange={(e) => setUpdatedTodo(e.target.value)}
                />
            </label>
            <button type="submit">Update</button>
            <button type="button" onClick={onClose}>Cancel</button>
        </form>
    );
};

export default UpdateTodoForm;
