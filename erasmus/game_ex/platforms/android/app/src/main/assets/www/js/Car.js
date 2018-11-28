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
    }

    updateState()
    {
        this.x++;
        if (this.x > canvas.width)
        {
            this.x = -this.width;
        }
    }

    render()
    {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
}