'use strict';

var canvas, ctx, kirby;

function init()
{ 
	canvas = document.getElementById("canvas");
	ctx=canvas.getContext('2d');
	kirby = new Kirby();
	requestAnimationFrame(Update);
}
function Update ()
{
	ctx.clearRect(0, 0, 800, 600);
	kirby.move();
	kirby.Draw();
	requestAnimationFrame(Update);
}
function Kirby()
{
	this.img = new Image();
	this.img.src = "img/Kirby.png";

	this.position = {
		x:0,
		y:0
	};

	this.size = {
		width:30,
		height:30
	};
	this.speed = 5;
}
var keyboard =
{
	left : false,
	right : false,
	top : false,
	down : false
}

function move(event)
{
	switch (event.keyCode) 
	{
		case 39:
			keyboard.left = true;
			break;
		case 38:
			keyboard.top = true;
			break;
		case 37:
			keyboard.right = true;
			break;
		case 40:
			keyboard.down = true;
			break;
	}
};
function stop ()
{
	switch (event.keyCode) 
	{
		case 39:
			keyboard.left = false;
			break;
		case 38:
			keyboard.top = false;
			break;
		case 37:
			keyboard.right = false;
			break;
		case 40:
			keyboard.down = false;
			break;
		}
};


Kirby.prototype.Draw = function()
{
	ctx.drawImage(this.img, this.position.x, this.position.y, this.size.width, this.size.height);
};
Kirby.prototype.move = function()
{
	if (keyboard.left) this.position.x += this.speed;
	if (keyboard.right) this.position.x -= this.speed;
	if (keyboard.top) this.position.y -= this.speed;
	if (keyboard.down) this.position.y += this.speed;
}

document.addEventListener("DOMContentLoaded", init);

window.requestAnimationFrame = window.requestAnimationFrame||
							  window.mozRequestAnimationFrame||
							  window.webkitRequestAnimationFrame||
							  window.msRequestAnimationFrame;

document.addEventListener('keydown', move);
document.addEventListener('keyup', stop);