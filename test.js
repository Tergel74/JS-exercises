var fs = require('fs')

var player = {
    userName: 'Tegi',
    password: '123',
    id: 2,
}

fs.readFile('test.json', function (err, data) {
    if (err) console.log(err);
    var players = JSON.parse(data);
    players.push(player);
    var add_players = JSON.stringify(players, null, 2);
    fs.writeFileSync('test.json', add_players)
})
