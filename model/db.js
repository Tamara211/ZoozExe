const csvFilePath='data.csv'
const csv=require('csvtojson')
let userDB = [];

const loadUserDB = async() => {
    userDB =  await csv().fromFile(csvFilePath);
 };
 
 const getUserDb = () => {
   return userDB;
 }

 let deleteUser = (id) => {
    userDB = userDB.filter((el) => {
        return el.Id !== id;
      });
 }

module.exports = {
  loadUserDB,
  userDB,
  getUserDb,
  deleteUser
}