const Intern = require("../lib/Intern");

const intern = new Intern("suman", "147184", "suman@gmail.com", "texas a&m");

test("Test to get the values from Manager constructor", () => {
  expect(intern.name).toBe("suman");
  expect(intern.id).toBe("147184");

  expect(intern.email).toBe("suman@gmail.com");
  expect(intern.school).toBe("texas a&m");
});

test("Test to get the name from getName function", () => {
  expect(intern.getName()).toBe("suman");
});

test("Test to get the id from getId function", () => {
  expect(intern.getId()).toBe("147184");
});

test("Test to get the email from getEmail function", () => {
  expect(intern.getEmail()).toBe("suman@gmail.com");
});

test("Test to get the phone number from getPhone function", () => {
  expect(intern.getSchool()).toBe("texas a&m");
});

test("Test to get the title from getTitle function", () => {
  expect(intern.getTitle()).toBe("Intern");
});
