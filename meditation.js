#!/usr/bin/env node

const player = require('node-wav-player');
function playSound(path) {
  return new Promise((resolve, reject) => {
    player.play({path: path}).then(() => {
      resolve();
    }).catch((error) => {
      console.error(error);
      reject(error);
    });
  });
}

function playMusic(path) {
  return new Promise((resolve, reject) => {
    player.play({
      path: path,
      loop: true
    }).then(() => {
      resolve();
    }).catch((error) => {
      console.error(error);
      reject(error);
    });
  });
}


function playMeditation(num) {
  playSound('meditation.mp3')
  let time = num * 60 * 1000
  setTimeout(playMusic, 10000, 'meditation2.mp3')
  setTimeout(() => {
    player.stop();
  }, time)
  setTimeout(playSound, time, 'meditation.mp3')
}

const { NumberPrompt } = require('enquirer');
const { play } = require('node-wav-player');
 
const prompt = new NumberPrompt({
  name: 'number',
  message: '何分間の瞑想を行いますか？(標準10分)'
});
 
prompt.run()
  .then(answer => playMeditation(answer))
  .catch(console.error);
