
// allows the use of computer file system through Node.js
const fs = require('fs');

//copy-paste function to pass in the url of the JSON game file
//this function goes through the process of reading the JSON file
//And then converting the JSON file to a Javascript Object for use
async function loadJSON(url, local) {
  if (local) {
    //const response = await fetch(url);
    console.log('get local JSON = ', local);
    // read local JSON...
    let localJSON = fs.readFileSync(url);           //Reading
    // parse string to object to be used in app...
    let response = JSON.parse(localJSON);           //Converting
    return response;
  } else {
    let response = 'remote URL passed...';
    return response;
  }

//
async function readJSON(url, local) {
  try {
    const readData = await loadJSON(url, local);    //awaits the promise from loadJSON
    return readData;
  } catch(err) {
    console.error(err);
  }
}

//writes data from JSON file
//goes through readJSON
//essentially separates the logic between loading and reading the JSON file
//to returning it as a Javascript Object
async function getJSON(url, local = false) {
  const writeData = await readJSON(url, local);
  return writeData;                             //writeData becomes the Javascript Object
}