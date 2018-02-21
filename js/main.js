var canvas, ctx, kirby, cuphead, gameObjects=[], mousePos = { x:0, y:0 };

function init()
{ 
	canvas = document.getElementById("canvas");
	ctx=canvas.getContext('2d');
	gameObjects.push(new Kirby());
	gameObjects.push(new Cuphead());
	kirby = new Kirby();
	requestAnimationFrame(Update);
	

}
function Update ()
{
	ctx.clearRect(0, 0, 800, 600);
	for (var i = 0; i < gameObjects.length; i++) 
	{
		gameObjects[i].Move();
		gameObjects[i].Draw();

	}
	requestAnimationFrame(Update);
}

window.requestAnimationFrame = window.requestAnimationFrame||
							  window.mozRequestAnimationFrame||
							  window.webkitRequestAnimationFrame||
							  window.msRequestAnimationFrame;
