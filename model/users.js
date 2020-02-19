const csv = require('fast-csv');
const fs = require('fs');


module.exports = {
    getUserById: async function(id){
        console.log(`getUserById called with id: ${id}`);
        
        const fileStream = fs.createReadStream("data.csv");
        const parser = csv.parse();
        
        fileStream
            .pipe(parser)
            .on('error', error => console.error(error))
            .on('readable', () => {
               for (let row = parser.read(); row; row = parser.read()) {
                    if(row[0] == id){
                        console.log("found");
                        return JSON.stringify(row);
                    }
                }
            })
            .on('end', (rowCount) => console.log(`Parsed ${rowCount} rows`));

    },

    getUsersByAge: async function(age) {
        console.log(`getUsersByAge called with age: ${age}`);
        
        // Add implementation here
        
        return [];
    },

    getUsersByCountry: async function(country) {
        console.log(`getUsersByCountry called with country: ${country}`);
        
        // Add implementation here
        
        return [];
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