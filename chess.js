import { canMove } from './rules.js';

const canvas = document.getElementById('chessBoard');
const ctx = canvas.getContext('2d');
const square = 60;
const images = {};

// kopplar pjäserna till deras källor
const imageSources = {
  'b-rook': 'black basic/b-rook.png',
  'b-knight': 'black basic/b-knight.png',
  'b-bishop': 'black basic/b-bishop.png',
  'b-queen': 'black basic/b-queen.png',
  'b-king': 'black basic/b-king.png',
  'b-pawn': 'black basic/b-pawn.png',
  'w-rook': 'white basic/w-rook.png',
  'w-knight': 'white basic/w-knight.png',
  'w-bishop': 'white basic/w-bishop.png',
  'w-queen': 'white basic/w-queen.png',
  'w-king': 'white basic/w-king.png',
  'w-pawn': 'white basic/w-pawn.png',
};

// spelplanen och var pjäserna blir placerade
const board = [
  ['b-rook', 'b-knight', 'b-bishop', 'b-queen', 'b-king', 'b-bishop', 'b-knight', 'b-rook'],
  ['b-pawn', 'b-pawn', 'b-pawn', 'b-pawn', 'b-pawn', 'b-pawn', 'b-pawn', 'b-pawn'],
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', ''],
  ['w-pawn', 'w-pawn', 'w-pawn', 'w-pawn', 'w-pawn', 'w-pawn', 'w-pawn', 'w-pawn'],
  ['w-rook', 'w-knight', 'w-bishop', 'w-queen', 'w-king', 'w-bishop', 'w-knight', 'w-rook'],
];

// ritar ut brädet och pjäserna
function draw() {
  for (let row = 0; row < 8; row++) {
    for (let column = 0; column < 8; column++) {
      
      ctx.fillStyle = (column + row) % 2 === 0 ? '#fbff00' : '#0066ff';
      ctx.fillRect(column * square, row * square, square, square);
      const piece = board[row][column];

      if (piece && images[piece]) {
        ctx.drawImage(images[piece], column * square, row * square, square, square);
      }
    }
  }
  // markerar den valda rutan
  if (selected) {
    ctx.lineWidth = 4;
    ctx.strokeStyle = "red";
    ctx.strokeRect(selected.column * square, selected.row * square, square, square);
  }
}

function loadImages() {
  const pieces = Object.keys(imageSources);
  let loaded = 0;

  pieces.forEach(name => {
    images[name] = new Image();
    images[name].onload = () => {
      loaded += 1;
      if (loaded === pieces.length) {
        draw();
      }
    };
    images[name].src = imageSources[name];
  });
}

let selected = null;

canvas.onclick = (event) => {
  const column = Math.floor(event.offsetX / square);
  const row = Math.floor(event.offsetY / square);

  if (selected) {
    if (canMove(board, selected, { row, column })) {
      const piece = board[selected.row][selected.column];
      board[row][column] = piece;
      board[selected.row][selected.column] = '';
    }
    selected = null;
  } else if (board[row][column]) {
    selected = { row, column };
  }
  draw();
};

loadImages();