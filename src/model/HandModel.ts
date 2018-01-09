// 手
    
class HandModel {
    protected handBox:Laya.Box; //手臂
    protected rope:Laya.Image;  //绳子

    constructor() {   
    }

    //运行手臂
    public run(obj:any):any{
        this.handBox = obj.handBox;   
        this.rope = obj.rope;

        return [
            this.handBox,
            this.rope,
            obj
        ];
    }


}