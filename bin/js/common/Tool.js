var Tool = /** @class */ (function () {
    function Tool() {
    }
    /**
     * 随机获取0-num之间的值
     * @param num
     */
    Tool.rand = function (num) {
        //主要获取1到10的随机整数，取0的几率极小。
        // Math.ceil(Math.random()*10);
        if (num === void 0) { num = 10; }
        //主要获取0到10的随机整数
        return Math.round(Math.random() * num);
    };
    return Tool;
}());
//# sourceMappingURL=Tool.js.map