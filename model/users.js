let db = require('./db');
let _ = require('lodash');
let moment = require('moment');


module.exports = {

    getUserById: async function(id){
        console.log(`getUserById called with id: ${id}`);
        let userObject = await _.find(db.getUserDb(), 'Id', id);
        return userObject;
    },

    getUsersByAge: async function(age) {
        console.log(`getUsersByAge called with age: ${age}`);
        
        let users = _.filter(db.getUserDb(), user => {
            //Date constructor expect date to be in format MMDDYYYY, moment library is used to convert the format
            var dateMomentObject = moment(user.DOB, "DD/MM/YYYY");
            var birthDate = dateMomentObject.toDate();
            var today = new Date();
            var userAge = today.getFullYear() - birthDate.getFullYear();
            var m = today.getMonth() - birthDate.getMonth();
            if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                userAge--;
            }
            return userAge == age;
        });
         return users;
    },

    getUsersByCountry: async function(country) {
        console.log(`getUsersByCountry called with country: ${country}`);
        let users = _.filter(db.getUserDb(), user => {
            return user.Country === country;
        });
         return users;
    },

    getUsersByName: async function(name) {
        console.log(`searchUsersByName called with name: ${name}`);
        
        // Add implementation here
        
        return [];
    },

    deleteUser: async function(id) {
        console.log(`deleteUser called with id: ${id}`);
        db.deleteUser(id);
        
        return;
    }
}