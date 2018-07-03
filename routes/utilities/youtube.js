const Ffmpeg = require('fluent-ffmpeg');
const ytdl = require('ytdl-core');
const fs = require('fs');
const omxPlayer=require('node-omxplayer');
const through2 = require('through2')

let player =omxPlayer();

function play(url){
    const audio = ytdl(url);
    const ffmpeg = new Ffmpeg(audio);
    const stream = through2();

    try {
        ffmpeg
            .format('mp3')
            .pipe(stream);

        player.newSource(stream,"local",false,6000);
    } catch (e) {
        throw e;
    }


}
exports.play=play;
