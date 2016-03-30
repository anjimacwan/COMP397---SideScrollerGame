// PLAY SCENE
module scenes {
    export class Play extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
       
        private _desert: objects.Desert;
        private _clouds:objects.Cloud[];
        private _cloudCount:number;
        private _player:objects.Player;
        private _collision:managers.Collision;
       
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            
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
            
            for (var cloud in this._clouds)
            {
                this._clouds[cloud].update();
                this._collision.check(cloud);
            }
            
            this._player.update();
            
        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
    }
}