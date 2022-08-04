const generateHTML = (team) => {
  console.log(team);

  const html = [];

  const generateManagerHTML = (manager) => {
    console.log(manager);
    let managerHTML = `
    <div class="col-sm-4">
    <ul class="text-light bg-dark">
      <li>🍵 Manager</li>
      <li class="text-primary">NAME: ${manager.name}</li>
      <li class="text-secondary">ID: ${manager.id}</li>
      <li class="text-info">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
      <li class="text-info">Phone: ${manager.phone}</li>
    </ul>
    </div>`;
    html.push(managerHTML);
  };

  const generateInternHTML = (intern) => {
    console.log(intern);
    let internHTML = `
    <div class="col-sm-4">
    <ul class="text-light bg-dark">
      <li> 🎓 Intern</li>
      <li class="text-primary">Name: ${intern.name}</li>
      <li class="text-info">ID: ${intern.id}</li>
      <li class="text-info">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
      <li class="text-info">School: ${intern.school}</li>
    </ul>
    </div>`;
    html.push(internHTML);
  };

  const generateEngineerHTML = (engineer) => {
    console.log(engineer);
    let engineerHTML = `
    <div class="col-sm-4">
    <ul class="text-light bg-dark">
      <li> ✍ Engineer</li>
      <li class="text-primary">Name: ${engineer.name}</li>
      <li class="text-info">ID: ${engineer.id}</li>
      <li class="text-info">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
      <li class="text-info">Github: <a href="https://www.github.com/${engineer.githubId}" target="_blank">${engineer.githubId}</a></li>
    </ul>
    </div>`;
    html.push(engineerHTML);
  };

  for (let i = 0; i < team.length; i++) {
    if (team[i].getTitle() === "Manager") {
      generateManagerHTML(team[i]);
    }
    if (team[i].getTitle() === "Intern") {
      generateInternHTML(team[i]);
    }
    if (team[i].getTitle() === "Engineer") {
      generateEngineerHTML(team[i]);
    }
  }

  return html.join("");
};

module.exports = (team) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"
    />
    <link rel="stylesheet" href="style.css">


    <title>Team Profiles</title>
  </head>
  <body>
  <h1> Team members </h1>
    <div class="container">
      <div class="row">
        ${generateHTML(team)}
      </div>
    </div>
  </body>
</html>

  `;
};
