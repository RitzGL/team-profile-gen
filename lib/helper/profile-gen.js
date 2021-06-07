const fs = require('fs');
const { join } = require('path');
// first - read template file
function readFile(){
    console.log("We are running!")
    return fs.readFileSync(join(__dirname, "..","..","dist","index.html"), 'utf8')
}

function parseTemplate(source,template,employeeCard){
    return source.replace(template, employeeCard);
}

function buildHTML(employees){
    let buffer = readFile();
    let parsed = parseTemplate(buffer,'{{ body }}', 'ABCDE')
    console.log(parsed);
}
module.exports = buildHTML;
// second - replace template with input
// third - output the final value 