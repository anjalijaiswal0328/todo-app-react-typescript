import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import TodoItem from '../components/TodoItem';

test('TodoItem renders correctly', () => {
  const todo = { id: 1, text: 'Test Todo', completed: false };
  const toggleTodo = jest.fn();
  render(<TodoItem todo={todo} toggleTodo={toggleTodo} />);
  
  const todoText = screen.getByText('Test Todo');
  expect(todoText).toBeInTheDocument();

  const checkbox = screen.getByText('Test Todo').previousElementSibling as HTMLInputElement;
  fireEvent.click(checkbox);
  expect(toggleTodo).toHaveBeenCalledWith(1);
});