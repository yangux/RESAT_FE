const input = document.querySelector("#todoInput");
const categoryRadioBtns = document.querySelectorAll('input[name="category"]');
const todoRadioBtns = document.querySelectorAll('input[name="todo"]');
const submitBtn = document.querySelector("#submitBtn");
const todoList = document.querySelector("#todoList");
let todoRadioChecked;

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const todo = input.value;

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.name = "listed";
  checkbox.value = todo;

  const li = document.createElement("li");
  li.append(checkbox, `${checkbox.value} [${todoRadioChecked}]`);
  todoList.append(li);
  input.value = "";

  console.log(todoRadioChecked);
});

todoRadioBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    todoRadioChecked = this.value;
  });
});

categoryRadioBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    console.log(this.value);
  });
});
