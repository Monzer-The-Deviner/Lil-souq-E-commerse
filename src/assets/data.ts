import {productObj,categObj} from '../types'
import manpic1 from'./ff00009421652bef9f54af6ab6521df4.jpg'
import manpic2 from'./0b20f7595d8d044c9437672a2fe05a58.jpg'
import manpic3 from'./4fa25fa19937bca6f8fb422580778ea9.jpg'
import manpic4 from'./e3701fd085fd63c652d5bc6c6aeb5484.jpg'
import manpic5 from'./ea523f6d034957646fdb1130f360dcc6.jpg'

import womanPic1 from './www.swishschool (41).png'

export const productsData = (productsNumber:number): productObj[]=>{
    const data : productObj[]= []
    const names = ['nice outfit','k-pop outfit','modren shirt','hoodie']
    const categs = ['laioutfits','Men cloths','modren acceseries','home stuff']
    const pictures = [ manpic1, manpic2, manpic3, manpic4, manpic5, womanPic1]
    for (let index = 0; index < productsNumber; index++) {
        const price :number= Math.ceil(Math.random()*200)+0.99;
        const stock :number= Math.ceil(Math.random()*200);
        const sold :number= Math.ceil(Math.random()*stock);
        const id :string= ''+Math.ceil(Math.random()*2000);
        const stars :number= Math.ceil(Math.random()*5);
        const name :string = names[Math.ceil(Math.random()* names.length-1)]
        const categ :string = categs[Math.ceil(Math.random()* categs.length-1)]
        const imgURL :string[] = [pictures[Math.ceil(Math.random()* pictures.length-1)]]
        const desc = ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias magni minima, deleniti nam at possimus culpa est magnam, ea dignissimos, quibusdam praesentium nesciunt. Amet enim nulla magni, commodi quos numquam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias magni minima, deleniti nam at possimus culpa est magnam, ea dignissimos, quibusdam praesentium nesciunt. Amet enim nulla magni, commodi quos numquam.'

        const productobj: productObj = {
            title:name,
            categ,
            desc,
            imgURL,
            price,
            sold,
            stock,
            stars,
            id
        }
        data.push(productobj)
    }
    return data
}

export const categsData :categObj[] = [

    {
        title:'Men outfits',
        id:'men-outfits',
        imgURL:manpic1,
        bio:'find the best outfit that matches your needs',

    },
    {
        title:'Women outfits',
        imgURL:womanPic1,
        bio:'find the best outfit that matches your needs',
        id:'women-outfits'
    },
] 
export const hanleMostSold = (list: productObj[],number:number|undefined=undefined) => {
    //get the sells and save it in a var
    const sellsList: number[] = list.map(item=>item.sold)
    // sort sells var
    sellsList.sort((a,b)=>a-b)
    sellsList.reverse()
    console.log(sellsList);
    
    //map trough sells var and find items with same sells number
    const mostsold = []
    const numOfProds = number!=undefined?number:list.length
    for (let index = 0; index < numOfProds; index++) {
        mostsold.push(list.find(item=>item.sold==sellsList[index]));
        
    }
    return mostsold
}
// export const hanleMostSold = (list:productObj[],number:number)=>{
//     let soldList = list.map(product=>product.sold)
//     const newlist:number[] = []
//     for (let index = 0; index < number; index++) {
//         const element = max(soldList)
//         newlist.push(element)
//         soldList = soldList.filter(el=>el!=element)
//     }
// }