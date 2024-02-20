// save to local storage

// tema switcher fordi det lækkert at brugeren kan "costomize" deres personlige to do liste

const temaSwitch = document.querySelector(".tema");

temaSwitch.addEventListener("change", (event) => {
  let nyValue = event.target.value;
  document.querySelector("body").dataset.theme = nyValue;
});

// Tilføj opgave knap skal tilføje alt information fra pop op input boxes, til en ny article (opgave)

const addTaskBtn = document.querySelector(".grid_right_btn");

const TaskInfo = {
  name: "undefined",
  number: 0,
  id: "unknown",
  checkbox: "null",
};

const allTask = [];

addTaskBtn.addEventListener("click", () => {
  const newTask = Object.create(TaskInfo);

  const taskName = document.querySelector("#text").value;
  const taskNumber = document.querySelector("#number").value;
  const taskID = unikIDCode();
  newTask.name = taskName;
  newTask.number = taskNumber;
  newTask.id = taskID;

  allTask.push(newTask);
  document.querySelector("form").reset();
  displayTask();
});

function displayTask() {
  document.querySelector("#task_list").innerHTML = "";
  allTask.forEach(createTaskList);
}

function createTaskList(newTask) {
  const clone = document.querySelector("#template").content.cloneNode(true);

  clone.querySelector("article").id = newTask.id;
  clone.querySelector("[data-type=name]").textContent = newTask.name;
  clone.querySelector("[data-type=number]").textContent = newTask.number;
  const checkBox = clone.querySelector("[type=checkbox]");
  checkBox.addEventListener("change", () => {
    checkBoxValue(newTask.id);
  });
  const deleteBtn = clone.querySelector(".exit");
  deleteBtn.addEventListener("click", () => {
    deleteTask(newTask.id);
  });
  document.querySelector("#task_list").appendChild(clone);
}

// Lav unikt ID til hver list item der bliver oprettet, samt opret ny artikkiel for hver submit

function unikIDCode() {
  let unikID = self.crypto.randomUUID();
  return unikID;
}

// Store tjek tegns box skal fjerne opgaven fra to do til færdige opgaver og omvendt

function checkBoxValue(taskId) {
  const task = allTask.find((task) => task.id === taskId);
  return task ? task.checkbox : null;
}

// Stor skraldespands icon skal fjerne opgaver permanent

function deleteTask(taskId) {
  const taskIndex = allTask.findIndex((task) => task.id === taskId);

  if (taskIndex !== -1) {
    allTask.splice(taskIndex, 1);
    displayTask();
  }
}

// knapper i venstre side af big grid skal skifte mellem visning af brugerens to do liste og de færdige opgaver

const tdListBtn = document.querySelector("#to_do_list_btn");
const fListBtn = document.querySelector("#finished_list_btn");
const tdList = document.querySelector("#to_do_list");
const fList = document.querySelector("#finished_task_list");
tdListBtn.style.backgroundColor = "var(--background-col)";

tdListBtn.addEventListener("click", () => {
  fListBtn.style.backgroundColor = "var(--btn-col)";
  tdListBtn.style.backgroundColor = "var(--background-col)";
  fList.classList.add("hide");
  tdList.classList.remove("hide");
});

fListBtn.addEventListener("click", () => {
  fListBtn.style.backgroundColor = "var(--background-col)";
  tdListBtn.style.backgroundColor = "var(--btn-col)";
  tdList.classList.add("hide");
  fList.classList.remove("hide");
});
