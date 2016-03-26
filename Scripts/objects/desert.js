var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var Desert = (function (_super) {
        __extends(Desert, _super);
        //PRIVATE INSTANCE VARIABLES++++++++++++++++++
        //CONSTRUCTOR++++++++++++++++++
        function Desert() {
            _super.call(this, "desert2");
            this._speed.x = 5;
            this._reset(-1280);
            this.name = "desert";
        }
        //PRIVATE METHODS++++++++++++++++++
        Desert.prototype._checkBounds = function (value) {
            if (this.x >= value) {
                //Check if the top of the desert has touched the top of the screen
                this._reset(-1280);
            }
        };
        //reset the desert offscreen
        Desert.prototype._reset = function (value) {
            this.x = value;
        };
        //PUBLIC METHODS+++++++++++++++++
        Desert.prototype.update = function () {
            //scroll the desert by 5px
            this.x += this._speed.x;
            this._checkBounds(0);
        };
        return Desert;
    })(objects.GameObject);
    objects.Desert = Desert;
})(objects || (objects = {}));
//# sourceMappingURL=desert.js.map