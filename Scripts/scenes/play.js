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
            this._desert.update();
            for (var cloud in this._clouds) {
                this._clouds[cloud].update();
                this._collision.check(cloud);
            }
            this._player.update();
        };
        return Play;
    })(objects.Scene);
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map