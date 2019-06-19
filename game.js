const cvs = document.getElementById('Game');
const ctx = cvs.getContext('2d');
const scoreElement = document.getElementById('score');

const ROW = 20;
const COL = COLUMN = 11;
const SQ = squareSize = 20;
const VACANT = "#282C34"; //COLOR EMPTY

ctx.fillStyle = VACANT;
ctx.fillRect(40, 40, 20,20);
ctx.fillStyle = VACANT;
ctx.fillRect(60, 40, 20,20);

ctx.strokeStyle = "#282C34";
ctx.strokeRect(40, 40, 20,20);
ctx.strokeStyle = "#282C34";
ctx.strokeRect(40, 60, 20,20);

function drawSquare(x,y, color){
    ctx.fillStyle = color;
    ctx.fillRect(x*SQ, y*SQ, SQ,SQ);

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
