'use strict';
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


Kirby.prototype.Draw = function()
{
	ctx.drawImage(this.img, this.position.x, this.position.y, this.size.width, this.size.height);
};
Kirby.prototype.Move = function()
{
	if (keyboard.left) this.position.x += this.speed;
	if (keyboard.right) this.position.x -= this.speed;
	if (keyboard.top) this.position.y -= this.speed;
	if (keyboard.down) this.position.y += this.speed;
}

