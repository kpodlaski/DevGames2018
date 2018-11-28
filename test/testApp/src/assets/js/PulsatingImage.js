/* Author: Derek O Reilly, Dundalk Institute of Technology, Ireland. */

class PulsatingImage extends GameObject
{
    /* Each gameObject MUST have a constructor() and a render() method.        */
    /* If the object animates, then it must also have an updateState() method. */

    constructor(image, x, y, originalWidth, originalHeight, numberOfSteps, stepSize, intervalTime)
    {
        super(intervalTime); /* as this class extends from GameObject, you must always call super() */

        /* These variables depend on the object */
        this.image = image;
        this.x = x;
        this.y = y;
        this.width = originalWidth;
        this.height = originalHeight;
        this.numberOfSteps = numberOfSteps;
        
        this.stepSize = stepSize; // can be positive or negative. Negative decreases the original image size
        if (this.stepSize > 0) // image is pulsating between original size to a larger size
        {
            this.incrementing = true;
        }
        else // image is pulsating between original size to a larger size
        {
            this.incrementing = false;
        }
        
        // the image pulsates about its centre
        this.centreX = x + (this.width / 2);
        this.centreY = y + (this.height / 2);

        this.currentStep = 0;
    }

    updateState()
    {
        if (this.stepSize > 0) // image pulses into a bigger image
        {
            if (this.incrementing) // incrementing to increase size of original image
            {
                this.currentStep++;
                if (this.currentStep === this.numberOfSteps)
                {
                    this.incrementing = false;
                }
            }
            else // drecrementing to return to original image size
            {
                this.currentStep--;
                if (this.currentStep === 0)
                {
                    this.incrementing = true;
                }
            }
        }
        else // image pulses into a smaller image
        {
            if (!this.incrementing) // drecrementing to decrease size of original image
            {
                this.currentStep++;
                if (this.currentStep === this.numberOfSteps)
                {
                    this.incrementing = true;
                }
            }
            else // drecrementing to return to original image size
            {
                this.currentStep--;
                if (this.currentStep === 0)
                {
                    this.incrementing = false;
                }
            }
        }
    }

    render()
    {
        ctx.drawImage(this.image, this.x - (this.currentStep * this.stepSize) / 2, this.y - (this.currentStep * this.stepSize) / 2, this.width + (this.currentStep * this.stepSize), this.height + (this.currentStep * this.stepSize));
    }
}