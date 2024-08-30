export class EventItem{
    public name: string;
    public imgPath: string;
    public usdt: boolean;
    public usdc: boolean;
    public dai: boolean;

    constructor(name: string, imgPath: string, usdt: boolean, usdc: boolean, dai: boolean){
        this.name = name;
        this.imgPath = imgPath;
        this.usdt = usdt;
        this.usdc = usdc;
        this.dai = dai;
    }
}