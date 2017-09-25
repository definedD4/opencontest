const child_process = require('child_process');
const path = require('path');

export function executeSolution(filename, inputFile, outputFile) {
  var spawn = child_process.spawn;
  var py = spawn('python', [
    path.join(__dirname, "../sanbox/sanbox.py"),
    path.join(__dirname, "../storage/solutions/", filename),
    "--console"
  ]),   
}