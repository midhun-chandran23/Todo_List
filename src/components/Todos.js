import React ,{useState} from "react";
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { removeTodo, updateTodo} from '../features/todo/todoSlice';


function Todos(){
    const todos = useSelector((state) => state.todos);

    const dispatch = useDispatch()

    const [editingTodoId, setEditingTodoId] = useState(null);
  const [newText, setNewText] = useState("");

  const handleEdit = (todo) => {
    setEditingTodoId(todo.id);
    setNewText(todo.text);
  };

  const handleUpdate = (id) => {
    dispatch(updateTodo({ id, text: newText }));
    setEditingTodoId(null); // Exit edit mode
    setNewText(""); // Clear the input
  };

   
    return(
        <>
        <div> MY Todo List</div>
        <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            {/* Conditionally render input or text based on edit mode */}
            {editingTodoId === todo.id ? (
              <input
                type="text"
                value={newText}
                onChange={(e) => setNewText(e.target.value)}
                className="text-black bg-white p-1 rounded"
              />
            ) : (
              <div className="text-white">{todo.text}</div>
            )}

            <div className="flex space-x-2">
              {/* Edit button */}
              {editingTodoId === todo.id ? (
                <button
                  onClick={() => handleUpdate(todo.id)}
                  className="text-white bg-green-500 border-0 py-1 px-4 focus:outline-none hover:bg-white rounded text-md"
                >
                  Save
                </button>
              ) : (
                <button
                  onClick={() => handleEdit(todo)}
                  className="text-white bg-blue-500 border-0 py-1 px-4 focus:outline-none hover:bg-white rounded text-md"
                >
                  Edit
                </button>
              )}

              {/* Delete button */}
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-white rounded text-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos