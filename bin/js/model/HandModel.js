// 手
var HandModel = /** @class */ (function () {
    function HandModel() {
    }
    //运行手臂
    HandModel.prototype.run = function (obj) {
        this.handBox = obj.handBox;
        this.rope = obj.rope;
        return [
            this.handBox,
            this.rope,
            obj
        ];
    };
    return HandModel;
}());
//# sourceMappingURL=HandModel.js.map