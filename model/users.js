let db = require('./db');
let _ = require('lodash');
let moment = require('moment');


module.exports = {

    getUserById: async function(id){
        console.log(`getUserById called with id: ${id}`);

        let userObject = await _.find(db.getUserDb(), {'Id': id});

        if(userObject){
            return {
                statusCode: 200,
                body: userObject
            }
        }else {
            return {
                statusCode: 404,
                body: {'message':'User not found'}
            }
        }
    },

    getUsersByAge: async function(age) {
        console.log(`getUsersByAge called with age: ${age}`);
        
        let users = _.filter(db.getUserDb(), user => {
            //Date constructor expects date to be in format MMDDYYYY, moment library is used to convert the format
            let dateMomentObject = moment(user.DOB, "DD/MM/YYYY");
            let birthDate = dateMomentObject.toDate();
            let today = new Date();
            let userAge = today.getFullYear() - birthDate.getFullYear();
            let m = today.getMonth() - birthDate.getMonth();
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
        const reg = new RegExp('^' + name, 'i');

        let users = _.filter(db.getUserDb(), user => {
            let namePatternArray = name.split(' ');
            //Check if it's a full name, then full match should be checked
            if(namePatternArray.length > 1){
                return name == user.Name
            }
            else if (namePatternArray[0].length > 2){
                let nameArray = user.Name.split(' ');
                return (reg.test(nameArray[0]) || reg.test(nameArray[1]));
            }

        });

        return users;

    },

    deleteUser: async function(id) {
        console.log(`deleteUser called with id: ${id}`);
        db.deleteUser(id);
        
        return;
    }
}