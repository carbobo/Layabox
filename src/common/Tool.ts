class Tool {
    constructor() {
        
    }

    /**
     * 随机获取0-num之间的值
     * @param num 
     */
    public static rand(num:number=10):number{
        //主要获取1到10的随机整数，取0的几率极小。
        // Math.ceil(Math.random()*10);

        //主要获取0到10的随机整数
        return Math.round(Math.random()*num);
    }

}