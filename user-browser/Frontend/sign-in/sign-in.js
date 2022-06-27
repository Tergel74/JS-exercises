const fs = require("fs");

var rawData = fs.readFileSync('../data.json');
var users = JSON.parse(rawData)

var container = document.getElementById('out');

function signIn(users) {
    var userName = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    for (var i = 0; i<users.length; i++) {
        if (users[i].userName == userName) {
            if (users[i].isBanned == true) {
                container.innerHTML = 'You are Banned! You cannot log in!'
            } else {
                if (users[i].password == password) {
                    container.innerHTML = 'Successfully logged in.'
                } else {
                    while (users[i].password != password || users[i].pass_attempts!=3) {
                        container.innerHTML = 'Incorrect password!'
                        users[i].pass_attempts += 1
                        if (users[i].pass_attempts >= 3) {
                            users[i].isBanned = true;
                            container.innerHTML = 'You entered incorrect password too many times. You are banned!!'
                            break
                        }
                    }
                    fs.writeFileSync('../data.json', JSON.stringify(users, null, 2))
                }
            }
        } else {
            container.innerHTML = 'There are no users with this username!\nPlease sign up first.'
        }
    }
}

if(document.getElementById('btn-sign-in').clicked == true) {
    signIn(users)
}