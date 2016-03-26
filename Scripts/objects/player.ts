module objects {
    
    //PLAYER CLASS++++++++++++++++++
    export class Player extends createjs.Bitmap {
        
        //PUBLIC VARIABLES
        public width:number;
        public height:number;
        
        //PRIVATE INSTANCE VARIABLES
        private _leftBounds:number;
        private _rightBounds:number;
        
        constructor() {
            super(assets.getResult("eagle"));
            
            this.width=this.getBounds().width;
            this.height=this.getBounds().height;
            
            this.regX= this.width *0.5;
            this.regY= this.height *0.5;
            
            this._leftBounds= this.width * 0.5;
            this._rightBounds= config.Screen.WIDTH - (this.width * 0.5);
            
            this.y = 430;
            
        }
        
        //PRIVATE METHODS
        private _checkBounds(): void {
            
            if(this.x < this._leftBounds)
            {
                this.x = this._leftBounds;
            }
            
            if(this.x > this._rightBounds)
            {
                this.x = this._rightBounds;
            }
            
        }
        
        
        //PUBLIC METHODS
        public update():void {
            
            this.y = stage.mouseY;
            
            this._checkBounds();
            
        }
    }
}
