module objects {
    
    export class Desert extends objects.GameObject {
        //PRIVATE INSTANCE VARIABLES++++++++++++++++++
        
        //CONSTRUCTOR++++++++++++++++++
        constructor()
        {
            super("desert");
            this._speed.y=5;
            this._reset(-960);
            this.name="desert";
        }
        
        //PRIVATE METHODS++++++++++++++++++
        protected _checkBounds(value:number):void {
        
        if(this.y >= value)
        {
            //Check if the top of the desert has touched the top of the screen
            this._reset(-960);
        }    
        }
        
        //reset the desert offscreen
        protected _reset(value:number):void {
            this.y= value;
        }
        
        //PUBLIC METHODS+++++++++++++++++
        public update():void {
            //scroll the desert by 5px
            this.y +=this._speed.y;
            this._checkBounds(0);
        }
    }
}