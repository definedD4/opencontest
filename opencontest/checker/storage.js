const path = require("path");
const fs = require('fs');

function getFilePath(solutionId, lang) {
  return path.join("storage/solutions/", solutionId + "." + lang);
}

function saveSolution(solutionId, lang, source, cb) {  
  fs.writeFile(path.join(__dirname, "../", getFilePath(solutionId, lang)), source, cb); 
}


function removeSolution(solutionId, lang, cb) {
  fs.unlink(path.join(__dirname, "../", getFilePath(solutionId, lang)), cb);
}

module.exports = {
  getFilePath: getFilePath,
  saveSolution: saveSolution,
  removeSolution: removeSolution,
}