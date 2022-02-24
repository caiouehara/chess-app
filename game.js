function gameStart(){
    for (let i = 0; i < board.x; i++){
        for(let j = 0; j < board.y; j++){
            switch (i){
                case 1:
                    board.chartBoard[i][j] = "pawnBlack";
                    break;
                case 6:
                    board.chartBoard[i][j] = "pawnWhite";
                    break
            }
        }
    }
}

function Pawn(){
    this.move = function(){

    }
}