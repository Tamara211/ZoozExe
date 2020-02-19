const fs = require('fs');
const csv=require('csvtojson');

const json = [];

module.exports = {
    init : function(){
        csv()
        .fromFile("data.csv")
        .then((jsonObj)=>{
            json.push(jsonObj);
    
        })
    },

    getUserById: async function(id){
        console.log(`getUserById called with id: ${id}`);
        var result = json.filter(x => x.Id == id);
        console.log(result);
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