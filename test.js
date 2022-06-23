function sendCode() {
    code = Math.round(Math.random(1000, 9999))
    return '    The code for verifying is: ' + code + '.'
}

console.log(sendCode.code)