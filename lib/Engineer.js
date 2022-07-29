const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, githubId) {
    super(name, id, email);
    this.githubId = githubId;
  }

  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  getGithubId() {
    return "github.com/" + this.githubId;
  }

  getTitle() {
    return "Engineer";
  }
}

module.exports = Engineer;
