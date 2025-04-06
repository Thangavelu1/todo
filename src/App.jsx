import { useState } from 'react';
import './App.css';
import ToDoTable from './components/ToDoTable';
import KanbanBoard from './components/KanbanBoard';
import ToDoForm from './components/ToDoForm';

const TO_DO = {
  taskNumber: '',
  description: '',
  status: '',
  assignedDate: new Date().toISOString().split('T')[0],
  ecd: '',
  assignee: '',
};

function App() {
  const [todo, setTodo] = useState(TO_DO);
  const [todoList, setTodoList] = useState([]);

  const [update, setUpdate] = useState(true);

  function handleChange(key, value) {
    let todoData = {
      ...todo,
      [key]: value,
    };
    setTodo(todoData);
  }

  function validate(todo) {
    if (
      Object.values(todo).every(
        (value) => value !== null && value !== undefined && value !== ''
      )
    ) {
      if (
        todoList.findIndex((itodo) => itodo.taskNumber === todo.taskNumber) >= 0
      ) {
        alert('Duplicate Entry....');
      } else {
        return true;
      }
    } else {
      alert('Fill the Mandatory Fields....');
    }
  }

  const handleAdd = () => {
    if (validate(todo)) {
      setTodoList([...todoList, todo]);
      setTodo(TO_DO);
    }
  };

  function handleUpdate() {
    let copiedTodoList = [...todoList];
    const updatedList = copiedTodoList.map((ctodo) =>
      ctodo.taskNumber === todo.taskNumber ? { ...ctodo, ...todo } : ctodo
    );
    setTodoList(updatedList);
    setTodo(TO_DO);
    setUpdate(true);
  }

  function handleClear() {
    setUpdate(true);
    setTodo(TO_DO);
  }

  function handleEdit(todo) {
    setUpdate(false);
    setTodo(todo);
  }

  function handleDelete(taskNum) {
    let copiedTodoList = [...todoList];
    const index = todoList.findIndex((todo) => todo.taskNumber === taskNum);
    copiedTodoList.splice(index, 1);
    setTodoList(copiedTodoList);
  }

  return (
    <>
      <h1>To Do Application</h1>
      <hr />
      <KanbanBoard
        todoList={todoList}
        handleEdit={handleEdit}
      />
      <hr />
      <div className='form-table'>
        <ToDoForm
          todo={todo}
          update={update}
          handleChange={handleChange}
          handleAdd={handleAdd}
          handleUpdate={handleUpdate}
          handleClear={handleClear}
        />
        <ToDoTable
          todoList={todoList}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      </div>
      <hr />
    </>
  );
}

export default App;
