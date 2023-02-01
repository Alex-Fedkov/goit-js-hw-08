import Player from '@vimeo/player';
import { load, save } from "./local-storage";
const throttle = require('lodash.throttle');

const LOCALSTORAGE_KEY = "videoplayer-current-time";

const startTime = load(LOCALSTORAGE_KEY) || 0;
// console.log("startTime", startTime);

const iframe = document.querySelector("#vimeo-player")
const player = new Player(iframe);

player.setCurrentTime(startTime).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});

// player.on('play', function() {
//     console.log('played the video!');
// });

const onPlay = function(data) {
    // console.log("data", data);
    save(LOCALSTORAGE_KEY, data.seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));
// player.on('timeupdate', data => {
//     console.log("--", data);
// });
player.off('timeupdate', onPlay);