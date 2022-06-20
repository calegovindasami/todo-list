//Creates the elements for each project when loaded.
function loadProjects(projectsArray) {
  const projects = [];
  projects = projectsArray;

  const projectContainer = document.createElement("div");
  projectContainer.classList.add("project-container");

  projects.forEach((project) => {
    const projectEntity = document.createElement("div");
    const projectName = document.createElement("h1");
    projectName.classList.add("project-name");
    projectName.innerText = project.name;

    const btnDelete = document.createElement("button");
    btnDelete.classList.add("btnDelete");
    btnDelete.innerText = "X";

    projectEntity.appendChild(projectName);
    projectEntity.appendChild(btnDelete);
    projectContainer.appendChild(projectContainer);
  });
  return projectContainer;
}
