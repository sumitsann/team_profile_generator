const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const fs = require("fs");
const generateHTML = require("./src/htmlTemplate");
const path = require("path");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

let projectMembers = [];
let manager;
let projectTitle;

const getManagerInfo = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        message: "What is the id of the manager?",
        name: "managerID",
        validate: (managerID) => {
          if (managerID) {
            return true;
          } else {
            console.log("Please enter the manager ID");
            return false;
          }
        },
      },
      {
        type: "input",
        message: "What is the name of the manager?",
        name: "managerName",
        validate: (managerName) => {
          if (managerName) {
            return true;
          } else {
            console.log("Please enter a name");
            return false;
          }
        },
      },
      {
        type: "input",
        message: "What is the email of the manager?",
        name: "managerEmail",
        validate: (managerEmail) => {
          if (managerEmail) {
            return true;
          } else {
            console.log("Please enter the email address");
            return false;
          }
        },
      },
      {
        type: "input",
        message: "What is the phone number of the manager?",
        name: "managerPhone",
        validate: (managerPhone) => {
          if (managerPhone) {
            return true;
          } else {
            console.log("Please enter the manager phone");
            return false;
          }
        },
      },
    ])
    .then((answers) => {
      console.log(answers);
      const manager = new Manager(
        answers.managerName,
        answers.managerID,
        answers.managerEmail,
        answers.managerPhone
      );

      console.log("Lets get the info about the team members now.");
      projectMembers.push(manager);

      promptTeamMembers();
    });
};
const promptTeamMembers = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        message: "What is the role of the employee?",
        name: "employeeRole",
        choices: ["Intern", "Engineer", "I am done"],
      },
    ])
    .then((teamAns) => {
      switch (teamAns.employeeRole) {
        case "Intern":
          promptIntern();
          break;
        case "Engineer":
          promptEngineer();
          break;
        default:
          buildTeam();
      }
    });
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
        generateHTML(projectMembers);
      }
    });
};

function generateHTML() {
  return managerInfo((answers) => {
    console.log("Answers: ", answers);
  });
}

generateHTML();
