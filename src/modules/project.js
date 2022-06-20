//Creates the elements for each project when loaded.
function loadProjects(projectsArray) {
  let projects = [];
  projects = projectsArray;

  const projectContainer = document.createElement("div");
  projectContainer.classList.add("project-container");

  projects.forEach((project) => {
    const projectEntity = document.createElement("div");
    projectEntity.classList.add("project-entity");
    const projectName = document.createElement("h3");
    projectName.classList.add("project-name");
    projectName.innerText = project.name;

    const projectDate = document.createElement("h4");
    projectDate.innerText = project.date;

    const btnDelete = document.createElement("button");
    btnDelete.classList.add("btnDelete");
    btnDelete.innerText = "X";

    projectEntity.classList.add(project.priority);

    projectEntity.appendChild(projectName);
    projectEntity.appendChild(projectDate);
    projectEntity.appendChild(btnDelete);
    projectContainer.appendChild(projectEntity);
    console.log("Loaded");
  });
  return projectContainer;
}

export { loadProjects };
