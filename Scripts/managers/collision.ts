module managers {
    
    //COLLSION MANAGER CLASS
    export class Collision {
        
        //PRIVATE INSTANCE VARIABLES
        private _player:objects.Player;
        
        constructor(player:objects.Player)
        {
            this._player=player;
        }
        
        public distance(startPoint:createjs.Point, endPoint:createjs.Point):number {
            
            return Math.pow((endPoint.x - startPoint.x) , 2) + Math.pow((endPoint.y - startPoint.y) , 2);
        }
        
        public check(object:objects.GameObject) {
            
            var startPoint:createjs.Point = new createjs.Point();
            var endPoint:createjs.Point = new createjs.Point();
            var playerHalfHeight:number=this._player.height * 0.5;
            var objectHalfHeight:number= object.height *0.5;
            var minimumDistance:number= playerHalfHeight + objectHalfHeight;
            
            startPoint.x = this._player.x;
            startPoint.y = this._player.y;
            
            endPoint.x = object.centerX;
            endPoint.y = object.centerY;
            
            
            if(this.distance(startPoint, endPoint) < minimumDistance)
            {
                if (object.getIsColliding()==false) {
                    
                    switch(object.name) {
                       
                        case "cloud":
                            object.visible=false;
                            createjs.Sound.play("sound", 0, 0 , 0 , 0, 0.5, 0);
                            console.log("cloud hit");
                            if (scoreboard.getLives() == 10) {
                                scoreboard.removeLives(5);
                            }
                            else {
                                scoreboard.removeLives(10);
                            }

                            break;
                    }
                    object.setIsColliding(true);
                }
            }
            else {
                object.setIsColliding(false);
            }
        }
    }
}