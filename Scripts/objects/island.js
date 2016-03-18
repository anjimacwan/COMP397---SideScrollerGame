var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var Island = (function (_super) {
        __extends(Island, _super);
        //PRIVATE INSTANCE VARIABLES++++++++++++++++++
        //CONSTRUCTOR++++++++++++++++++
        function Island() {
            _super.call(this, "island");
            this._speed.y = 5;
            this._reset(-this._height);
        }
        //PRIVATE METHODS++++++++++++++++++
        Island.prototype._checkBounds = function (value) {
            if (this.y >= value) {
                //Check if the top of the ocean has touched the top of the screen
                this._reset(this._topBounds);
            }
        };
        //reset the ocean offscreen
        Island.prototype._reset = function (value) {
            var leftBounds;
            var rightBounds;
            this.y = value;
            this.x = Math.floor(Math.random() * this._rightBounds);
        };
        //PUBLIC METHODS+++++++++++++++++
        Island.prototype.update = function () {
            //scroll the ocean by 5px
            this.y += this._speed.y;
            this._checkBounds(this._bottomBounds);
        };
        return Island;
    })(objects.GameObject);
    objects.Island = Island;
})(objects || (objects = {}));
//# sourceMappingURL=island.js.map