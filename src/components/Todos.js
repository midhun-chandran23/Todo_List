import React ,{useState} from "react";
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { removeTodo, updateTodo,addTodo} from '../features/todo/todoSlice';


function Todos(){
    const todos = useSelector((state) => state.todos);

    const dispatch = useDispatch()

    const [input,setInput] = useState('');
   

    const addTodoHandler = (e) =>{
        e.preventDefault();

        dispatch(addTodo(input))
        setInput('');
    }

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

   
  return (
    <>
     <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
            <h1 className="text-4xl font-bold text-white mb-8">MY TODO APP</h1>
            <form onSubmit={addTodoHandler} className="w-full max-w-md space-y-5">
                <input
                    type="text"
                    className="w-full bg-gray-800 rounded-lg border border-gray-700 
                               focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 
                               text-base outline-none text-gray-100 py-3 px-4 leading-8 
                               transition-colors duration-200 ease-in-out"
                    placeholder="Enter Your Todo"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button
                    type="submit"
                    className="w-full text-white bg-indigo-500 border-0 py-3 px-6 
                               focus:outline-none hover:bg-indigo-600 rounded-lg text-lg 
                               transition duration-200 ease-in-out transform hover:scale-105">
                    Add Todo
                </button>
            </form>
        
      <div className="text-3xl font-bold text-center my-6 text-indigo-600">
        My Todo List
      </div>
      <ul className="list-none max-w-md mx-auto">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-gray-900 px-5 py-3 rounded-lg shadow-lg  "
            key={todo.id}
          >
            {/* Conditionally render input or text based on edit mode */}
            {editingTodoId === todo.id ? (
              <input
                type="text"
                value={newText}
                onChange={(e) => setNewText(e.target.value)}
                className="text-gray-900 bg-gray-200 p-2 rounded-lg w-full mr-3 focus:outline-none focus:ring focus:ring-indigo-500"
              />
            ) : (
              <div className="text-gray-200 text-lg font-medium mr-20">{todo.text}</div>
            )}
  
            <div className="flex space-x-2 ">
              {/* Edit button */}
              {editingTodoId === todo.id ? (
                <button
                  onClick={() => handleUpdate(todo.id)}
                  className="text-white bg-green-600 border-0 py-2 px-4 focus:outline-none hover:bg-green-700 rounded-lg transition duration-300"
                >
                  Save
                </button>
              ) : (
                <button
                  onClick={() => handleEdit(todo)}
                  className="text-white bg-blue-600 border-0 py-2 px-4 focus:outline-none hover:bg-blue-700 rounded-lg transition duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.232 5.232l3.536 3.536M16.75 3.75a2.121 2.121 0 113 3L7.5 19.5l-4 1 1-4L16.75 3.75z"
                    />
                  </svg>
                </button>
              )}
  
              {/* Delete button */}
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="text-white bg-red-600 border-0 py-2 px-4 focus:outline-none hover:bg-red-700 rounded-lg transition duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="w-5 h-5"
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
      </div>
    </>
  );
  
}

export default Todos