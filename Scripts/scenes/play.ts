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

        // PLAY Scene updates here
        public update(): void {
         
           
            this._desert.update();
            
           /* for (var cloud in this._clouds)
            {
                this._clouds[cloud].update();
                this._collision.check(cloud);
            }*/
            
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
        
        // method to update scoreboard
        private _updateScore(): void {
            this._scoreLabel.text = "Score: " + scoreboard.getScore();
            this._livesLabel.text = "Lives: " + scoreboard.getLives();
        }
        
        //EVENT HANDLERS ++++++++++++++++++++
        
    }
}