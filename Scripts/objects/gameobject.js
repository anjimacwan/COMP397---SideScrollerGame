var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    //GAMEOBJECT SUPER CLASS
    var GameObject = (function (_super) {
        __extends(GameObject, _super);
        //CONSTRUCTOR++++++++++++++++++
        function GameObject(bitmapString) {
            _super.call(this, assets.getResult(bitmapString));
            this._speed = new createjs.Point(0, 0);
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.centerX = this.width * 0.5;
            this.centerY = this.height * 0.5;
            this._topBounds = -this.height;
            this._bottomBounds = config.Screen.HEIGHT + this.height;
            this._leftBounds = 0;
            this._rightBounds = config.Screen.WIDTH - this.width;
        }
        //PRIVATE METHODS++++++++++++++++++
        GameObject.prototype._checkBounds = function (value) {
            var resetValue = 0;
            if (this.x >= value) {
                //check if y value has met the reset criteria
                this._reset(resetValue);
            }
        };
        //reset the ocean offscreen
        GameObject.prototype._reset = function (value) {
            this.x = value;
        };
        // Getter Method to check collision flag of object
        GameObject.prototype.getIsColliding = function () {
            return this._isColliding;
        };
        // Setter Method to set the collision flag of the object - true or false
        GameObject.prototype.setIsColliding = function (isColliding) {
            this._isColliding = isColliding;
        };
        GameObject.prototype.getIsCollidingPlayer = function () {
            return this._isCollidingPlayer;
        };
        // BULLET Setter Method to set the collision flag of the object - true or false
        GameObject.prototype.setIsCollidingPlayer = function (isCollidingPlayer) {
            this._isCollidingPlayer = isCollidingPlayer;
        };
        //PUBLIC METHODS+++++++++++++++++
        GameObject.prototype.update = function () {
            var boundValue = 0;
            //scroll the ocean by 5px
            this.x += this._speed.x;
            this._checkBounds(boundValue);
        };
        return GameObject;
    })(createjs.Bitmap);
    objects.GameObject = GameObject;
})(objects || (objects = {}));
//# sourceMappingURL=gameobject.js.map