//const db = require('./db');
let _ = require('lodash')
var json = require('./db').userDB;


module.exports = {

    getUserById: async function(id){
        console.log(`getUserById called with id: ${id}`);
        let userObject = await _.find(json, 'Id', id);
        console.log(json[0]);
        return userObject;
    },

    getUsersByAge: async function(age) {
        console.log(`getUsersByAge called with age: ${age}`);
        
        // Add implementation here
        
        return [];
    },

    getUsersByCountry: async function(country) {
        console.log(`getUsersByCountry called with country: ${country}`);

        for(let i=0; i<json.length;i++){
            console.log(json[i]);
        }
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