var managers;
(function (managers) {
    //COLLSION MANAGER CLASS
    var Collision = (function () {
        function Collision(player) {
            this._player = player;
        }
        Collision.prototype.distance = function (startPoint, endPoint) {
            return Math.pow((endPoint.x - startPoint.x), 2) + Math.pow((endPoint.y - startPoint.y), 2);
        };
        Collision.prototype.check = function (object) {
            var startPoint = new createjs.Point();
            var endPoint = new createjs.Point();
            var playerHalfHeight = this._player.height * 0.5;
            var objectHalfHeight = object.height * 0.5;
            var minimumDistance = playerHalfHeight + objectHalfHeight;
            startPoint.x = this._player.x;
            startPoint.y = this._player.y;
            endPoint.x = object.centerX;
            endPoint.y = object.centerY;
            if (this.distance(startPoint, endPoint) < minimumDistance) {
                if (object.getIsColliding() == false) {
                    switch (object.name) {
                        case "cloud":
                            //object.visible=false;
                            //createjs.Sound.play("sound", 0, 0 , 0 , 0, 0.5, 0);
                            console.log("cloud hit");
                            if (scoreboard.getLives() == 10) {
                                scoreboard.removeLives(5);
                            }
                            else {
                                scoreboard.removeLives(10);
                            }
                            break;
                    }
                    object.setIsColliding(true);
                }
            }
            else {
                object.setIsColliding(false);
            }
        };
        return Collision;
    })();
    managers.Collision = Collision;
})(managers || (managers = {}));
//# sourceMappingURL=collision.js.map