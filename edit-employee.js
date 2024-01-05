let editOptions = {
    isEditing: false,
    rowElement: null
}

function onEditClick(event) {
    const row = event.target.parentNode.parentNode;
    const cells = row.querySelectorAll("td");

    const employeeInfo = {
        name: cells[0].innerText,
        email: cells[1].innerText,
        salary: cells[2].innerText,
        companyName: cells[3].innerText,
        gender: cells[4].innerText,
        role: cells[5].innerText
    };

    preFillForm(employeeInfo);

      editOptions = {
        isEditing: true,
        rowElement: row
      };
      submitButton.innerText = "update";
}

function preFillForm(employee)  {
    form.elements.name.value = employee.name;
    form.elements.email.value = employee.email;
    form.elements.salary.value = employee.salary;
    form.elements.companyName.value = employee.companyName;
    form.elements.gender.value = employee.gender;
    form.elements.role.value = employee.role;
}

function editEmployee(employee) {
    const rowElement = editOptions.rowElement;
    let cells = rowElement.querySelectorAll("td");
    cells[0].innerText = employee.name;
    cells[1].innerText = employee.email;
    cells[2].innerText = employee.salary;
    cells[3].innerText = employee.companyName;
    cells[4].innerText = employee.gender;
    cells[5].innerText = employee.role;


    submitButton.innerText = "Add Employee";

    editOptions = {
        isEditing: false,
        rowElement: null
      }
}



 
