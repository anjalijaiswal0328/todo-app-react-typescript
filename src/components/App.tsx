import React, { useState } from 'react';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import { Todo } from '../types/Todo';
import { generateTestData } from '../utils/testData';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>(generateTestData(20));

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: todos.length + 1,
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  return (
    <div className="container">
      <h1>Todo App</h1>
      <AddTodo addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} />
    </div>
  );
};

export default App;