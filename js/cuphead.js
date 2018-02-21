function Cuphead()
{
	this.img = new Image();
	this.img.src = "img/cuphead.png";

	this.position =
	{
		x: 100,
		y:100
	};
	this.size=
	{
		x:50,
		y:75
	};
	this.spriteSize = 
	{
		x:103,
		y:113
	}
	this.imagePosition =
	{
		x:0,
		y:113*4
	}
	this.orientation = 
	{
		behind : false
	}

}

Cuphead.prototype.Move = function()
{
	console.log(this.orientation.behind);

	if(this.position.x > mousePos.x)
	{
		mirror(this);
	}
	else
		this.orientation.behind = false;
}
Cuphead.prototype.Draw = function()
{
	//ctx.drawImage(this.img, this.position.x, this.position.y);
	
	//ctx.drawImage (imageSource, sourceX, sourceY, sourceWidth, sourceHeight, destinationX, destinationY, destinationWidth, destinationHeight)

//width 103
//height 113
	this.imagePosition.x += 103;
	
	if(this.imagePosition.x==103*16)
	{
		this.imagePosition.x = 0
	}
	if (this.orientation.behind == true)
	{
		//console.log("toto");
	    ctx.save();
	    ctx.scale(-1,1);
	    ctx.drawImage(this.img,
		this.imagePosition.x,
		this.imagePosition.y,
		this.spriteSize.x,
		this.spriteSize.y,
		this.position.x*-1 -this.size.x,
		this.position.y,
		this.size.x,
		this.size.y);
	    ctx.restore();
		
	}
	else
	{ 
		ctx.drawImage(this.img,
		this.imagePosition.x,
		this.imagePosition.y,
		this.spriteSize.x,
		this.spriteSize.y,
		this.position.x,
		this.position.y,
		this.size.x,
		this.size.y);
	}
}

