const csvFilePath='data.csv'
const csv=require('csvtojson')
let userDB = [];

const loadUserDB = async() => {
    userDB =  await csv().fromFile(csvFilePath);
 };
 
 const getUserDb = () => {
   return userDB;
 }


module.exports = {
  loadUserDB,
  userDB,
  getUserDb
}