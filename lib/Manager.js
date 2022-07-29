const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, phone) {
    super(name, id, email);
    this.phone = phone;
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
  getPhone() {
    return this.phone;
  }

  getTitle() {
    return "Manager";
  }
}

module.exports = Manager;
