const csvFilePath='data.csv'
const csv=require('csvtojson')
let userDB = [];

const loadUserDB = async() => {
  this.userDB = await csv().fromFile(csvFilePath);
  console.log(this.userDB[0]);
  return userDB; 
};

console.log(this.userDB[0]);

module.exports = {
  loadUserDB,
  userDB
}