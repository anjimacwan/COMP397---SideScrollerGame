var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// INSTRUCTIONS SCENE
var scenes;
(function (scenes) {
    var Instructions = (function (_super) {
        __extends(Instructions, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Instructions() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Instructions.prototype.start = function () {
            //ADD Background image
            this._image = new createjs.Bitmap("../../Assets/images/angrybird.png");
            this.addChild(this._image);
            //Add INSTRUCTIONS Label
            this._instructionLabel = new createjs.Text("For scoring points, save the bird from collision with \n\nother objects floating around in the sky! Good Luck! :)", "20px Consolas", "white");
            this._instructionLabel.regX = 0;
            this._instructionLabel.regY = 0;
            this._instructionLabel.x = 0;
            this._instructionLabel.y = 0;
            this.addChild(this._instructionLabel);
            // add the Start button to the INSTRUCTIONS scene
            this._startButton = new objects.Button("StartButton", config.Screen.CENTER_X, config.Screen.CENTER_Y + 180, true);
            this.addChild(this._startButton);
            // Start Button event listener
            this._startButton.on("click", this._startButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // INTRO Scene updates here
        Instructions.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // START_GAME Button click event handler
        Instructions.prototype._startButtonClick = function (event) {
            // Switch to the GAMEPLAY Scene
            scene = config.Scene.PLAY;
            changeScene();
        };
        return Instructions;
    })(objects.Scene);
    scenes.Instructions = Instructions;
})(scenes || (scenes = {}));
//# sourceMappingURL=instructions.js.map