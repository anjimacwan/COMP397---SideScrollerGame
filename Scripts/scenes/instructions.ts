// INSTRUCTIONS SCENE
module scenes {
    export class Instructions extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _instructionLabel: createjs.Text;
        private _startButton: objects.Button;
        private _image:createjs.Bitmap;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            //ADD Background image
            this._image=new createjs.Bitmap("../../Assets/images/angrybird.png");
            this.addChild(this._image);
            
            //Add INSTRUCTIONS Label
            
            this._instructionLabel = new createjs.Text("For scoring points, save the bird from collision with \n\n other objects floating around in the sky! Good Luck! :)", "20px Consolas", "white");
            this._instructionLabel.regX = 0;
            this._instructionLabel.regY = 0;
            this._instructionLabel.x = 0;
            this._instructionLabel.y = 0;
            
            this.addChild(this._instructionLabel);
            
            
            // add the Start button to the INSTRUCTIONS scene
            this._startButton = new objects.Button(
                "StartButton",
                config.Screen.CENTER_X,
                config.Screen.CENTER_Y + 180, true);
            this.addChild(this._startButton);
            
            // Start Button event listener
            this._startButton.on("click", this._startButtonClick, this);
            
            
            // add this scene to the global stage container
            stage.addChild(this);
        }

        // INTRO Scene updates here
        public update(): void {

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
        // START_GAME Button click event handler
        private _startButtonClick(event: createjs.MouseEvent) {
            // Switch to the GAMEPLAY Scene
            scene = config.Scene.PLAY;
            changeScene();
        }

    }
}