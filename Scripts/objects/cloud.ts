module objects {
    
    export class Cloud extends objects.GameObject {
        //PRIVATE INSTANCE VARIABLES++++++++++++++++++
        
        //CONSTRUCTOR++++++++++++++++++
        constructor()
        {
            super("cloud");
          
            this._reset(this._topBounds);
            this.name="cloud";
        }
        
        //PRIVATE METHODS++++++++++++++++++
        protected _checkBounds(value:number):void {
        
        if(this.x >= value)
        {
            //Check if the top of the ocean has touched the top of the screen
            this._reset(this._topBounds);
        }    
        }
        
        //reset the cloud offscreen
        protected _reset(value:number):void {
            this._speed.x = Math.floor(Math.random() * 5) + 5;
            this._speed.y =Math.floor(Math.random() * 4) - 2;
            this.x= value;
            this.y= Math.floor(Math.random() * this._rightBounds);
        }
        
        //PUBLIC METHODS+++++++++++++++++
        public update():void {
            //scroll the cloud
            this.x +=this._speed.x;
            this.y += this._speed.y;
            this._checkBounds(this._bottomBounds);
        }
    }
}