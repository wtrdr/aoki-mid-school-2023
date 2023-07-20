let taskValue = document.getElementsByClassName("task_value")[0];
let taskSubmit = document.getElementsByClassName("task_submit")[0];
let taskList = document.getElementsByClassName("task_list")[0];

// 追加ボタンを作成
let addTasks = (task) => {
  // 入力したタスクを追加・表示
  let listItem = document.createElement("li");
  // TODO: ここでチェックボックスを作る
  // こうやったら作れるよ！
  // let check = document.createElement('input');
  // check.setAttribute('type','checkbox');
  
  // TODO: ここで作ったチェックボックスをlistItemに追加す
  let showItem = taskList.appendChild(listItem);
  showItem.innerHTML = task;

  
  // タスクに削除ボタンを付与
  let deleteButton = document.createElement('button');
  
  deleteButton.innerHTML = "Delete";
  listItem.appendChild(deleteButton);

  // 削除ボタンをクリックし、イベントを発動（タスクが削除）
  deleteButton.addEventListener("click", (evt) => {
    evt.preventDefault();
    deleteTasks(deleteButton);
  });
};
// 削除ボタンにタスクを消す機能を付与
let deleteTasks = (deleteButton) => {
  let chosenTask = deleteButton.closest("li");
  taskList.removeChild(chosenTask);
};

// 追加ボタンをクリックし、イベントを発動（タスクが追加）
taskSubmit.addEventListener("click", (evt) => {
  evt.preventDefault();
  let task = taskValue.value;
  addTasks(task);

  taskValue.value = "";
});
