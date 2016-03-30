// PLAY SCENE
module scenes {
    export class Play extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
       
        private _desert: objects.Desert;
        private _clouds:objects.Cloud[];
        private _cloudCount:number;
        private _player:objects.Player;
        private _collision:managers.Collision;
        private _scoreLabel: objects.Label;
        private _livesLabel: objects.Label;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            // reset scoreboard
            scoreboard.setLives(5);
            scoreboard.setScore(0);
            
            //set cloudcount
            this._cloudCount=3;
            
            //instantiate cloud array
            this._clouds = new Array<objects.Cloud>();
            
           // this._ocean =new objects.Ocean();
            // this.addChild(this._ocean);
            
            this._desert =new objects.Desert();
            this.addChild(this._desert);
             
            //added cloud
            for( var cloud:number=0; cloud<this._cloudCount; cloud++)
            {
             this._clouds[cloud] = new objects.Cloud();
             this.addChild(this._clouds[cloud]);
            }
            
             //added the player
            this._player =new objects.Player();
            this.addChild(this._player);
            
            //ADDED COLLISION MANAGER
            this._collision=new managers.Collision(this._player);
            
            // Score Label
            this._scoreLabel = new objects.Label("Score: ", "30px Consolas", "white", 5, 5, false);
            this.addChild(this._scoreLabel);

            // Lives Label
            this._livesLabel = new objects.Label("Lives: ", "30px Consolas", "white", 350, 5, false);
            this.addChild(this._livesLabel);
            
            // add this scene to the global stage container
            stage.addChild(this);
        }
        
        // method to update scoreboard
        private _updateScore(): void {
            this._scoreLabel.text = "Score: " + scoreboard.getScore();
            this._livesLabel.text = "Immunity: " + scoreboard.getLives() + "%";
        }
        // PLAY Scene updates here
        public update(): void {
         
           
            this._desert.update();
            
            // check if enemy is colliding with player and update it
            this._clouds.forEach(cloud => {
                this._collision.check(cloud);
                cloud.update();
            });
            
            this._player.update();
            
            if(scoreboard.getLives() == 0){
                scene = config.Scene.END;
                changeScene();
            }
            
            
            this._updateScore();
        }
        
        // method to find distance between two points
        public distance(startPoint: createjs.Point, endPoint: createjs.Point): number {
            return Math.sqrt(Math.pow((endPoint.x - startPoint.x), 2) + Math.pow(endPoint.y - startPoint.y, 2))
        }
        
        // method to check which objects are colliding with bullet
        public checkCollision(object: objects.GameObject, index: number) {
            var startPoint: createjs.Point = new createjs.Point();
            var endPoint: createjs.Point = new createjs.Point();
            var playerHalfHeight: number = this._player.height * 0.5;
            var objectHalfHeight: number = object.height * 0.5;
            var minimumDistance: number = playerHalfHeight + objectHalfHeight;

            startPoint.x = this._player.x;
            startPoint.y = this._player.y;

            endPoint.x = object.centerX + object.x;
            endPoint.y = object.centerY + object.y;


            /* check if the distance between the bullet and 
              the other object is less than the minimum distance */
            if (this.distance(startPoint, endPoint) < minimumDistance) {
                if (object.getIsCollidingPlayer() == false) {
                    switch (object.name) {
                        
                        case "cloud":
                            object.visible = false;         // make enemy invisible
                            this._clouds[index].x = 650;     // put enemy out of the scene
                            scoreboard.addScore(100);       // update scoreboard
                            createjs.Sound.play("sound", 0, 0, 0, 0, 0.5, 0);
                            break;
                        
                    }
                    object.setIsCollidingPlayer(true);
                }
            }
            else {
                object.setIsCollidingPlayer(false);
            }
        }
        
        //EVENT HANDLERS ++++++++++++++++++++
        
    }
}