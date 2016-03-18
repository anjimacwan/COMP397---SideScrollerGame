module objects {
    
    export class Island extends objects.GameObject {
        //PRIVATE INSTANCE VARIABLES++++++++++++++++++
        
        //CONSTRUCTOR++++++++++++++++++
        constructor()
        {
            super("island");
            this._speed.y=5;
            this._reset(-this._height);
        }
        
        //PRIVATE METHODS++++++++++++++++++
        protected _checkBounds(value:number):void {
        
        if(this.y >= value)
        {
            //Check if the top of the ocean has touched the top of the screen
            this._reset(this._topBounds);
        }    
        }
        
        //reset the ocean offscreen
        protected _reset(value:number):void {
            
            this.y= value;
            this.x= Math.floor(Math.random() * this._rightBounds);
        }
        
        //PUBLIC METHODS+++++++++++++++++
        public update():void {
            //scroll the ocean by 5px
            this.y +=this._speed.y;
            this._checkBounds(this._bottomBounds);
        }
    }
}