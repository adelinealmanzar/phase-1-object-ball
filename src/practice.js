function gameObject() {
    const game = {
        home: {
            teamName: 'Brooklyn Nets',
            colors: ['Black', 'White'],
            players: {
                'Alan Anderson': {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },
                'Reggie Evans': {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                'Brook Lopez': {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
                'Mason Plumlee': {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },
                'Jason Terry': {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                }
            },
        },
        away: {
            teamName: 'Charlotte Hornets',
            colors: ['Turquoise', 'Purple'],
            players: {
                'Jeff Adrien': {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },
                'Bismak Biyombo': {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10
                },
                'DeSagna Diop': {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5
                },
                'Ben Gordon': {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0
                },
                'Brendan Haywood': {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12
                }
            }
        }
    };
    return game;
}
//for...in for objects
/* function numPointsScores that takes in an argument of a 
player's name and returns the number of points scored for that player
*/
// doesn't work with away stats

// function playerStats(playerNamePar) {
//     const obj = gameObject();
//     console.log(obj.home.players[playerNamePar]);
//     if (obj.home.players === playerNamePar) {
//         const homePlayerStats = obj.home.players[playerNamePar];
//         return homePlayerStats;
//     } else if (obj.away.players === playerNamePar) {
//         const awayPlayerStats = obj.away.players[playerNamePar];
//         return awayPlayerStats;
//     } else {
//         console.log('bug');
//     }
// }


function playerStats(playerNamePar) {
    const obj = gameObject();
    let playersStats;
    for (location in obj) {
        if (obj[location] === obj.home) {
            let playersStats = obj.home.players[playerNamePar];
        } else if (obj[location] === obj.away) {
            let playersStats = obj.away.players[playerNamePar];
        } else {
            return 'bug'
        }
    }
    return playersStats;
}

function numPointsScored(playerNamePar) {
    const obj = gameObject();
    const foundPlayerStats = playerStats(playerNamePar);
    return foundPlayerStats.points;
}
// console.log(playerStats('Alan Anderson')); // => 22
console.log(playerStats('Jeff Adrien')); //=> {}

// function playerStats(playerNamePar) {
//     const obj = gameObject();
//     const homePlayerStat = obj.home.players[playerNamePar];
//     const awayPlayerStat = obj.away.players[playerNamePar];
//     homePlayerStat ? homePlayerStat : awayPlayerStat;
// }

// function numPointsScore(playerNamePar) {
//     const foundPlayer = playerStats(playerNamePar); //? do we need to define var for this to work?
//     debugger;
//     return foundPlayer.points;
// }

/* function shoeSize that takes in an argument of a 
player's name and returns the shoe size of that player
*/
// won't do bc the same as previous


/*
Build a function, teamColors, that takes in an argument of 
the team name and returns an array of that teams colors.
*/
function teamColors(teamNamePar) {
    const obj = gameObject();
    // if the value of teamName === teamNamePar, then return its(todo) colors
    let teamColorsArr = [];
    if (obj.away.teamName === teamNamePar) {
        let teamColorsArr = obj.away.colors;
        return teamColorsArr;
    } else {
        let teamColorsArr = obj.home.colors;
        return teamColorsArr;
    }
}
// console.log(teamColors('Charlotte Hornets')); //=> ['Turquoise', 'Purple']
// console.log(teamColors('Brooklyn Nets')); //=> ['Black', 'White']


/*
Build a function, teamNames, that operates on the game object
to return an array of the team names
*/
function teamName() {
    const obj = gameObject();
    const arr = [];
    for (location in obj) {
        arr.push(obj[location].teamName);
    }
    return arr //array of team names
}
// console.log(teamName());

/*
Build a function, playerNumbers, that takes in an argument 
of a team name and returns an array of the jersey number's for that team.
*/

// need to use .map() for this one
function playerNumbers(teamNamePar) {
    const obj = gameObject();
    const arr = [];
    for (location in obj) {
        console.log(obj[location].players)
        if (obj[location.teamName === teamNamePar]) {
            // console.log(obj[location].players);
            const objPlayers = obj[location].players
            // console.log(objPlayers);
            for (player in objPlayers) {
                // console.log(player);
            }
        }
    }
    // if (obj.home.teamName === teamNamePar) {
    //     console.log(obj.home.players.playerName.number)// returns true for home team
    // }
    // return arr;//array of player numbers for that team
}

playerNumbers('Brooklyn Nets');