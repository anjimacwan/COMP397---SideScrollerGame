var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var Cloud = (function (_super) {
        __extends(Cloud, _super);
        //PRIVATE INSTANCE VARIABLES++++++++++++++++++
        //CONSTRUCTOR++++++++++++++++++
        function Cloud() {
            _super.call(this, "cloud");
            this._reset(this._topBounds);
            this.name = "cloud";
        }
        //PRIVATE METHODS++++++++++++++++++
        Cloud.prototype._checkBounds = function (value) {
            if (this.x >= value) {
                //Check if the top of the ocean has touched the top of the screen
                this._reset(this._topBounds);
            }
        };
        //reset the cloud offscreen
        Cloud.prototype._reset = function (value) {
            this._speed.x = Math.floor(Math.random() * 5) + 5;
            this._speed.y = Math.floor(Math.random() * 4) - 2;
            this.x = value;
            this.y = Math.floor(Math.random() * this._rightBounds);
        };
        //PUBLIC METHODS+++++++++++++++++
        Cloud.prototype.update = function () {
            //scroll the cloud
            this.x += this._speed.x;
            this.y += this._speed.y;
            this._checkBounds(this._bottomBounds);
        };
        return Cloud;
    })(objects.GameObject);
    objects.Cloud = Cloud;
})(objects || (objects = {}));
//# sourceMappingURL=cloud.js.map