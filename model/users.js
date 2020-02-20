let db = require('./db');
let _ = require('lodash');


module.exports = {

    getUserById: async function(id){
        console.log(`getUserById called with id: ${id}`);
        let userObject = await _.find(db.getUserDb(), 'Id', id);
        return userObject;
    },

    getUsersByAge: async function(age) {
        console.log(`getUsersByAge called with age: ${age}`);
        
        // Add implementation here
        
        return [];
    },

    getUsersByCountry: async function(country) {
        console.log(`getUsersByCountry called with country: ${country}`);
        let users = _.filter(db.getUserDb(), user => {
            return user.Country === country
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
        // Add implementation here
        
        return;
    }
}