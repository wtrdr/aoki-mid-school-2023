let taskvalue=document.getElementsByClassName('task_value')[0];
let taskSubmit=document.getElementsByClassName('task_submit')[0];
let taskList=document.getElementsByClassName('task_list')[0];
//
let addTasks = (task) => {
//
let listItem = document.createElement('li');
let showItem = taskList.appendChild(listItem);
showItem.innerHTML = task;
//
let deleteButton.document.createElement('button');
deleteButton.innerHTML = 'Delete';
listItem.appendChild(deleteButton);
//
deleteButton.addEventListener('click,evt=>{
    evt.preventDefault();
    deleteTasks(deleteButton);
});
};
//
let deleteTasks=(deleteButton)=>{
    let chosenTask=deleteButton.closent('li');
    taskList.removeChild(chosenTask);
};
taskSubmit.addEventListener('click', evt => {
  evt.preventDefault();
  let task = taskValue.value;
  addTasks(task);
  taskValue.value ='';
});
