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
var View = laya.ui.View;
var Dialog = laya.ui.Dialog;
var ui;
(function (ui) {
    var GameUI = /** @class */ (function (_super) {
        __extends(GameUI, _super);
        function GameUI() {
            return _super.call(this) || this;
        }
        GameUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.GameUI.uiView);
        };
        GameUI.uiView = { "type": "View", "props": { "y": 0, "x": 0, "width": 480, "height": 800 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 480, "var": "stageBg", "skin": "ui/bg-index_bd.jpg", "height": 750 } }, { "type": "Image", "props": { "y": 750, "x": 0, "width": 481, "skin": "ui/foot.png", "height": 52 } }, { "type": "Button", "props": { "y": 753, "x": 412, "width": 62, "var": "startBtn", "stateNum": 2, "skin": "ui/button.png", "sizeGrid": "0,0,0,0", "labelSize": 18, "labelPadding": "0,1,1,1", "labelFont": "SimHei", "labelColors": "white,white,white", "labelAlign": "center", "label": "开始", "height": 46 } }, { "type": "Box", "props": { "y": 45, "x": 179, "width": 118, "var": "handBox", "height": 108 }, "child": [{ "type": "Image", "props": { "y": 39, "x": 10, "width": 59, "skin": "ui/hand_01.png", "pivotY": 38.80597014925375, "pivotX": 10.44776119402988, "name": "left", "height": 108 } }, { "type": "Image", "props": { "y": 39, "x": 108, "width": 59, "skin": "ui/hand_01.png", "skewY": 180, "pivotY": 38.80597494834005, "pivotX": 10.44776119402971, "name": "right", "height": 108 } }] }, { "type": "Image", "props": { "y": 25, "x": 227, "width": 20, "var": "rope", "skin": "ui/rope_1.png", "height": 20 } }, { "type": "Box", "props": { "y": -1, "x": 166 }, "child": [{ "type": "Image", "props": { "width": 147, "skin": "ui/tishi.png", "height": 40 } }, { "type": "Image", "props": { "y": 4, "x": 40, "width": 79, "skin": "ui/tishi11_01.png", "height": 37 } }] }] };
        return GameUI;
    }(View));
    ui.GameUI = GameUI;
})(ui || (ui = {}));
(function (ui) {
    var PacketUI = /** @class */ (function (_super) {
        __extends(PacketUI, _super);
        function PacketUI() {
            return _super.call(this) || this;
        }
        PacketUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.PacketUI.uiView);
        };
        PacketUI.uiView = { "type": "Dialog", "props": { "width": 300, "height": 400 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 300, "skin": "ui/packet-dialog.png", "height": 400 } }, { "type": "Label", "props": { "y": 178, "x": 28, "width": 243, "var": "PacketTitle", "text": "很遗憾,未抓到", "height": 43, "fontSize": 35, "font": "SimHei", "color": "#f9f6f6", "bold": true, "align": "center" } }, { "type": "Image", "props": { "y": 9, "x": 270, "width": 20, "var": "closeBtn", "skin": "ui/close.png", "height": 20 } }] };
        return PacketUI;
    }(Dialog));
    ui.PacketUI = PacketUI;
})(ui || (ui = {}));
//# sourceMappingURL=layaUI.max.all.js.map