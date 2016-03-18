module objects {
    //GAMEOBJECT SUPER CLASS
    export class GameObject extends createjs.Bitmap {
        // INSTANCE VARIABLES++++++++++++++++++
        protected _speed:createjs.Point;
        protected _width:number;
        protected _height:number;
        
        //CONSTRUCTOR++++++++++++++++++
        constructor(bitmapString:string)
        {
            super(assets.getResult(bitmapString));
            this._speed= new createjs.Point(0,0);
            
            this._width=this.getBounds().width;
            this._height=this.getBounds().height;
        }
        
        //PRIVATE METHODS++++++++++++++++++
        protected _checkBounds(value:number):void {
       
        var resetValue:number=0;
        
        if(this.y >= value)
        {
            //check if y value has met the reset criteria
            this._reset(resetValue);
        }    
        }
        
        //reset the ocean offscreen
        protected _reset(value:number):void {
            this.y= value;
        }
        
        //PUBLIC METHODS+++++++++++++++++
        public update():void {
            var boundValue:number=0;
            //scroll the ocean by 5px
            this.y +=this._speed.y;
            this._checkBounds(boundValue);
        }
    }
}