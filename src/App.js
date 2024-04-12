import './App.css';
import { Form } from './components/Form';
import { Todos } from './components/Todos';

function App() {
  return (
    <div className="App">
      <h1>Todo App</h1>
      <Form />
      <Todos/>
    </div>
  );
}

export default App;
