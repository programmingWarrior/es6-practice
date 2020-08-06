class Parent{
    constructor(){
        this.fatherName = "shahin hossen";
    }
}

class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
}
const Nayook = new Child("Shawon");
const baby = new Child("sanjida");
console.log(Nayook);
console.log(baby);