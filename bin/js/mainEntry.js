var app;
(function (app) {
    var mainEntry = /** @class */ (function () {
        function mainEntry() {
            Laya.init(720, 1280, laya.webgl.WebGL);
            this.init();
        }
        // 初始化
        mainEntry.prototype.init = function () {
            //屏幕适配
            Laya.stage.scaleMode = Laya.Stage.SCALE_SHOWALL;
            Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
            Laya.stage.alignV = Laya.Stage.ALIGN_CENTER;
            Laya.stage.screenMode = Laya.Stage.SCREEN_HORIZONTAL;
            Laya.stage.bgColor = "#ffcccc";
            laya.ani.bone.Skeleton.useSimpleMeshInCanvas = true;
            // 加载(图片 和 图集)
            var resArray = [
                { url: "res/atlas/ui.atlas", type: Laya.Loader.ATLAS },
                { url: "ui/bg-index_bd.jpg", type: Laya.Loader.IMAGE }
                // {url : "ui/packet-dialog.jpg", type : Laya.Loader.IMAGE }
            ];
            Laya.loader.load(resArray, Laya.Handler.create(this, this.onLoaded), Laya.Handler.create(this, this.onProgress));
        };
        //监测加载进度
        mainEntry.prototype.onProgress = function (value) {
            console.log("游戏加载进度: ", value);
        };
        //加载完成 回调函数
        mainEntry.prototype.onLoaded = function () {
            var game = new GameView();
            Laya.stage.addChild(game);
            // let gameModel = new GameModel();
        };
        return mainEntry;
    }());
    app.mainEntry = mainEntry;
})(app || (app = {}));
//# sourceMappingURL=mainEntry.js.map