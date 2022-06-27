// const fs = require("fs");

// var rawData = fs.readFileSync('../data.json');
// var users = JSON.parse(rawData)
var users = []

axios.get('http://localhost:8000/users').then(resp => {
    users.push(resp.data)
});


var container = document.getElementById('out');

function signUp(users) {
    
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    if (users.length != 0) {
        if (username.length != 0) {
            if (password.length != 0) {
                for (var x=0; x<users.length; x++) {
                    if (username == users[x].userName) {
                        container.innerHTML = 'This username is already taken. Try a different one.'
                    // signUp(users)
                    } else {
                        var id_random = Math.round(Math.random()*10000)
                        while (id_random == users[x].id) {
                            var id_random = Math.round(Math.random()*10000)
                        }
                        var player = {
                            userName: username,
                            password: password,
                            id: id_random,
                            isBanned: false,
                            pass_attempts: 0
                        }
                        users.push(player);
                        axios.post('http://localhost:8000/users', player)
                        .then(function (response) {
                            console.log(response);
                        })
                        .catch(function (error) {
                            console.log(error);
                        });
                        console.log('afdsfs')
                        container.innerHTML = 'Successfully signed up! Now you can log in.'
                        break
                    }
                }
            } else {
                container.innerHTML = 'All fields are REQUIRED!'
            }
        } else {
            container.innerHTML = 'All fields are REQUIRED!'
        }
    } else {
        var player = {
            userName: username,
            password: password,
            id: Math.round(Math.random()*10000),
            isBanned: false,
            pass_attempts: 0
        }
        users.push(player);
        axios.post('http://localhost:8000/users', player)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
        container.innerHTML = 'Successfully signed up! Now you can log in.'
    }
}

const btnSignUp = document.getElementById('btn-sign-up')

btnSignUp.addEventListener("click", () => {
    console.log('clicked')
    signUp(users)
})

