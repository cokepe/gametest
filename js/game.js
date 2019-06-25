const cvs = document.getElementById('Game');
const ctx = cvs.getContext('2d');
const scoreElement = document.getElementById('score');
//ctx.scale(20, 20);

const ROW = 20;
const COL = COLUMN = 11;
const SQ = squareSize = 20;
const VACANT = "#282C34"; //COLOR EMPTY


function drawSquare(x,y,color, sc){
    ctx.fillStyle = color;
    ctx.fillRect(x*SQ, y*SQ, SQ, SQ);
    ctx.strokeStyle = "#9DA5B4";
    ctx.strokeRect(x*SQ, y*SQ, SQ,SQ);

}

//board

let board = [];
for(r = 0; r <ROW; r++){
    board[r] = [];
    for(c = 0; c < COL; c++){
        board[r][c] = VACANT;
    }
}
function drawBoard(){
    for( r = 0; r <ROW; r++){
        for(c = 0; c < COL; c++){
            drawSquare(c,r,board[r][c]);
        }
    }
}

drawBoard();

// The Object Piece
const PIECES = [
    [A,"white"],
    [B,"white"],
    [C,"white"],
    [D,"white"],
    [E,"white"],
];

// generate random pieces

function randomPiece(xx){
    let r = randomN = Math.floor(Math.random() * PIECES.length) // 0 -> 1
    return new Piece( PIECES[r][0],PIECES[r][1],xx, 2);
}

let p = randomPiece(-1);
let d = new Piece(DOT, 'WHITE',-1, -1);
let np;

function Piece(tetromino,color, xpos, ypos){
    this.tetromino = tetromino;
    this.color = color;

    this.tetrominoN = 0; // we start from the first pattern
    this.activeTetromino = this.tetromino[this.tetrominoN];

    // we need to control the pieces
    this.x = xpos;
    this.y = ypos;
}

// fill function

Piece.prototype.fill = function(color){
    for( r = 0; r < this.activeTetromino.length; r++){
        for(c = 0; c < this.activeTetromino.length; c++){
            // we draw only occupied squares
            if( this.activeTetromino[r][c]){
                drawSquare(this.x + c,this.y + r, color);
            }
        }
    }
}

// draw a piece to the board

Piece.prototype.draw = function(){
    this.fill(this.color);
}

Piece.prototype.unDraw = function(){
    this.fill(VACANT);
}

Piece.prototype.moveDown = function(){
    this.unDraw();
    this.y++;
    this.draw();
  }

Piece.prototype.moveRight = function(){
    this.unDraw();
    this.x++;
    this.draw();
}

Piece.prototype.moveLeft = function(){
    this.unDraw();
    this.x--;
    this.draw();
}

// control the piece

let newx;
let b = false;
let move = []
document.addEventListener('keydown', event => {
  if (event.keyCode === 40) {
        np = p;
        newx = np.x
        np.moveDown();
        p = randomPiece(newx);
        move.push(np)
        b = true
      }
  if (event.)
});

let dropStart = Date.now();
let i = 0
let a = true
function moveupper (){
    let now = Date.now();
    let delta = now - dropStart;
    if(delta > 60){
        if(a){
          if (i<9){
            d.moveRight();
            p.moveRight();
            //p.moveDown();
            i++
            dropStart = Date.now();
          }else {
            a = false
          }
        }else {
          if (i > 1){
            d.moveLeft();
            p.moveLeft();
            i--
            dropStart = Date.now();
          } else {
            a = true
          }
        }
        if (b){
          for( j= 0; j < move.length; j++){
             move[j].moveDown();
             //mconsole.log(move)
          }
        }

    }
    requestAnimationFrame(moveupper);
}
moveupper();
