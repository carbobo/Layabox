var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var GameView = /** @class */ (function (_super) {
    __extends(GameView, _super);
    function GameView() {
        var _this = _super.call(this) || this;
        _this.game = new app.GameModel();
        _this.startBtn.on(Laya.Event.CLICK, _this, _this.handRun);
        return _this;
        // this.centerX = 0;
    }
    // 手臂动画
    GameView.prototype.handRun = function () {
        this.game.handRun(this);
        this.startBtn.disabled = true;
        this.startBtn.label = '稍等';
        var __this = this;
        setTimeout(function () {
            __this.startBtn.disabled = false;
            __this.startBtn.label = '开始';
        }, 2000);
    };
    return GameView;
}(ui.GameUI));
//# sourceMappingURL=GameView.js.map