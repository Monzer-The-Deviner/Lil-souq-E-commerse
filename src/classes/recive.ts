import { hasFormater, speacialObj ,categs} from "./types";
export class Recive implements hasFormater{
    constructor(public reciver:string,public amount : number,private details:number){}
    format():string{
        return `${this.reciver} recived $${this.amount} for ${this.details}`
    }
}

const obj:  speacialObj={
    name:'osamah',
    age:30,
    mother:'hajah',
    categNum: categs.files
}
console.log(obj);
const objfunctions = <T extends speacialObj>(obj:T)=>{
    return {...obj,id:22}
}
console.log(objfunctions(obj).mother);
