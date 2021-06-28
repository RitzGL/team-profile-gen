const fs = require('fs');
const { join } = require('path');
// first - read template file
function readFile(){
    console.log("We are running!")
    return fs.readFileSync(join(__dirname, "..","..","dist","index.html"), 'utf8')
}

// A function to replace a template from a source with the employeeCard
function parseTemplate(source,template,employeeCard){
    return source.replace(template, employeeCard);
}

function buildHTML(employees){
    // read html to be parsed with new buffer
    let buffer = readFile();
    // parse the tamplate with given 'employeeCard' ('ABCDE') in this case.
    // '{{ body }}' will be replaced with ABCDE
    let parsed = parseTemplate(buffer,'{{ body }}', 'ABCDE')
    console.log(parsed);
}
module.exports = buildHTML;
// second - replace template with input
// third - output the final value 