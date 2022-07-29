const Manager = require("../lib/Manager");

const manager = new Manager("suman", "147184", "suman@gmail.com", "1234567890");

test("Test to get the values from Manager constructor", () => {
  expect(manager.name).toBe("suman");
  expect(manager.id).toBe("147184");

  expect(manager.email).toBe("suman@gmail.com");
  expect(manager.phone).toBe("1234567890");
});

test("Test to get the name from getName function", () => {
  expect(manager.getName()).toBe("suman");
});

test("Test to get the id from getId function", () => {
  expect(manager.getId()).toBe("147184");
});

test("Test to get the email from getEmail function", () => {
  expect(manager.getEmail()).toBe("suman@gmail.com");
});

test("Test to get the phone number from getPhone function", () => {
  expect(manager.getPhone()).toBe("1234567890");
});

test("Test to get the title from getTitle function", () => {
  expect(manager.getTitle()).toBe("Manager");
});
