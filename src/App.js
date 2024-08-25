import logo from './logo.svg';
import './App.css';
import Todos from './components/Todos';
import AddTodo from './components/Addtodo';

function App() {
  return (
    <div className="App">
      <AddTodo/>
      <Todos/>
     
    </div>
  );
}

export default App;
