// import React,{useState} from 'react';

// import { useDispatch } from 'react-redux';

// import { addTodo } from '../features/todo/todoSlice';

// function AddTodo(){
//     const [input,setInput] = useState('');
//     const dispatch = useDispatch();

//     const addTodoHandler = (e) =>{
//         e.preventDefault();

//         dispatch(addTodo(input))
//         setInput('');
    



//     return (
//         <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
//             <h1 className="text-4xl font-bold text-white mb-8">MY TODO APP</h1>
//             <form onSubmit={addTodoHandler} className="w-full max-w-md space-y-5">
//                 <input
//                     type="text"
//                     className="w-full bg-gray-800 rounded-lg border border-gray-700 
//                                focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 
//                                text-base outline-none text-gray-100 py-3 px-4 leading-8 
//                                transition-colors duration-200 ease-in-out"
//                     placeholder="Enter Your Todo"
//                     value={input}
//                     onChange={(e) => setInput(e.target.value)}
//                 />
//                 <button
//                     type="submit"
//                     className="w-full text-white bg-indigo-500 border-0 py-3 px-6 
//                                focus:outline-none hover:bg-indigo-600 rounded-lg text-lg 
//                                transition duration-200 ease-in-out transform hover:scale-105">
//                     Add Todo
//                 </button>
//             </form>
//         </div>
//     );
    
// }

// export default AddTodo