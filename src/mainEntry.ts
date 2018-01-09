namespace app{

    import Stage = laya.display.Stage;
    export class mainEntry {
    
    constructor() {
        Laya.init(720, 1280,laya.webgl.WebGL);
        this.init();
    }

    // 初始化
    private init():void{
        //屏幕适配
        Laya.stage.scaleMode = Laya.Stage.SCALE_SHOWALL;
        Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
        Laya.stage.alignV = Laya.Stage.ALIGN_CENTER;
        Laya.stage.screenMode = Laya.Stage.SCREEN_HORIZONTAL;
        Laya.stage.bgColor = "#ffcccc";
        laya.ani.bone.Skeleton.useSimpleMeshInCanvas = true;
        // 加载(图片 和 图集)
        let resArray:Array<any> = [
            {url : "res/atlas/ui.atlas", type : Laya.Loader.ATLAS },
            {url : "ui/bg-index_bd.jpg", type : Laya.Loader.IMAGE }
            // {url : "ui/packet-dialog.jpg", type : Laya.Loader.IMAGE }
        ] ;
        Laya.loader.load(resArray, Laya.Handler.create(this, this.onLoaded),
        Laya.Handler.create(this, this.onProgress)) ;        
    }

    //监测加载进度
    private onProgress(value:number):void {
        console.log("游戏加载进度: ", value);
    }

    //加载完成 回调函数
    private onLoaded():void {
        let game:GameView = new GameView();
        Laya.stage.addChild(game);
        // let gameModel = new GameModel();
    }

}


}