const generateHTML = (team) => {
  console.log(team);

  const html = [];

  const generateManagerHTML = (manager) => {
    console.log(manager);
    let managerHTML = `
    <div class="col-sm-4">
    <ul class="text-light bg-dark">
      <li class="text-primary">${manager.name}</li>
      <li class="text-secondary">${manager.id}</li>
      <li class="text-info">${manager.email}</li>
      <li class="text-info">${manager.phone}</li>
    </ul>
    </div>`;
    html.push(managerHTML);
  };

  const generateInternHTML = (intern) => {
    console.log(intern);
    let internHTML = `
    <div class="col-sm-4">
    <ul class="text-light bg-dark">
      <li class="text-primary">${intern.name}</li>
      <li class="text-info">${intern.id}</li>
      <li class="text-info">${intern.email}</li>
      <li class="text-info">${intern.school}</li>
    </ul>
    </div>`;
    html.push(internHTML);
  };

  const generateEngineerHTML = (engineer) => {
    console.log(engineer);
    let engineerHTML = `
    <div class="col-sm-4">
    <ul class="text-light bg-dark">
      <li class="text-primary">${engineer.name}</li>
      <li class="text-info">${engineer.id}</li>
      <li class="text-info">${engineer.email}</li>
      <li class="text-info">${engineer.githubId}</li>
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
