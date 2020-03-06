var canvas=document.getElementById("canvas");
var ctx=canvas.getContext("2d");

var myCircle={
centerX:50,
centerY:50,
radius:25,
fill:'blue'
}

var myCircle2={
centerX:50,
centerY:50,
radius:25,
fill:'red'
}

var myCircle3={
centerX:50,
centerY:50,
radius:25,
fill:'green'
}

redraw();

document.getElementById('move').addEventListener('click',function(){
myCircle.centerX+=5;
//obligé de redessiner le canvas avec redraw pour faire une animation
redraw();
});

function redraw(){
  //tester en mode commenté lol
  //!!! clearRect sert effacer une zone du canvas
  ctx.clearRect(0,0,canvas.width,canvas.height);
//ordre Desc (zIndex:1 => zIndex:99)
//ici je crée mon élément qui sera le troisième

  ctx.beginPath();
  ctx.arc( myCircle3.centerX-20, myCircle3.centerY, myCircle3.radius, 0, Math.PI*2 );
  ctx.closePath();
  ctx.fillStyle=myCircle3.fill;
  ctx.fill();
//ici je crée mon élément qui sera le deuxième
ctx.beginPath();
ctx.arc( myCircle.centerX, myCircle.centerY, myCircle.radius, 0, Math.PI*2 );
ctx.closePath();
ctx.fillStyle=myCircle.fill;
ctx.fill();

//ici je crée mon élément qui sera le premier
ctx.beginPath();
ctx.arc( myCircle2.centerX+10, myCircle.centerY, myCircle.radius, 0, Math.PI*2 );
ctx.closePath();
ctx.fillStyle=myCircle2.fill;
ctx.fill();

}
