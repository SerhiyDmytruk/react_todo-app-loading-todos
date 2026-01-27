export const NewTodo: React.FC = () => {
  {
    /* Add a todo on form submit */
  }

  return (
    <form>
      <input
        data-cy="NewTodoField"
        type="text"
        className="todoapp__new-todo"
        placeholder="What needs to be done?"
      />
    </form>
  );
};
