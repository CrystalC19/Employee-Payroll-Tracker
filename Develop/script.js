// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
let employeesArray= [];
let addingMoreEmployees= "Yes";


// Collect employee data
const collectEmployees = function() {

  //While loop added 

  while (addingMoreEmployees === "Yes"){
 let firstNameInput;prompt (`Enter First Name`)
let lastNameInput;
let salaryInput= 0;
const employeeData={
  firstName: ``,
  lastName: ``,
  salary: 0,
};

// Starting If Statements with alerts and isNAN
console.log (isNaN(firstNameInput));
if (!isNaN(firstNameInput)){
  alert (`Alphabetical Character Only`);
} else {employeeData.firstName=firstNameInput;
  lastNameInput= prompt (`Enter Last Name`);

}
if(!isNaN(lastNameInput)){ 
  alert (`Alphabetical Character Only`);
}else {employeeData.lastName=lastNameInput;
  salaryInput = prompt (`Enter Your Salary`);
}
if (isNaN(salaryInput)){
alert(`Please Enter Numerical Values`); }
else{
  employeeData.salary=salaryInput;
}

console.log (employeeData);

  
  // pushing an array
  employeesArray.push(employeeData);


  addingMoreEmployees =prompt(`Continue adding employees? Yes/No`);

  if (addingMoreEmployees !== `Yes` && addingMoreEmployees !== `No`) {
    alert(`Please enter Yes or No`)
  }

}
}
collectEmployees()

// Display the average salary
//Using Template literals

const displayAverageSalary = function(employeesArray) {
  function avg (salaryInput, salary){
    return(salaryInput + salary)/2;
  }
  console.log (`The Average Salary is ${avg(salaryInput, salary)}`);



}

// Select a random employee
// Using Math. Random
const getRandomEmployee = function(employeesArray) {
function getRandom(max){
  return Math.floor(Math.random() * Max)
}
console.log(getRandom())
console.log(Math.random())
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);