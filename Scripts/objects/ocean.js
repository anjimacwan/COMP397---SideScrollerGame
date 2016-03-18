var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var Ocean = (function (_super) {
        __extends(Ocean, _super);
        //PRIVATE INSTANCE VARIABLES++++++++++++++++++
        //CONSTRUCTOR++++++++++++++++++
        function Ocean() {
            _super.call(this, "ocean");
            this._speed.y = 5;
            this._reset(-960);
        }
        //PRIVATE METHODS++++++++++++++++++
        Ocean.prototype._checkBounds = function (value) {
            if (this.y >= value) {
                //Check if the top of the ocean has touched the top of the screen
                this._reset(-960);
            }
        };
        //reset the ocean offscreen
        Ocean.prototype._reset = function (value) {
            this.y = value;
        };
        //PUBLIC METHODS+++++++++++++++++
        Ocean.prototype.update = function () {
            //scroll the ocean by 5px
            this.y += this._speed.y;
            this._checkBounds(0);
        };
        return Ocean;
    })(objects.GameObject);
    objects.Ocean = Ocean;
})(objects || (objects = {}));
//# sourceMappingURL=ocean.js.map