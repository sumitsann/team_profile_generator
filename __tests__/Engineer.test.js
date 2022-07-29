const Engineer = require("../lib/Engineer");

const engineer = new Engineer(
  "suman",
  "147184",
  "suman@gmail.com",
  "suman1005"
);

test("Test to get the values from Manager constructor", () => {
  expect(engineer.name).toBe("suman");
  expect(engineer.id).toBe("147184");

  expect(engineer.email).toBe("suman@gmail.com");
  expect(engineer.githubId).toBe("suman1005");
});

test("Test to get the name from getName function", () => {
  expect(engineer.getName()).toBe("suman");
});

test("Test to get the id from getId function", () => {
  expect(engineer.getId()).toBe("147184");
});

test("Test to get the email from getEmail function", () => {
  expect(engineer.getEmail()).toBe("suman@gmail.com");
});

test("Test to get the phone number from getPhone function", () => {
  expect(engineer.getGithubId()).toBe("github.com/suman1005");
});

test("Test to get the title from getTitle function", () => {
  expect(engineer.getTitle()).toBe("Engineer");
});
