export{}
let message="hi welocome guys "
console.log(message)
let a:any=123;
a=1;
a="karthi";
let b:number=1.2;
b=12;
let c:string="arun";
let d:boolean=true;9
let e :null=null;
let f:undefined;


let arr=[1,2,3,4,5,6,7,8 ,"abc"];
let arrstr:string[]=['karthi']
let multitype:number|string;
multitype=1;
multitype="hello";
let obj={
    names:"karthi",
    age:22,
}
obj.age=18;

function sum(a:number,b:number):number{

    return a+b;
}


function changes2(a:string,b :string='raj'):string{
    if(b)
    return a.toLocaleLowerCase()+b;
    return a.toLocaleLowerCase();
}
 console.log(changes2("Hi"));

 function add(point:{x:number,y:number}){
    return point.x+point.y;
 }
let p={
    x:1,
    y:1
}
add(p)
console.log(add(p));
interface Point{
    x:number;
    y:number;
    z:number
}
function add2(point:Point){
    return point.x+point.y;
 }
console.log(add2(p));