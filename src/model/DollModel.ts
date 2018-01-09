// 玩偶控制类
class DollModel {
    protected face:number  = 0;     //脸型类型
    protected smoke:number = 0;     //云彩类型
    protected packet:any   = 0;     //红包类型

    protected faceSP:Laya.Sprite;     //脸
    protected smokeSP:Laya.Sprite;     //云
    protected packetSP:Laya.Sprite;     //红包
    protected dollSP:Laya.Sprite;     //人偶
    protected MoveX:number = 20;     //移动的像素

    constructor() {
        this._init();
    }

    // 初始化
    protected _init():void{
        //生成随机数
        this.face   = Tool.rand(4);
        this.smoke  = Tool.rand(3);
    }

    // 创建角色
    public create():Array<any>{
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
    }


    //布偶
    public createDoll():void{
        this.dollSP = new Laya.Sprite();
        this.dollSP.loadImage("ui/doll.png",393,578,83,89);
        Laya.stage.addChild(this.dollSP);      
    }

    //脸部
    public createFace():void{
        this.faceSP = new Laya.Sprite();
        this.faceSP.loadImage('ui/face_'+this.face+'.png',415,600,44,36);
        Laya.stage.addChild(this.faceSP);      
    }

    //红包
    public createPacket():void{
        this.packetSP = new Laya.Sprite();
        this.packetSP.loadImage('ui/rand-packet.png',420,620,36,35);
        Laya.stage.addChild(this.packetSP);      
    }

    // 云彩
    public createSmoke():void{
        // ui/smoke_2.png
        this.smokeSP = new Laya.Sprite();
        this.smokeSP.loadImage('ui/smoke_'+this.smoke+'.png',393,650,86,65);
        Laya.stage.addChild(this.smokeSP);      
    }


}