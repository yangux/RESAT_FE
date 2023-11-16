const todoInput = document.querySelector("#todoInput");
const categoryRadioBtns = document.querySelectorAll('input[name="category"]');
const todoRadioBtns = document.querySelectorAll('input[name="todo"]');
const submitBtn = document.querySelector("#submitBtn");
const todoList = document.querySelector("#todoList");
const todoLines = todoList.children;
let todoRadioChecked;

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const todo = todoInput.value;

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.name = "listed";
  checkbox.value = todo;

  const li = document.createElement("li");
  const todoTitle = document.createElement("span");
  const todoImportance = document.createElement("span");

  todoTitle.innerHTML = todo;
  todoImportance.innerHTML = ` [${todoRadioChecked.value}]`;

  li.append(checkbox, todoTitle, todoImportance);
  todoList.append(li);

  checkbox.addEventListener("change", function () {
    li.classList.toggle("done");
  });

  todoInput.value = "";
});

todoRadioBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    todoRadioChecked = this;
  });
});

categoryRadioBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    switch (this.value) {
      case "완료":
        Array.from(todoLines).forEach((li) => {
          if (li.classList.contains("done")) {
            li.classList.remove("hide");
          } else li.classList.add("hide");
        });
        break;
      case "미완료":
        Array.from(todoLines).forEach((li) => {
          if (li.classList.contains("done")) {
            li.classList.add("hide");
          } else li.classList.remove("hide");
        });
        break;
      default:
        Array.from(todoLines).forEach((li) => {
          li.classList.remove("hide");
        });
    }
  });
});
