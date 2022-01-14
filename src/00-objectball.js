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
            },
        }
    };
    return game;
}

const object = gameObject()
function parametersOfObject() {
    return object.away.players;
}

function playerStats(playerName) {
    const homeTeamPlayer = object.home.players[playerName];
    const awayTeamPlayer = object.away.players[playerName];
    homeTeamPlayer ? homeTeamPlayer : awayTeamPlayer; //ternary if homeTeamPlayer exists/is truthy, then return homeTeamPlayer, else return awayTeamPlayer
}

function numPointsScore(playerName) {
    const foundPlayer = playerStats(playerName);
    return foundPlayer.points;
}

function shoeSize(playerName) {
    const foundPlayer = playerStats(playerName);
    return foundPlayer.shoe;
}

// function teamNames() {
//     const teamNamesArr = [];
//     teamNamesArr.push(object.home.teamName)
//     teamNamesArr.push(object.away.teamName)
//     return teamNamesArr;
// }

const teamNames = () => {
    const teamNameArray = [];
    for (const property in object) {
        console.log(object[property].teamName);
        teamNameArray.push(object[property].teamName);
    }
    return teamNameArray;
}

function teamColors(namePar) {
    if (namePar === object.home.teamName) {
        return object.home.colors
    } else {
        return object.away.colors
    }
}

function playerNumbers() {
    for (let property in object) {
        // console.log(object[property]);
        if(object[property].teamName === teamName) {
            const arrayOfPlayerObjects = Object.values(object[property].players);
            return arrayOfPlayerObjects.map(playerObject => playerObject.number);
        }
    }
}

function findPlayerLargestShoe() {
    const homeTeamPlayers = Object.values(object.home.players);
    const awayTeamPlayers = Object.values(object.away.players);
    const allPlayers = [...homeTeamPlayers, ...awayTeamPlayers];
    //could also do
    // const allPlayers = homeTeamPlayers.concat(awayTeamPlayers);
    return allPlayers;
}

function bigShoeRebound() {
    const foundPlayer = findPlayerLargestShoe();
    return foundPlayer.rebounds;
}
