import FlappyBird from './game';

const canvas = document.getElementById('bird-game');
const fBird = new FlappyBird(canvas);
document.addEventListener('DOMContentLoaded', fBird.restart());
