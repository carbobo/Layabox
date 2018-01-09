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
var app;
(function (app) {
    var common;
    (function (common) {
        var PacketView = /** @class */ (function (_super) {
            __extends(PacketView, _super);
            function PacketView() {
                var _this = _super.call(this) || this;
                _this.closeBtn.on(Laya.Event.CLICK, _this, _this.closeSelf);
                return _this;
            }
            PacketView.prototype.closeSelf = function () {
                this.close();
            };
            return PacketView;
        }(ui.PacketUI));
        common.PacketView = PacketView;
    })(common = app.common || (app.common = {}));
})(app || (app = {}));
//# sourceMappingURL=PacketView.js.map