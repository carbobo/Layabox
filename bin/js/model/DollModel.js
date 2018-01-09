// 玩偶控制类
var DollModel = /** @class */ (function () {
    function DollModel() {
        this.face = 0; //脸型类型
        this.smoke = 0; //云彩类型
        this.packet = 0; //红包类型
        this.MoveX = 20; //移动的像素
        this._init();
    }
    // 初始化
    DollModel.prototype._init = function () {
        //生成随机数
        this.face = Tool.rand(4);
        this.smoke = Tool.rand(3);
    };
    // 创建角色
    DollModel.prototype.create = function () {
        this.createDoll();
        this.createFace();
        this.createPacket();
        this.createSmoke();
        return [
            this.faceSP,
            this.smokeSP,
            this.packetSP,
            this.dollSP
        ];
    };
    //布偶
    DollModel.prototype.createDoll = function () {
        this.dollSP = new Laya.Sprite();
        this.dollSP.loadImage("ui/doll.png", 393, 578, 83, 89);
        Laya.stage.addChild(this.dollSP);
    };
    //脸部
    DollModel.prototype.createFace = function () {
        this.faceSP = new Laya.Sprite();
        this.faceSP.loadImage('ui/face_' + this.face + '.png', 415, 600, 44, 36);
        Laya.stage.addChild(this.faceSP);
    };
    //红包
    DollModel.prototype.createPacket = function () {
        this.packetSP = new Laya.Sprite();
        this.packetSP.loadImage('ui/rand-packet.png', 420, 620, 36, 35);
        Laya.stage.addChild(this.packetSP);
    };
    // 云彩
    DollModel.prototype.createSmoke = function () {
        // ui/smoke_2.png
        this.smokeSP = new Laya.Sprite();
        this.smokeSP.loadImage('ui/smoke_' + this.smoke + '.png', 393, 650, 86, 65);
        Laya.stage.addChild(this.smokeSP);
    };
    return DollModel;
}());
//# sourceMappingURL=DollModel.js.map