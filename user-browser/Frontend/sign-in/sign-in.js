var users

axios.get('http://localhost:8000/users').then(resp => {
    users = resp.data;
    console.log(users)
    var container = document.getElementById('out');

    function signIn(users) {
        var userName = document.getElementById('username').value;
        var password = document.getElementById('password').value;
        
        if (userName.length != 0) {
            if (password.length != 0) {
                for (var i = 0; i<users.length; i++) {
                    if (users[i].userName == userName) {
                        if (users[i].isBanned == true) {
                            container.innerHTML = 'You are Banned! You cannot log in!'
                        } else {
                            if (users[i].password == password) {
                                container.innerHTML = 'Successfully logged in.'
                                users[i].pass_attempts = 0;
                            } else {
                                users[i].pass_attempts += 1
                                console.log(users)
                                container.innerHTML = 'Incorrect password!'
                                document.getElementById('password').value = ''
                                signIn(users)
                                if (users[i].pass_attempts >= 3) {
                                    users[i].isBanned = true;
                                    container.innerHTML = 'You entered incorrect password too many times. You are banned!!'
                                }
                                // while (users[i].password != password || users[i].pass_attempts!=3) {
                                //     container.innerHTML = 'Incorrect password!'
                                //     users[i].pass_attempts += 1
                                //     signIn(users)
                                //     if (users[i].pass_attempts >= 3) {
                                //         users[i].isBanned = true;
                                //         container.innerHTML = 'You entered incorrect password too many times. You are banned!!'
                                //         break
                                //     }
                                // }
                                axios.post('http://localhost:8000/users', users)
                                .then(function (response) {
                                    console.log(response);
                                })
                                .catch(function (error) {
                                    console.log(error);
                                });
                                }
                        }
                    } else {
                        container.innerHTML = 'There are no users with this username!\nPlease sign up first.'
                    }
                }
            } else {
                container.innerHTML = 'All fields are REQUIRED!'
            }
        } else {
            container.innerHTML = 'All fields are REQUIRED!'
        }
        
    }

    const btnSignIn = document.getElementById('btn-sign-in')

    btnSignIn.addEventListener("click", () => {
        signIn(users)
    })
})
