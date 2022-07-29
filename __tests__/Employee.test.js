const Employee = require("../lib/Employee");

const employee = new Employee("suman", "147184", "suman@gmail.com");

test("Test to get the values from Employee constructor", () => {
  expect(employee.name).toBe("suman");
  expect(employee.id).toBe("147184");

  expect(employee.email).toBe("suman@gmail.com");
});

test("Test to get the name from getName function", () => {
  expect(employee.getName()).toBe("suman");
});

test("Test to get the id from getId function", () => {
  expect(employee.getId()).toBe("147184");
});

test("Test to get the email from getEmail function", () => {
  expect(employee.getEmail()).toBe("suman@gmail.com");
});

test("Test to get the title from getTitle function", () => {
  expect(employee.getTitle()).toBe("Employee");
});
