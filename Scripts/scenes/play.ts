// PLAY SCENE
module scenes {
    export class Play extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _ocean: objects.Ocean;
        private _island:objects.Island;
        private _clouds:objects.Cloud[];
        private _cloudCount:number;
        
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
            
            this._ocean =new objects.Ocean();
            this.addChild(this._ocean);
            
            //added island
            this._island =new objects.Island();
            this.addChild(this._island);
            
            //added cloud
            for( var cloud:number=0; cloud<this._cloudCount; cloud++)
            {
             this._clouds[cloud] = new objects.Cloud();
             this.addChild(this._clouds[cloud]);
            }
            
            // add this scene to the global stage container
            stage.addChild(this);
        }

        // PLAY Scene updates here
        public update(): void {
            this._ocean.update();
            this._island.update();
            
            for (var cloud in this._clouds)
            {
                this._clouds[cloud].update();
            }
        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
    }
}