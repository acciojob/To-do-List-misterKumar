//your code here
const newTodoInput = document.querySelector('#newTodoInput');
const addTodoBtn = document.querySelector('#addTodoBtn');
const todoList = document.querySelector('#todoList');

addTodoBtn.addEventListener('click', () => {
  const newTodoText = newTodoInput.value.trim();

  if (newTodoText.length > 0) {
    const newTodo = document.createElement('li');
    newTodo.textContent = newTodoText;
    todoList.appendChild(newTodo);

    newTodoInput.value = '';
  }
});
