// tema switcher fordi det lækkert at brugeren kan "costomize" deres personlige to do liste

const temaSwitch = document.querySelector(".tema");

temaSwitch.addEventListener("change", (event) => {
  let nyValue = event.target.value;
  console.log(nyValue);
  document.querySelector("body").dataset.theme = nyValue;
});

// knapper i venstre side af big grid skal skifte mellem visning af brugerens to do liste og de færdige opgaver

const todoListBtn = document.querySelector("#todo_list");
const finishedTodoBtn = document.querySelector("#finished_todo");
const newTaskBtn = document.querySelector("#new_task_button");

todoListBtn.addEventListener("click", () => {
  finishedTodoBtn.style.backgroundColor = "var(--btn-col)";
  todoListBtn.style.backgroundColor = "var(--background-col)";
  newTaskBtn.classList.remove("hide");
});

finishedTodoBtn.addEventListener("click", () => {
  todoListBtn.style.backgroundColor = "var(--btn-col)";
  finishedTodoBtn.style.backgroundColor = "var(--background-col)";
  newTaskBtn.classList.add("hide");
});

// Ny opgave knap skal åbne pop up vindue hvor bruger kan udfylde informationer

const popUpElement = document.querySelector("#pop_up");

newTaskBtn.addEventListener("click", () => {
  popUpElement.classList.remove("hide");
});

// Ved pop up element skal baggrunden hvis muligt formørkes så den ikke forstyre det visuelle i pop uppen

// Tilføj delelement skal gøre det muligt for bruger at putte flere delelementer på sin opgave liste

// Kryds skal lukke pop up hvis bruger ikke ønsker at lave ny opgave alligevel

const crossCloseBtn = document.querySelector("#cross_for_close");

crossCloseBtn.addEventListener("click", () => {
  popUpElement.classList.add("hide");
});

// Tilføj opgave knap skal tilføje alt information fra pop op input boxes, til en ny article (opgave)

const submitNewTaskBtn = document.querySelector("#submit_new_task");

submitNewTaskBtn.addEventListener("click", () => {
  popUpElement.classList.add("hide");
  let taskName = document.querySelector("#assignment_name").value;
  let taskDescription = document.querySelector("#assignment_description").value;
  createNewDomElement(taskName, taskDescription);
});

function createNewDomElement(taskName, taskDescription) {
  const templateClone = document
    .querySelector("#new_task")
    .content.cloneNode(true);
  templateClone.querySelector("article").id = unikIDForArticle();
  templateClone.querySelector("[data-type=task_name").textContent = taskName;
  templateClone.querySelector("[data-type=discription").textContent =
    taskDescription;
  document.querySelector("#todo_list_item").appendChild(templateClone);
}

// Lav unikt ID til hver articel der bliver oprettet, samt opret ny artikkiel for hver submit

function unikIDForArticle() {
  let unikID = self.crypto.randomUUID();
  return unikID;
}

// Store tjek tegns box skal fjerne opgaven fra to do til færdige opgaver og omvendt

// Stor skraldespands icon skal fjerne opgaver permanent

// Lille tjek tegn skal bare krydse delelementer af som gjort

// Lille skraldespand skal fjerne fjerne enkelte delelment i den samlede opgave
