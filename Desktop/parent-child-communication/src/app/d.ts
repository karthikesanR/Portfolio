// class Engine{
//     hp:number;
//     constructor(hp:number){
//         this.hp=hp;
//     }


// }
class Engine{
    hp:number;
    stroke: number;
    repx: number;
    
    constructor(hp:number,stroke:number,repx:number){
        this.hp=hp;
        this.stroke=stroke;
        this.repx=repx;
        
    }


}

class Car{
    e:Engine;
    constructor(e:Engine){
        this.e=e;
    }
}
let e=new Engine(400,4500,34);
let c=new Car (e);
// class Car{
//     e:Engine=new Engine(400)
//     constructor(){

//     }
// }