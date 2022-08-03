const headCode = () => {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Team Profile</title>
  </head>
  <body>`;
};

const managerBlock = function (data) {
  return `<div  
        <h1>${data.name}</h1>
        <hr>
        <h2><i class="fas fa-briefcase"></i> Manager</h2>
    </div>
    <div>
            <div>
                <p>ID: <span>${data.id}</span></p>
                <p>Email: <span>${data.email}</span></p>
                <p>Office Number: <span>${data.phone}</span></p>
            </div>
    </div>
    </div>`;
};

const internBlock = function (data) {
  return `<div  
        <h1>${data.name}</h1>
        <hr>
        <h2><i class="fas fa-briefcase"></i> Manager</h2>
    </div>
    <div>
            <div>
                <p>ID: <span>${data.id}</span></p>
                <p>Email: <span>${data.email}</span></p>
                <p>Office Number: <span>${data.school}</span></p>
            </div>
    </div>
    </div>`;
};

const engineerBlock = function (data) {
  return `<div  
        <h1>${data.name}</h1>
        <hr>
        <h2><i class="fas fa-briefcase"></i> Manager</h2>
    </div>
    <div>
            <div>
                <p>ID: <span>${data.id}</span></p>
                <p>Email: <span>${data.email}</span></p>
                <p>Office Number: <span>${data.githubId}</span></p>
            </div>
    </div>
    </div>`;
};

const footCode = () => {
  return `</body>
</html>`;
};

module.exports = {
  manager: managerBlock,
  engineer: engineerBlock,
  intern: internBlock,
  headCode: headCode,
  footCode: footCode,
};
