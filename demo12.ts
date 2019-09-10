class XiaoJieJie1{
    public sex:string;
    protected name:string;
    private age:number
    public constructor(sex:string,age:number,name:string){
        this.sex = sex
        this.name = name
        this.age = age
    }

    public sayHello(){
            console.log('小哥哥')
    }
    protected sayLove(){
        console.log('我爱你')
    }

}

var jiejie1:XiaoJieJie1 = new XiaoJieJie1('女',16,'迪丽热巴')
console.log(jiejie1.sex)
console.log(jiejie1.name)
console.log(jiejie1.age)
jiejie1.sayHello()
jiejie1.sayLove()



class   Man{
    public readonly sex:string = '男'

}


var man:Man = new Man()
man.sex = '女'


