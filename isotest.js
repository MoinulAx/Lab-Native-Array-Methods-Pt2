const exampleSongData = require("./data/songs");



// // #7
// /**
//  * Transforms song data to show title and runtime in minutes.
//  * @param {Object[]} songs - An array of songs.
//  * @returns {Object[]} Array of song objects with runtime in minutes.
//  */
// function getSongsWithDurationInMinutes(songs) {
//     let minAmount;

//     let obj = songs.map(songElement => {
//         minAmount = Math.round(songElement.runtimeInSeconds / 60)
//         [songElement.runtimeInSeconds] = minAmount
        
//         return songElement
        
//     })

//     return obj
    
// }

// console.log('meep ',getSongsWithDurationInMinutes(exampleSongData))
// getSongsWithDurationInMinutes(exampleSongData)

// // let expectedDuration;
// //      songs.forEach(function (song, index) {
// //          expectedDuration = songs[index].runtimeInSeconds / 60;
// //          console.log(expectedDuration);
// //      });






// Problem #16
/**
 * Maps each artist to an array of their song titles.
 * @param {Object[]} songs - An array of songs.
 * @returns {Object} An object mapping each artist to an array of their song titles.
 */
function mapArtistsToSongs(songs) {
    let artistMap = {};

    songs.map(song => (song.artist))   
    return artistMap
}

console.log(mapArtistsToSongs(exampleSongData))