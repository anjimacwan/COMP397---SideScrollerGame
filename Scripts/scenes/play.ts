// PLAY SCENE
module scenes {
    export class Play extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
       
        private _desert: objects.Desert;
        private _clouds:objects.Cloud[];
        private _cloudCount:number;
        private _player:objects.Player;
        private _collision:managers.Collision;
       private _label:objects.Label;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            
            //add score label
            this._label = new objects.Label(
                "END SCENE", "60px Consolas",
                "#000000",
                config.Screen.CENTER_X, config.Screen.CENTER_Y, true);
            this.addChild(this._label);
            
            
            //set cloudcount
            this._cloudCount=3;
            
            //instantiate cloud array
            this._clouds = new Array<objects.Cloud>();
            
           // this._ocean =new objects.Ocean();
            // this.addChild(this._ocean);
            
            this._desert =new objects.Desert();
            this.addChild(this._desert);
            
          
            //added the player
            this._player =new objects.Player();
            this.addChild(this._player);
            
            
            //added cloud
            for( var cloud:number=0; cloud<this._cloudCount; cloud++)
            {
             this._clouds[cloud] = new objects.Cloud();
             this.addChild(this._clouds[cloud]);
            }
            
            //ADDED COLLISION MANAGER
            this._collision=new managers.Collision(this._player);
            
            // add this scene to the global stage container
            stage.addChild(this);
        }

        // PLAY Scene updates here
        public update(): void {
            //this._ocean.update();
           
            this._desert.update();
            
            // check if enemy is colliding with player and update it
            this._clouds.forEach(cloud => {
                this._collision.check(cloud);
                cloud.update();
            });
            
            this._player.update();
            
        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
    }
}