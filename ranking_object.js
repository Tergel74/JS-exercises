let players = [
    {name: "Todoo", score : 1000, id: 1}, 
    {name: "Tergel", score: 5000, id: 2}, 
    {name: "Enkhsaikhan", score : 6000, id: 3}, 
    {name: "Saruul", score : 2000, id: 4}, 
    {name: "Dulguun", score : 1800, id: 5}, 
    {name: "Tulga", score : 3200, id: 6}, 
    {name: "Emujin", score : 2600, id: 7}, 
    {name: "Nominzul", score : 1200, id: 8}, 
    {name: "Anurad", score : 8000, id: 9}, 
    {name: "Chingun", score : 3200, id: 10},
    {name: "Saruul", score : 2100, id: 11}
]

let ranking = []

function sortRank (arr, ranking) {
    for (var x = 0; x < arr.length; x++) {
        if (ranking.length == 0) {
            ranking.unshift(arr[x])
        } else {
            for (var y=0; y<ranking.length; y++) {
                if (arr[x].score >= ranking[y].score) {
                    ranking.splice(y, 0, arr[x])
                    break
                }
            }
            
        }
    }
}

sortRank(players, ranking)

const readline = require("readline-sync");

function getPlayer (arr, name, id) {

    for (var i = 0; i < arr.length; i++) {
        if (arr[i].name == name && arr[i].id == id) {
            var place = Number(i) + 1
            let output = 'Score: ' + arr[i].score + '. ' + 'Place in the ranking: ' + place + '.'
            return output
        }
    }
}


console.log('Commands:\n    "q" - Quit\n    "s" - Search Player\n    "l" - View Ranking\n')
var inp = readline.question('Enter command: ')

// while (inp != 'q') {
//     if (inp == 's') {
//         var userName = readline.question('Enter username: ')
//         var userId = readline.question('Enter id: ')
//         console.log(getPlayer(ranking, userName, userId))
//     } else if (inp == 'l') {
//         console.log(ranking)
//     } else {
//         console.log('Invalid command!')
//     }
//     var inp = readline.question('Enter command: ')
// }

switch(inp) {
    case 'q':
        break
    case 's':
        var userName = readline.question('Enter username: ');
        var userId = readline.question('Enter id: ');
        console.log(getPlayer(ranking, userName, userId));
        var inp = readline.question('Enter command: ')
    case 'l':
        console.log(ranking)
        var inp = readline.question('Enter command: ')
}
