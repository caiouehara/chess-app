const canvasElement = document.getElementById("canvas");
const ctx = canvasElement.getContext("2d");

const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 800;

const draw = {
    ball(ob) {
        ctx.beginPath();
        ctx.arc(ob.posX, ob.posY, ob.radius, 0, 2 * Math.PI);
        ctx.fillStyle = ob.color;
        ctx.fill()
    },
    background(){
        ctx.fillStyle = "#999966";
        ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    },
}

let state = {
    isRunning: false,
};

function setup(){
    canvasElement.width = CANVAS_WIDTH;
    canvasElement.height = CANVAS_HEIGHT;

    isRunning = true;

    loop()
}

function render(){
    draw.background()
}

function loop(){
    requestAnimationFrame(loop);
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    render()
}


//first call
setup();