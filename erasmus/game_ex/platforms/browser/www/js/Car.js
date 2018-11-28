/* Author: Derek O Reilly, Dundalk Institute of Technology, Ireland. */

class Car extends GameObject
{
    /* Each gameObject MUST have a constructor() and a render() method.        */
    /* If the object animates, then it must also have an updateState() method. */

    constructor(image, y, width, height, updateStateMilliseconds)
    {
        super(updateStateMilliseconds); /* as this class extends from GameObject, you must always call super() */

        /* These variables depend on the object */
        this.image = image;
        this.width = width;
        this.height = height;
        this.x = 0;
        this.y = y;
		this.vx=1;
		this.vy=0;
    }

    updateState()
    {
        this.x+=this.vx;
		this.y+=this.vy;
        if (this.x > canvas.width)
        {
            this.x = -this.width;
        }
		if (this.x+this.width<0 ){
			this.x = canvas.width;
		}
		if (this.y > canvas.height)
        {
            this.y = -this.height;
        }
		if (this.y+this.height<0 ){
			this.y = canvas.height;
		}
    }

	setSpeed(vx, vy)
	{
		this.vx=vx;
		this.vy=vy;
	}
	
    render()
    {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
}