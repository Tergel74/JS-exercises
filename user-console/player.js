var fs = require('fs');

var rawData = fs.readFileSync('players.json');
var players = JSON.parse(rawData)

const readline = require("readline-sync");  // for getting input

function signUp(players) {
    var name = readline.question('Enter username: ')
    var pass = readline.question('Enter password: ')
    if (players.length != 0) {
        for (var x=0; x<players.length; x++) {
            if (name == players[x].userName) {
                console.log('This username is already taken. Try a different one.')
               // signUp(players)
            } else {
                var id_random = Math.round(Math.random()*10000)
                while (id_random == players[x].id) {
                    var id_random = Math.round(Math.random()*10000)
                }
                var player = {
                    userName: name,
                    password: pass,
                    id: id_random,
                    isBanned: false,
                    pass_attempts: 0
                }
                players.push(player);
                var add_player = JSON.stringify(players, null, 2);
                fs.writeFileSync('players.json', add_player)
                console.log('Successfully signed up! Now you can log in.')
                break
            }
        }
    } else {
        var player = {
            userName: name,
            password: pass,
            id: Math.round(Math.random()*10000),
            isBanned: false,
            pass_attempts: 0
        }
        players.push(player);
        var add_player = JSON.stringify(players, null, 2);
        fs.writeFileSync('players.json', add_player)
        console.log('Successfully signed up! Now you can log in.')
    }
}

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

function  changePassword(players) {
    var userName = readline.question('Enter your username: ')
    var new_password = readline.question('Enter your new password: ')
    for (var y=0; y<players.length; y++) {
        if (userName == players[y].userName) {
            players[y].password = new_password
            console.log('Successfully changed the password and you try logging in again.')
        } else {
            console.log('There are no users with this username!')
            changePassword(players)
        }
    }
}

// function signIn(players) {
//     var userName = readline.question('Enter your username: ')
//     var password = readline.question('Enter your password: ')
//     for (var i = 0; i<players.length; i++) {
//         if (players[i].userName == userName) {
//             if (players[i].password == password) {
//                 console.log('Successfully logged in.')
//             } else {
//                 console.log('Incorrect password!')
//                 var cmd = readline.question('If you forgot your password and you want to change it, type "f" in the terminal: ')
//                 if (cmd.toLowerCase() == 'f') {
//                     forgotPassword()
//                 }
//             }
//         } else {
//             console.log('There are no users with this username!\nPlease sign up first.')
//         }
//     }
// }

function signIn(players) {
    var userName = readline.question('Enter your username: ')
    var password = readline.question('Enter your password: ')
    for (var i = 0; i<players.length; i++) {
        if (players[i].userName == userName) {
            if (players[i].isBanned == true) {
                console.log('You are Banned! You cannot log in!')
                console.log('----------------------------------')
            } else {
                if (players[i].password == password) {
                    console.log('Successfully logged in.')
                } else {
                    while (players[i].password != password || players[i].pass_attempts!=3) {
                        console.log('Incorrect password!')
                        players[i].pass_attempts += 1
                        if (players[i].pass_attempts >= 3) {
                            players[i].isBanned = true;
                            console.log('You entered incorrect password too many times. You are banned!!')
                            break
                        }
                        var cmd = readline.question('If you forgot your password and you want to change it, type "f" in the terminal, else enter any other key: ')
                        if (cmd.toLowerCase() == 'f') {
                            forgotPassword()
                        } else {
                            var password = readline.question('Enter your password: ')
                        }
                    }
                    
                    fs.writeFileSync('players.json', JSON.stringify(players, null, 2))
                }
            }
        } else {
            console.log('There are no users with this username!\nPlease sign up first.')
        }

        
        
    }
}

console.log('Commands:\n    "u" - to sign up\n    "i" - to sign in\n    "l" - to list all players\n    "q" - to quit')
var inp = readline.question('Enter action: ')

while (inp.toLowerCase() != 'q') {
    if (inp.toLowerCase() == 'u') {
        // Sign up
        signUp(players);
        var inp = readline.question('Enter action: ');
    } else if (inp.toLowerCase() == 'i') {
        // Sign in
        signIn(players)
        var inp = readline.question('Enter action: ');
    } else if (inp.toLowerCase() == 'l') {
        // Listing all players/users
        console.log(players)
        var inp = readline.question('Enter action: ');
    } else {
        // Invalid command
        console.log('Invalid command!')
        var inp = readline.question('Enter action: ');
    }
}

//Assessment 1
//Users iin dummydata json file beldeed, ter file taigaa deed uidluudee holbochno. Nemeh n tuhain neg hereglegch password oo 3 udaa buruu hiivel banduulna. 