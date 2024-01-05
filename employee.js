const tbody = document.querySelector("tbody");
const form = document.querySelector("form");
const submitButton = document.querySelector("form > button");
// const employeesList = [];

function deleteRecord(event) {
    const buttonRef = event.target;
    const row = buttonRef.parentNode.parentNode;
    row.remove();
}

function addEmployee(employee) {
    // employeesList.push(employee);

    const tr = document.createElement("tr");
    for (const key in employee) {
        const td = document.createElement("td");
        td.innerText = employee[key];
        tr.appendChild(td);
    }

    const options = document.createElement("td");
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "delete";

    const editButton = document.createElement("button");
    editButton.innerText = "edit";
    editButton.addEventListener("click", onEditClick);

    deleteButton.addEventListener("click", deleteRecord);

    options.appendChild(deleteButton);
    options.appendChild(editButton);

    tr.appendChild(options);
    tbody.appendChild(tr);
}

function onSubmitForm(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    const employeeData = {};
    formData.forEach((value, key) => {
        employeeData[key] = value;
    });


  if(editOptions.isEditing) {
    editEmployee(employeeData)
  } else {
    addEmployee(employeeData);
  }
   
    form.reset();
   
}

form.addEventListener("submit", onSubmitForm);
