import "./style.css";
import { createForm } from "./modules/project-form";
import { loadProjects } from "./modules/project";
import "./StyleSheets/project-form.css";
import "./StyleSheets/projects.css";

let projectsArray = [];
let tasksArray = [];
let currentProjectTasks = [];

const addButton = document.getElementById("btnAdd");
const textbox = document.getElementById("textbox");
const container = document.getElementById("item-container");

InitialLoad();
container.appendChild(loadProjects(projectsArray));

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
  const btnBack = document.getElementById("btnBack");
  addProject();
  returnHome(btnBack, container);
};

function returnHome(btn, container) {
  btn.onclick = () => {
    container.innerHTML = "";
    console.log("CLEARED CONTAINER.");
    textbox.value = "";
  };
}

function addProject() {
  const btnProject = document.getElementById("btnProject");
  const description = document.getElementById("desc");
  const date = document.getElementById("date");
  const priority = document.getElementById("dropdown");
  btnProject.onclick = () => {
    const objProject = {
      name: textbox.value,
      description: description.value,
      date: date.value,
      priority: priority.value,
    };
    projectsArray.push(objProject);
    localStorage.setItem("Projects", JSON.stringify(projectsArray));
    projectsArray = JSON.parse(localStorage.getItem("Projects"));

    let projectTaskArray = [];
    tasksArray.push(projectTaskArray);
    localStorage.setItem("Tasks", JSON.stringify(tasksArray));
    tasksArray = JSON.parse(localStorage.getItem("Tasks"));
    container.innerHTML = "";
    container.appendChild(loadProjects(projectsArray));
  };
}
