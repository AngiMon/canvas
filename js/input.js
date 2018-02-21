keyboard =
{
	left : false,
	right : false,
	top : false,
	down : false
}
behind = true;
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

function mouseMove(evt)
{
	getMousePos(canvas, evt);
	//console.log("x" + mousePos.x);
	//console.log("y" + mousePos.y);
}

function getMousePos(canvas, evt)
{
	var rect = canvas.getBoundingClientRect();
	mousePos = {
	  x : evt.clientX - rect.left,
	  y : evt.clientY - rect.top
  };
}
function mirror(cup)
{
	cup.orientation.behind = true;
}
