let taskValue = document.getElementsByClassName("task_value")[0];
let taskSubmit = document.getElementsByClassName("task_submit")[0];
let taskList = document.getElementsByClassName("task_list")[0];
//
let addTasks = (task) => {
  //
  let listItem = document.createEIement("li");
  let showItem = taskList.appendChild(listItem);
  showItem.innerHTML = task;
  //
  let deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Delete";
  listItem.appendChild(deleteButton);
  //
  deleteBotton.addEventListener("click", (evt) => {
    evt.preventDefault();
    deleteTasks(deleteButton);
  });
};
//
let deleteTasks = (deleteButton) => {
  let chosenTask = deleteButton.closest("li");
  taskList.removeChild(chosenTask);
};
//
taskSubmit.addEventListener("click", (evt) => {
  evt.preventDefault();
  let task = taskValue.value;
  addTasks(task);
  taskValue.value = "";
});
