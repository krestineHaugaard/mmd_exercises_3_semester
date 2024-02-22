// tema switcher fordi det lækkert at brugeren kan "costomize" deres personlige to do liste

const temaSwitch = document.querySelector(".tema");

temaSwitch.addEventListener("change", (event) => {
  let nyValue = event.target.value;
  document.querySelector("body").dataset.theme = nyValue;
});

const addTaskBtn = document.querySelector(".grid_right_btn");

// object som skabelon til information der skal i array
const TaskInfo = {
  name: "undefined",
  number: 0,
  id: "unknown",
  completed: false,
};

// array hvor alt ny information bliver sent ind
const allTask = [];

addTaskBtn.addEventListener("click", () => {
  if (document.querySelector("#text").value.trim() === ``) {
    alert("Please enter a task name before adding.");
  } else {
    const newTask = Object.create(TaskInfo);

    const taskName = document.querySelector("#text").value;
    const taskNumber = document.querySelector("#number").value;
    const taskID = unikIDCode();
    newTask.name = taskName;
    newTask.number = taskNumber;
    newTask.id = taskID;

    allTask.push(newTask);
    document.querySelector(".pop_up").reset();
    displayTask();
  }
});

function displayTask() {
  document.querySelector("#task_list_do").innerHTML = "";
  document.querySelector("#task_list_done").innerHTML = "";
  allTask.forEach(createTaskList);
}

function createTaskList(newTask) {
  const clone = document.querySelector("#template").content.cloneNode(true);

  clone.querySelector("article").id = newTask.id;
  clone.querySelector("[data-type=name]").textContent = newTask.name;
  clone.querySelector("[data-type=number]").textContent = newTask.number;

  const checkBox = clone.querySelector("[type=checkbox]");
  checkBox.checked = newTask.completed;
  checkBox.addEventListener("change", () => {
    newTask.completed = checkBox.checked;
    displayTask();
  });

  const deleteBtn = clone.querySelector(".exit");
  deleteBtn.addEventListener("click", () => {
    deleteTask(newTask.id);
  });

  if (checkBox.checked === true) {
    document.querySelector("#task_list_done").appendChild(clone);
  } else {
    document.querySelector("#task_list_do").appendChild(clone);
  }
}

// Lav unikt ID til hver list item der bliver oprettet, samt opret ny artikkiel for hver submit

function unikIDCode() {
  let unikID = self.crypto.randomUUID();
  return unikID;
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
tdListBtn.style.color = "var(--darkest-col)";

tdListBtn.addEventListener("click", () => {
  fListBtn.style.backgroundColor = "var(--btn-col)";
  fListBtn.style.color = "var(--lightest-col)";
  fList.classList.add("hide");
  tdListBtn.style.backgroundColor = "var(--background-col)";
  tdListBtn.style.color = "var(--darkest-col)";
  tdList.classList.remove("hide");
});

fListBtn.addEventListener("click", () => {
  fListBtn.style.backgroundColor = "var(--background-col)";
  fListBtn.style.color = "var(--darkest-col)";
  tdList.classList.add("hide");
  tdListBtn.style.backgroundColor = "var(--btn-col)";
  tdListBtn.style.color = "var(--lightest-col)";
  fList.classList.remove("hide");
});
