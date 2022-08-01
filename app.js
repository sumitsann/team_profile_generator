const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const fs = require("fs");
const htmlTemplate = require("./src/htmlTemplate");

let projectMembers = [];
let manager;
let projectTitle;

function managerInfo() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the name of this project?",
        name: "projectTitle",
      },
      {
        type: "input",
        message: "What is the name of the manager?",
        name: "managerName",
      },
      {
        type: "input",
        message: "What is the id of the manager?",
        name: "managerID",
      },
      {
        type: "input",
        message: "What is the email of the manager?",
        name: "managerEmail",
      },
      {
        type: "input",
        message: "What is the phone number of the manager?",
        name: "managerPhone",
      },
    ])
    .then((managerAns) => {
      manager = new Manager(
        managerAns.managerName,
        managerAns.managerID,
        managerAns.managerEmail,
        managerAns.managerPhone
      );
      projectTitle = managerAns.projectTitle;
      console.log("Lets get the info about the team members now.");
      projectMembers.push(manager);

      teamMembersData();
    });
}
function teamMembersData() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "What is the role of the employee?",
        name: "employeeRole",
        choices: ["Intern", "Engineer", "I am done"],
      },
    ])
    .then((teamAns) => {
      if (teamAns.employeeRole === "Intern") {
        return inquirer
          .prompt([
            {
              type: "input",
              message: "What is the name of the intern?",
              name: "internName",
            },
            {
              type: "input",
              message: "What is the ID of the intern?",
              name: "internID",
            },
            {
              type: "input",
              message: "What is the email of the intern?",
              name: "internEmail",
            },
            {
              type: "input",
              message: "What is the school of the intern?",
              name: "internSchool",
            },
          ])
          .then((internAns) => {
            let intern = new Intern(
              internAns.internName,
              internAns.internID,
              internAns.internEmail,
              internAns.internSchool
            );
            projectMembers.push(intern);
            teamMembersData();
          });
      } else if (teamAns.employeeRole === "Engineer") {
        return inquirer
          .prompt([
            {
              type: "input",
              message: "What is the name of the engineer?",
              name: "engineerName",
            },
            {
              type: "input",
              message: "What is the ID of the intern?",
              name: "engineerID",
            },
            {
              type: "input",
              message: "What is the email of the email?",
              name: "engineerEmail",
            },
            {
              type: "input",
              message: "What is the github of the engineer?",
              name: "engineerGithub",
            },
          ])
          .then((engineerAns) => {
            let engineer = new Engineer(
              engineerAns.engineerName,
              engineerAns.engineerID,
              engineerAns.engineerEmail,
              engineerAns.engineerGithub
            );
            projectMembers.push(engineer);

            teamMembersData();
          });
      } else if (teamAns.employeeRole === "I am done") {
        console.log("Thank you. The team profile is generating");
        console.log(projectTitle);
        console.log(projectMembers);
      }
    });
}

managerInfo();
