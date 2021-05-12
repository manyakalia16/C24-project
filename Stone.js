class Stone{
	constructor(x,y){
	// assign options to the rubber ball
	var options = {
		'density':12,
		'friction': 2,
		'restitution':1.5
	}
    this.body = Bodies.rectangle(x, y, 50, 50, options);
    this.width = 150;
    this.height = 40;
    World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("blue");
			fill("green");
			//draw the ellipse here to display the rubber ball
			rect(0, 0, this.width, this.height);

			pop()
	}

}