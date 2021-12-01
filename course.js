var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var player1 = new Image();
player1.src = "images/blue.png";

function drawPlayer1() {
    ctx.beginPath();
    ctx.drawImage(player1, 10, canvas.height - 10);
    ctx.closePath();
}

    //drawPlayer1();
    ctx.beginPath();
    ctx.rect(20, 40, 50, 50);
    ctx.fillStyle = "#80056a";
    ctx.closePath();

//draw();
