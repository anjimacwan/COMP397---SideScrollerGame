module objects {
    
    export class Ocean extends objects.GameObject {
        //PRIVATE INSTANCE VARIABLES++++++++++++++++++
        
        //CONSTRUCTOR++++++++++++++++++
        constructor()
        {
            super("ocean");
            this._speed.y=5;
            this._reset(-960);
        }
        
        //PRIVATE METHODS++++++++++++++++++
        protected _checkBounds(value:number):void {
        
        if(this.y >= value)
        {
            //Check if the top of the ocean has touched the top of the screen
            this._reset(-960);
        }    
        }
        
        //reset the ocean offscreen
        protected _reset(value:number):void {
            this.y= value;
        }
        
        //PUBLIC METHODS+++++++++++++++++
        public update():void {
            //scroll the ocean by 5px
            this.y +=this._speed.y;
            this._checkBounds(0);
        }
    }
}