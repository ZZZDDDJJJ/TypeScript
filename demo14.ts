interface  Husband{
    sex:string
    interest:string
    maiBaoBao?:Boolean

}

let myhusband:Husband ={sex:'男',interest:'看书,做家务',maiBaoBao:true}


console.log(myhusband)



interface SearchMan{

    (source:string,subString:string):boolean

}



let mySearch:SearchMan

mySearch=function(source:string,subString:string):boolean{
    console.log(source)
    console.log(subString)
    let flag = source.search(subString)
    console.log(flag)
    return (flag!=-1)
}

console.log(mySearch('高、富、帅、德','胖' ))
