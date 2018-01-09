//游戏控制类
var app;
(function (app) {
    var GameModel = /** @class */ (function () {
        function GameModel() {
            this.handPos = { x: 0, y: 0 }; //手臂坐标 
            this.typeNum = 1; //动画类型(后台传入)
            // 创建布偶
            this.dollRun();
        }
        // 猴子布偶动画
        GameModel.prototype.dollRun = function () {
            var doll = new DollModel();
            this.resArray = doll.create();
            Laya.timer.loop(50, this, this.moveTo);
        };
        // 手臂动画
        GameModel.prototype.handRun = function (obj) {
            var hand = new HandModel();
            var res = hand.run(obj);
            this.handBox = res[0];
            this.rope = res[1];
            Laya.timer.loop(100, this, this.handMove);
        };
        // 对猴子布偶进行移动
        GameModel.prototype.moveTo = function (resArray) {
            //检测是否到达屏幕边缘
            if (this.resArray[0].x <= -500) {
                Laya.timer.clear(this, this.moveTo);
                this.resArray.forEach(function (vv) {
                    Laya.stage.removeChild(vv);
                });
                this.dollRun();
            }
            var _this = this;
            // 移动
            this.resArray.forEach(function (v) {
                _this.dollPos = { x: v.x, y: v.y };
                // 检测手臂是否到达底部
                if (_this.handPos.y < (445 + 20) && _this.handPos.y > (445 - 20)) {
                    // console.log( '手臂y'+_this.handPos.y + '-- 布偶x: '+_this.dollPos.x );
                    //是否抓住了布偶   
                    if (_this.dollPos.x < (-200 + 50) && _this.dollPos.x > (-200 - 50)) {
                        _this.collision(); //碰撞 播放碰撞动画
                        //爪子归位
                        Laya.Tween.to(_this.handBox, { y: 40 }, 3000, Laya.Ease.backOut, null, 100);
                        Laya.Tween.to(_this.rope, { height: 20 }, 3000, Laya.Ease.backOut, null, 100);
                        //向上移动布偶1 一半路程掉下来。
                        if (_this.typeNum == 0) {
                            _this.resArray.forEach(function (v) {
                                Laya.Tween.to(v, { y: -400 }, 3000, Laya.Ease.backOut, null, 0);
                                Laya.Tween.to(v, { y: 100 }, 3000, Laya.Ease.backOut, null, 500);
                                v.disabled = true;
                            });
                        }
                        if (_this.typeNum == 1) {
                            //向上移动布偶2 成功抓取
                            _this.resArray.forEach(function (v) {
                                Laya.Tween.to(v, { y: -(_this.handBox.y) }, 3000, Laya.Ease.backOut, null, 0);
                                Laya.Tween.to(v, { height: _this.rope.height }, 3000, Laya.Ease.backOut, null, 500);
                                v.disabled = true;
                            });
                            //抓取成功
                        }
                        Laya.timer.clear(_this, _this.moveTo);
                        _this.handPos.y = 40;
                        // 移除精灵
                        setTimeout(function () {
                            _this.resArray.forEach(function (vv) {
                                Laya.stage.removeChild(vv);
                            });
                            _this.dollRun();
                        }, 3000);
                        _this.dialog({ state: true, info: '抓到了一个' });
                    }
                    else {
                        // 没抓到 收回爪子
                        Laya.Tween.to(_this.handBox, { y: 40 }, 2000, Laya.Ease.elasticOut, null, 100);
                        Laya.Tween.to(_this.rope, { height: 20 }, 2000, Laya.Ease.elasticOut, null, 100);
                        _this.handPos.y = 40;
                        //弹窗
                        _this.dialog({ state: false, info: '很遗憾,未抓到' });
                    }
                }
                v.x -= 10;
            });
        };
        // 对手臂进行向下移动
        GameModel.prototype.handMove = function () {
            //检测是否到达屏幕边缘
            if (this.handBox.y >= 520) {
                Laya.timer.clear(this, this.handMove);
                return true;
            }
            this.handPos = {
                x: this.handBox.x,
                y: this.handBox.y
            };
            // 移动
            this.handBox.y += 100;
            this.rope.height += 100;
        };
        //检测是否碰撞  爪子动画
        GameModel.prototype.collision = function () {
            var handLeft = this.handBox.getChildByName('left');
            var handRight = this.handBox.getChildByName('right');
            //张开手臂
            Laya.Tween.to(handLeft, { skewX: -40 }, 500, Laya.Ease.elasticOut, null, 0);
            Laya.Tween.to(handRight, { skewX: 40 }, 500, Laya.Ease.elasticOut, null, 0);
            // 合拢手臂
            Laya.Tween.to(handLeft, { skewX: 0 }, 500, Laya.Ease.elasticOut, null, 500);
            Laya.Tween.to(handRight, { skewX: 0 }, 500, Laya.Ease.elasticOut, null, 500);
            return true;
        };
        GameModel.prototype.dialog = function (args) {
            var dialog = new app.common.PacketView();
            dialog.PacketTitle.text = args.info;
            if (!args.state) {
                dialog.gray = true;
            }
            // return dialog.popup(true);        
        };
        return GameModel;
    }());
    app.GameModel = GameModel;
})(app || (app = {}));
//# sourceMappingURL=GameModel.js.map