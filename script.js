let buttonAdd = document.getElementById("toDoBtn");
let txtInput = document.getElementById("toDoText");
let dateInput = document.getElementById("toDoDate");
let todoList = document.getElementById("newToDo");

function createNewElement(task, date) {
  // сщхдание нового итема

  let listItem = document.createElement("li");
  listItem.className = "listItem";

  let inputDiv = document.createElement("div");
  inputDiv.className = "inputDiv";

  let labelTxt = document.createElement("label");
  labelTxt.className = "labelTxt";
  labelTxt.innerHTML = task;

  let labelDate = document.createElement("label");
  labelDate.className = "labelDate";
  labelDate.innerHTML = date;

  let buttonDiv = document.createElement("div");
  buttonDiv.className = "buttonDiv";

  let materia = document.createElement("button");
  materia.className = "materialBtn";
  materia.innerHTML = '<i class="fas fa-arrow-right"></i>';

  let close = document.createElement("button");
  close.className = "closeBtn";
  close.innerHTML = '<i class="fas fa-times-circle"></i>';

  buttonDiv.appendChild(materia);
  buttonDiv.appendChild(close);

  inputDiv.appendChild(labelTxt);
  inputDiv.appendChild(labelDate);

  listItem.appendChild(inputDiv);
  listItem.appendChild(buttonDiv);

  return listItem;
}

function addTask() {
  //добавление итема в первое окн

  if (txtInput.value && dateInput.value) {
    let listItem = createNewElement(txtInput.value, dateInput.value);
    todoList.appendChild(listItem);
    bindTaskEvents(listItem, processTask);
    txtInput.value = "";
    dateInput.value = "";
    let textError = document.getElementById("textError");
    textError.style.display = "none";
  } else {
    let textError = document.getElementById("textError");
    textError.style.textShadow = "red 0 0 2px";
  }
}

buttonAdd.onclick = addTask;

function deleteTask() {
  //удаление одного итема
  let listDiv = this.parentNode;
  let listItem = listDiv.parentNode;
  let ul = listItem.parentNode;
  ul.removeChild(listItem);
}

function processTask() {
  //добавление во второй столбез одного итема
  let listDiv = this.parentNode;
  let listItem = listDiv.parentNode;
  let processList = document.getElementById("poopToDo");
  processList.appendChild(listItem);
  let buttonDivProcess = listItem.querySelector("div.buttonDiv");
  buttonDivProcess.innerHTML = "";

  let materiaNew = document.createElement("button");
  materiaNew.className = "materialBtnNew";
  materiaNew.innerHTML = '<i class="fas fa-arrow-right"></i>';

  let closeNew = document.createElement("button");
  closeNew.className = "closeBtnNew";
  closeNew.innerHTML = '<i class="fas fa-times-circle"></i>';

  buttonDivProcess.appendChild(materiaNew);
  buttonDivProcess.appendChild(closeNew);

  let finischButton = listItem.querySelector("button.materialBtnNew");
  finischButton.onclick = finischItem;
  closeNew.onclick = deleteTask;
}

function finischItem() {
  //добавление в третий столбец одного итема
  let listDiv = this.parentNode;
  let listItem = listDiv.parentNode;
  let finischList = document.getElementById("doneToDo");
  finischList.appendChild(listItem);
  let buttonDivFinisch = listItem.querySelector("div.buttonDiv");
  buttonDivFinisch.innerHTML = "";

  let closeFinisch = document.createElement("button");
  closeFinisch.className = "closeBtnNew";
  closeFinisch.innerHTML = '<i class="fas fa-times-circle"></i>';
  closeFinisch.onclick = deleteTask;

  let materiaFinisch = document.createElement("button");
  materiaFinisch.className = "materialBtnFinisch";
  materiaFinisch.innerHTML = '<i class="fas fa-arrow-left"></i>';
  materiaFinisch.onclick = processTask;

  buttonDivFinisch.appendChild(closeFinisch);
  buttonDivFinisch.appendChild(materiaFinisch);
}

function bindTaskEvents(listItem) {
  //нажатие удаления и переноса
  let editButton = listItem.querySelector("button.materialBtn");
  let deleteButton = listItem.querySelector("button.closeBtn");

  editButton.onclick = processTask;
  deleteButton.onclick = deleteTask;
}
