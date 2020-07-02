export class Users {
    public id: number;
    public name: string;
    public email: string;
    public phone:string;
    public message_subject:string;
    public message:string;
    
    constructor(id:number,name:string, phone: string, email:string,message_subject:string, message:string) {
    this.id = id;
    this.name = name;
    this.email=email;
    this.phone=phone;
    this.message_subject =message_subject;
    this.message = message;
    }
    }