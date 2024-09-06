export type linkObj = {title:string,url:string}
export interface productObj  {
    title:string,
    id:string,
    desc:string,
    images:string[],
    image:string,
    price:number,
    collection:string,
    sold:number
    stock:number,
    stars:number
}
export interface colletionObj {title:string,id:string,bio:string,image:string}
