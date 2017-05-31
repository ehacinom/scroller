const Sequelize = require('sequelize');
const db = require('./db');

const User = db.define('user', {
    email : {
        type : Sequelize.STRING,
        allowNull : false,
        validate : {
            isEmail : true
        }
    },
    password : {
        type : Sequelize.STRING,
        allowNull : false,
    },
    firstName : {
        type : Sequelize.STRING,
        defaultValue : ''
    },
    lastName : {
        type : Sequelize.STRING,
        defaultValue : ''
    },
    photo : {
        type : Sequelize.STRING,
        defaultValue : '/static/images/defaultUser.jpg'
    },
    admin : {
        type: Sequelize.BOOLEAN,
        defaultValue : false
    },
    googleId : Sequelize.STRING,
    githubId : Sequelize.STRING,
    twitterId : Sequelize.STRING,
}, {
    getterMethods : {
        name () {
            return this.firstName + ' ' + this.lastName;
        }
    },
    
    setterMethods : {
        name (str) {
            const names = str.split(' ');
            this.setDataValue('firstName', names.slice(0, 1));
            this.setDataValue('lastName', names.slice(1).join(' '))
        }
    }, 
    
    instanceMethods : {
        verifyPassword (input) {
            if (input === this.password) return true;
            return false;
        }
    }
})

module.exports = User;