const fs = require("fs");

var rawData = fs.readFileSync('../data.json');
var users = JSON.parse(rawData)

var container = document.getElementById('out');

function forgotPassword() {
    var random_code = Math.round(Math.random()*1000000)
    console.log('    The code for verifying is: ' + random_code + '.')
    var code = readline.question('Enter the code we sent you to verify: ')
    verification(random_code, code)
}

function verification(random_code, code) {
    if (random_code == code) {
        console.log('Verification finished. You can now change your password.')
        console.log('-------------------------------------------------------')
        changePassword(players)
    } else {
        console.log('Incorrect code')
        var recieveCode_orNot = readline.question('Would you liek to recieve another code? Y/N: ')
        if (recieveCode_orNot.toLowerCase() == 'y') {
            forgotPassword()
        } else {
            console.log('Got it.')
        }
    }
}

function  changePassword(users) {
    var userName = readline.question('Enter your username: ')
    var new_password = readline.question('Enter your new password: ')
    for (var y=0; y<users.length; y++) {
        if (userName == users[y].userName) {
            users[y].password = new_password
            console.log('Successfully changed the password and you try logging in again.')
        } else {
            console.log('There are no users with this username!')
            changePassword(users)
        }
    }
}