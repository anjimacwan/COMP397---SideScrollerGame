module objects {
    
    export class Desert extends objects.GameObject {
        //PRIVATE INSTANCE VARIABLES++++++++++++++++++
        
        //CONSTRUCTOR++++++++++++++++++
        constructor()
        {
            super("desert2");
            this._speed.x=5;
            this._reset(-640);
            this.name="desert";
        }
        
        //PRIVATE METHODS++++++++++++++++++
        protected _checkBounds(value:number):void {
        
        if(this.x >= value)
        {
            //Check if the left of the desert has touched the right of the screen
            this._reset(-640);
        }    
        }
        
        //reset the desert offscreen
        protected _reset(value:number):void {
            this.x= value;
        }
        
        //PUBLIC METHODS+++++++++++++++++
        public update():void {
            //scroll the desert by 5px
            this.x +=this._speed.x;
            this._checkBounds(0);
        }
    }
}