export type stringAndNumber = string|number
export type hasVal = string|number|boolean
export type strOrBool = boolean|number

export enum categs{files,people}
export type speacialObj = {
    name:string
    age:number
    mother:string
    categNum: categs
}
export interface hasFormater{
    format():string
}
