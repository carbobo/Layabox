namespace app.common{


export class PacketView extends ui.PacketUI{
    constructor() {
        super();
        this.closeBtn.on(Laya.Event.CLICK,this,this.closeSelf);
    }

    protected closeSelf():void{
        this.close();
    }

}

}