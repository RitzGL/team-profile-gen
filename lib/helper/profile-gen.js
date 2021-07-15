const fs = require("fs");
const { join } = require("path");
// first - read template file
function readFile() {
  console.log("We are running!");
  return fs.readFileSync(
    join(__dirname, "..", "..", "dist", "index.html"),
    "utf8"
  );
}

// A function to replace a template from a source with the employeeCard
function parseTemplate(source, template, employeeCard) {
  return source.replace(template, employeeCard);
}

// create an engineer card with engineer attributes
function createEngineerCard(engineer) {
  return `<section>
    <div class="card">
      <div class="card-heading">
        <h3>${engineer.name}</h3>
        <h3>${engineer.getRole()}</h3>
      </div>
      <div>
        <ul>
          <li>ID: ${engineer.id}</li>
          <li><a href="mailto:${engineer.email}">Email</a></li>
          <li>GitHub: ${engineer.getGitHubName()}</li>
        </ul>
      </div>
    </div>
  </section>`;
}

// create a manager card with manager properties
function createManagerCard(manager) {
  return `<section>
    <div class="card">
      <div class="card-heading">
        <h3>${manager.name}</h3>
        <h3>${manager.getRole()}</h3>
      </div>
      <div>
        <ul>
          <li>ID: ${manager.id}</li>
          <li><a href="mailto:${manager.email}">Email</a></li>
          <li>Office Number: ${manager.officeNumber}</li>
        </ul>
      </div>
    </div>
  </section>
  `;
}

// create a manager card with intern properties
function createInternCard(intern) {
  return `<section>
    <div class="card">
      <div class="card-heading">
        <h3>${intern.name}</h3>
        <h3>${intern.getRole()}</h3>
      </div>
      <div>
        <ul>
          <li>ID: ${intern.id}</li>
          <li><a href="mailto:${intern.email}">Email</a></li>
          <li>School: ${intern.school}</li>
        </ul>
      </div>
    </div>
  </section>
  `;
}

// create all the cards relevant to typeof employee
function createCards(employees) {
  let cards = ``;
  employees.forEach((employee) => {
    let type = employee.getRole();
    switch (type) {
      case "Engineer":
        cards = cards.concat(createEngineerCard(employee));
        break;
      case "Manager":
        cards = cards.concat(createManagerCard(employee));
        break;
      case "Intern":
        cards = cards.concat(createInternCard(employee));
        break;
      default:
        break;
    }
  });

  return cards;
}

function writeHTMLtoFile(html) {
  fs.writeFileSync("./dist/newIndex.html", html);
}

function buildHTML(employees) {
  let buffer = readFile();
  let cards = createCards(employees);
  let parsed = parseTemplate(buffer, "{{ body }}", cards);
  writeHTMLtoFile(parsed);
}
module.exports = buildHTML;
