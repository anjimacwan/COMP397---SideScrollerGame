module objects {
    
    export class Ocean extends createjs.Bitmap {
        //PRIVATE INSTANCE VARIABLES++++++++++++++++++
        private _speed:number;
        
        //CONSTRUCTOR++++++++++++++++++
        constructor()
        {
            super(assets.getResult("ocean"));
            this._speed=5;
            this._reset();
        }
        
        //PRIVATE METHODS++++++++++++++++++
        private _checkBounds():void {
        
        if(this.y >= 0)
        {
            //Check if the top of the ocean has touched the top of the screen
            this._reset();
        }    
        }
        
        //reset the ocean offscreen
        private _reset():void {
            this.y= -960;
        }
        
        //PUBLIC METHODS+++++++++++++++++
        public update():void {
            //scroll the ocean by 5px
            this.y +=this._speed;
            this._checkBounds();
        }
    }
}