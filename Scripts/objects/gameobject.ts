module objects {
    //GAMEOBJECT SUPER CLASS
    export class GameObject extends createjs.Bitmap {
        // INSTANCE VARIABLES++++++++++++++++++
        protected _speed:createjs.Point;
        
        protected _leftBounds:number;
        protected _rightBounds:number;
        protected _topBounds:number;
        protected _bottomBounds:number;
        protected _isColliding: boolean; 
        protected _isCollidingPlayer: boolean; 
        
        //PUBLIC VARIABLES
        public name:string;
        public width:number;
        public height:number;
        public centerX:number;
        public centerY:number;
        
        //CONSTRUCTOR++++++++++++++++++
        constructor(bitmapString:string)
        {
            super(assets.getResult(bitmapString));
            this._speed= new createjs.Point(0,0);
            
            this.width=this.getBounds().width;
            this.height=this.getBounds().height;
            
            this.centerX = this.width *0.5;
            this.centerY = this.height *0.5;
            
            this._topBounds = -this.height;
            this._bottomBounds= config.Screen.HEIGHT + this.height;
            
            this._leftBounds= 0;
            this._rightBounds= config.Screen.WIDTH - this.width;
        }
        
        //PRIVATE METHODS++++++++++++++++++
        protected _checkBounds(value:number):void {
       
        var resetValue:number=0;
        
        if(this.x >= value)
        {
            //check if y value has met the reset criteria
            this._reset(resetValue);
        }    
        }
        
        //reset the ocean offscreen
        protected _reset(value:number):void {
            this.x= value;
        }
        
        

// Getter Method to check collision flag of object
        public getIsColliding(): boolean {
            return this._isColliding;
        }

        // Setter Method to set the collision flag of the object - true or false
        public setIsColliding(isColliding: boolean) {
            this._isColliding = isColliding;
        }
        
        public getIsCollidingPlayer(): boolean {
            return this._isCollidingPlayer;
        }

        // BULLET Setter Method to set the collision flag of the object - true or false
        public setIsCollidingPlayer(isCollidingPlayer: boolean) {
            this._isCollidingPlayer = isCollidingPlayer;
        }
        
        //PUBLIC METHODS+++++++++++++++++
        public update():void {
            var boundValue:number=0;
            //scroll the ocean by 5px
            this.x +=this._speed.x;
            this._checkBounds(boundValue);
        }
        
     
    }
}