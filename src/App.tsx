import React, { useState } from 'react';
import { UserWarning } from './UserWarning';
import { USER_ID } from './api/todos';
import { ErrorNotification } from './components/ErrorNotification';
import { Filter } from './components/Filter';
import { TodoList } from './components/TodoList';
import { NewTodo } from './components/NewTodo';
import { Todo } from './types/Todo';

export const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[] | undefined>();

  const [error] = useState(false);

  const handleAddTodo = (todo: Todo) => {
    setTodos(prevTodos => (prevTodos ? [...prevTodos, todo] : [todo]));
  };

  if (!USER_ID) {
    return <UserWarning />;
  }

  return (
    <div className="todoapp">
      <h1 className="todoapp__title">todos</h1>

      <div className="todoapp__content">
        <header className="todoapp__header">
          {/* this button should have `active` class only if all todos are completed */}

          {todos && (
            <button
              type="button"
              className="todoapp__toggle-all active"
              data-cy="ToggleAllButton"
            />
          )}

          <NewTodo newTodo={handleAddTodo} />
        </header>

        {todos && (
          <>
            <TodoList todos={todos} />

            <footer className="todoapp__footer" data-cy="Footer">
              <span className="todo-count" data-cy="TodosCounter">
                3 items left
              </span>

              {/* Active link should have the 'selected' class */}
              <Filter />

              {/* this button should be disabled if there are no completed todos */}
              <button
                type="button"
                className="todoapp__clear-completed"
                data-cy="ClearCompletedButton"
              >
                Clear completed
              </button>
            </footer>
          </>
        )}
      </div>

      {/* DON'T use conditional rendering to hide the notification */}
      {error && <ErrorNotification />}
    </div>
  );
};
