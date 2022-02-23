const canvasElement = document.getElementById("canvas");
const ctx = canvasElement.getContext("2d");

const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 800;

let state = {
    isRunning: false,
};

let board = new Board(8, 8);
  
const draw = {
    board(x, y){
        for (var i = 0; i < x; i++) {
            for (var j = 0; j < y; j++) {
              ctx.beginPath();
              ctx.strokeStyle = "black";
              ctx.strokeRect(j * 80, i * 80, 80, 80);
              ctx.closePath();
            }
          }
    },
    background(){
        ctx.fillStyle = "#999966";
        ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    },
    pieces(x, y){
        const image = new Image();
        const type = {
            king: "./assets/king-piece.jpg",
        }

        for (var i = 0; i < x; i++) {
            for (var j = 0; j < y; j++) {
                if ( type[board.chartBoard[i][j]] ) {
                    image.src = type[board.chartBoard[i][j]];
                    ctx.drawImage(image, j * 80, i * 80, 70, 70);
                }
            }
          }     
    },
}

function setup(){
    canvasElement.width = CANVAS_WIDTH;
    canvasElement.height = CANVAS_HEIGHT;

    isRunning = true;

    loop();
}

function render(){
    draw.background();
    draw.board(board.x, board.y);
    draw.pieces(board.x, board.y);
}

function loop(){
    requestAnimationFrame(loop);
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    render();
}

function Board(x, y) {
    this.x = x;
    this.y = y;
    this.chartBoard = [];

    for (var i = 0; i < this.x; i++) {
        const row = [];
        this.chartBoard.push(row);

        for (var j = 0; j < this.y; j++) {
            const col = [];
            row.push(col);
        }
    }
}

//first call
setup();