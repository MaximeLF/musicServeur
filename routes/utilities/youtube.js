const Ffmpeg = require('fluent-ffmpeg');
const ytdl = require('ytdl-core');
const fs = require('fs');
const omxPlayer=require('node-omxplayer');

let player =omxPlayer();

function play(url){
    const audio = ytdl(url,{format:"audio"});
    player.newSource(audio,"local",false,6000);

}