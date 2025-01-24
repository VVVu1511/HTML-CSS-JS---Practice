
function drawLine(){
    let canvas1 = document.querySelector('#myCanvas');
    let ctx = canvas1.getContext('2d');
    ctx.moveTo(0,0);
    ctx.lineTo(200,100);
    ctx.stroke();
}


drawLine();