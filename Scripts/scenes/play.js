var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// PLAY SCENE
var scenes;
(function (scenes) {
    var Play = (function (_super) {
        __extends(Play, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Play() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Play.prototype.start = function () {
            //add score label
            this._label = new objects.Label("END SCENE", "60px Consolas", "#000000", config.Screen.CENTER_X, config.Screen.CENTER_Y, true);
            this.addChild(this._label);
            //set cloudcount
            this._cloudCount = 3;
            //instantiate cloud array
            this._clouds = new Array();
            // this._ocean =new objects.Ocean();
            // this.addChild(this._ocean);
            this._desert = new objects.Desert();
            this.addChild(this._desert);
            //added the player
            this._player = new objects.Player();
            this.addChild(this._player);
            //added cloud
            for (var cloud = 0; cloud < this._cloudCount; cloud++) {
                this._clouds[cloud] = new objects.Cloud();
                this.addChild(this._clouds[cloud]);
            }
            //ADDED COLLISION MANAGER
            this._collision = new managers.Collision(this._player);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        Play.prototype.update = function () {
            //this._ocean.update();
            var _this = this;
            this._desert.update();
            // check if enemy is colliding with player and update it
            this._clouds.forEach(function (cloud) {
                _this._collision.check(cloud);
                cloud.update();
            });
            this._player.update();
        };
        return Play;
    })(objects.Scene);
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map