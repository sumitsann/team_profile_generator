const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const fs = require("fs");
const generateHTML = require("./src/generateHTML");
const path = require("path");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

let projectMembers = [];

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
};

const promptIntern = () => {
  console.log("Adding a new intern");
  return inquirer
    .prompt([
      {
        type: "input",
        message: "What is the id of the intern?",
        name: "internID",
        validate: (internID) => {
          if (internID) {
            return true;
          } else {
            console.log("Please enter the intern ID");
            return false;
          }
        },
      },
      {
        type: "input",
        message: "What is the name of the intern?",
        name: "internName",
        validate: (internName) => {
          if (internName) {
            return true;
          } else {
            console.log("Please enter a name");
            return false;
          }
        },
      },
      {
        type: "input",
        message: "What is the email of the intern?",
        name: "internEmail",
        validate: (internEmail) => {
          if (internEmail) {
            return true;
          } else {
            console.log("Please enter the email address");
            return false;
          }
        },
      },
      {
        type: "input",
        message: "What is the school of the intern?",
        name: "internSchool",
        validate: (internSchool) => {
          if (internSchool) {
            return true;
          } else {
            console.log("Please enter the school");
            return false;
          }
        },
      },
    ])
    .then((answers) => {
      console.log(answers);
      const intern = new Intern(
        answers.internName,
        answers.internID,
        answers.internEmail,
        answers.internSchool
      );

      console.log("Lets get the info about the team members now.");
      projectMembers.push(intern);

      promptTeamMembers();
    });
};

const promptEngineer = () => {
  console.log("Adding a new engineer");
  return inquirer
    .prompt([
      {
        type: "input",
        message: "What is the id of the engineer?",
        name: "engineerID",
        validate: (engineerID) => {
          if (engineerID) {
            return true;
          } else {
            console.log("Please enter the engineerID");
            return false;
          }
        },
      },
      {
        type: "input",
        message: "What is the name of the engineer?",
        name: "engineerName",
        validate: (engineerName) => {
          if (engineerName) {
            return true;
          } else {
            console.log("Please enter a name");
            return false;
          }
        },
      },
      {
        type: "input",
        message: "What is the email of the engineer?",
        name: "engineerEmail",
        validate: (engineerEmail) => {
          if (engineerEmail) {
            return true;
          } else {
            console.log("Please enter the email address");
            return false;
          }
        },
      },
      {
        type: "input",
        message: "What is the github of the engineer?",
        name: "engineerGithub",
        validate: (engineerGithub) => {
          if (engineerGithub) {
            return true;
          } else {
            console.log("Please enter the engineerGithub");
            return false;
          }
        },
      },
    ])
    .then((answers) => {
      console.log(answers);
      const engineer = new Engineer(
        answers.engineerName,
        answers.engineerID,
        answers.engineerEmail,
        answers.engineerGithub
      );

      projectMembers.push(engineer);

      promptTeamMembers();
    });
};

const buildTeam = () => {
  console.log("FINISHED WITH BUILDING THE TEAM");

  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR);
  }
  fs.writeFileSync(outputPath, generateHTML(projectMembers), "utf-8");
};

getManagerInfo();
