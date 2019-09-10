class JsJUn{
    public name:string
    public age:number
    public skill:string
    constructor(name:string,age:number,skill:string){
        this.name = name;
        this.age = age;
        this.skill = skill;
    }
    public interest(){
        console.log('找小姐姐')
    }
}

let jsjunobj:JsJun = new JsJUn('技术君',18,'coding')
jsjunobj.interest()


class JsShuai extends JsJUn{
    public xingxiang:string = '帅气'
    public zhuangqing(){
        console.log('一日赚了一个亿')
    }
    public interest(){
        super.interest()
        console.log('建立电商平台')
    }
    
}


let shuai = new JsShuai('技术帅',5,'演讲')
shuai.interest()
shuai.zhuangqing()

console.log(shuai.name)