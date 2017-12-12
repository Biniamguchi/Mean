export class User{
    public firstName:string;
    public lastName:string;
    public email:string;
    public password:string;
    public confirm:string;
    public address:string;
    public unit:number;
    public city:string;
    public state:string;
    public lucky:boolean;

    constructor(){
        this.firstName = "";
        this.lastName = "";
        this.email = "";
        this.password = "";
        this.confirm = "";
        this.address = "";
        this.unit = 0;
        this.city = "";
        this.state = "";
        this.lucky = false;
    };
}
