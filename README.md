# Employee-Payroll-Tracker

## User Story
As a payroll manager, I want an employee payroll tracker
so that I can see my employees' payroll data and properly budget for the company

## Acceptance Criteria
WHEN I click the "Add employee" button
THEN I am presented with a series of prompts asking for first name, last name, and salary
WHEN I finish adding an employee
THEN I am prompted to continue or cancel
WHEN I choose to continue
THEN I am prompted to add a new employee
WHEN I choose to cancel
THEN my employee data is displayed on the page sorted alphabetically by last name, and the console shows computed and aggregated data


## Additional Criteria
-collectEmployees: This function will allow a user to add multiple employees to display on the page.  The user will need to enter the first name, last name, and salary of each employee, then have the option to keep adding employees until they choose to stop. A while loop will be needed here (MDN Web Docs on while loops) The salary will need to be entered as a number, otherwise it should default to $0.  The isNaN function can help with this: (MDN Web Docs on isNaN) This function should return an array of objects, like the following example.  Reference the MDN Web Docs on return:
-displayAverageSalary: This function will take in the generated array of employees and log the average salary and number of employees to the console.  You should use a template literal string for this task.
-getRandomEmployee: This function will take in the generated array of employees, randomly select one employee, and use a template literal to log their full name to the console.  The built in Math object can help with random number generation: (MDN Web Docs on Math.random)

## ScreenShot
![Payroll-Tracker](<Screenshot 2024-03-21 171635-1.png>)


## Link to Deployed Application
https://github.com/CrystalC19/Employee-Payroll-Tracker.git
https://crystalc19.github.io/Employee-Payroll-Tracker/index.html




## Resources
Most of my knowledge for this project was from notes i took throught the class but mostly from the videos i added below

- A big help with my assignment was these videos https://youtu.be/lfmg-EJ8gm4?si=x33zKhgGIAUkaBOQ
                                                 https://youtu.be/K4Kh5gw4PRE?si=wamIH2nnUyePDiz1
- Template Literal String: https://javascript.plainenglish.io/template-literals-in-javascript-cf536890694a
- Math.Random: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

 