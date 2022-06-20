import "./style.css";
import createForm from "./modules/project-form";
import "./StyleSheets/project-form.css";

let projectsArray = [];
let tasksArray = [];
let currentProjectTasks = [];

const addButton = document.getElementById("btnAdd");
const textbox = document.getElementById("textbox");
const container = document.getElementById("item-container");

InitialLoad();

function InitialLoad() {
  if (!localStorage.getItem("Projects")) {
    localStorage.setItem("Projects", JSON.stringify(projectsArray));
    localStorage.setItem("Tasks", JSON.stringify(tasksArray));
    console.log("Arrays saved.");
    return;
  }

  projectsArray = JSON.parse(localStorage.getItem("Projects"));
  tasksArray = JSON.parse(localStorage.getItem("Tasks"));
  console.log("Arrays loaded.");
}
addButton.onclick = () => {
  container.innerHTML = "";
  const projectName = textbox.value;
  container.appendChild(createForm(projectName));
};
