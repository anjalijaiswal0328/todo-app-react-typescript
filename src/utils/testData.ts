import { faker } from "@faker-js/faker";
import { Todo } from "../types/Todo";

export const generateTestData = function (items: number) {
  const todos: Todo[] = [];

  for (let i = 0; i < items; i++) {
    todos.push({
      id: i + 1,
      text: faker.word.words(3),
      completed: false,
    } as Todo);
  }

  return todos;
};
