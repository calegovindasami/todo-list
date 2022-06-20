//Creates form to allow the user to input their project details.
function createForm(projectName) {
  const form = document.createElement("div");
  form.classList.add("project-form");
  const label = document.createElement("h3");
  label.innerText = projectName;

  const description = document.createElement("textarea");
  description.setAttribute("id", "desc");
  const dueDate = document.createElement("input");
  dueDate.type = "date";
  dueDate.setAttribute("id", "date");

  const priority = document.createElement("select");
  priority.setAttribute("id", "dropdown");

  const low = document.createElement("option");
  low.innerText = "Low";
  low.value = "Low";
  const medium = document.createElement("option");
  medium.innerText = "Medium";
  medium.value = "Medium";
  const high = document.createElement("option");
  high.innerText = "High";
  high.value = "High";

  const submit = document.createElement("button");
  submit.setAttribute("id", "btnProject");
  submit.innerText = "SUBMIT";

  const goBack = document.createElement("button");
  goBack.setAttribute("id", "btnBack");
  goBack.innerText = "RETURN";

  const btnGroup = document.createElement("div");
  btnGroup.classList.add("btnGroup");
  btnGroup.appendChild(submit);
  btnGroup.appendChild(goBack);

  priority.appendChild(low);
  priority.appendChild(medium);
  priority.appendChild(high);

  form.appendChild(label);
  form.appendChild(description);
  form.appendChild(dueDate);
  form.appendChild(priority);
  form.appendChild(btnGroup);

  return form;
}

export { createForm };
