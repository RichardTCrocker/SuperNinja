// Pair programmed with Anthony, Daisy, Eric, Kye, Josh, and Viviana
class Ninja {
    constructor(name, health=90, speed=3, strength=3){
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }
    sayName(){
        console.log(`The ninja's name is ${this.name}.`);
        return this;
    }
    showStats(){
        console.table(this);
        // console.log(`The ninja's name is ${this.name}.`);
        // console.log(`The ninja's strength is ${this.strength}.`);
        // console.log(`The ninja's speed is ${this.speed}.`);
        // console.log(`The ninja's health is ${this.health}.`);
        return this;
    }
    drinkSake(){
        this.health +=10;
        console.log(`The ninja's new health is ${this.health}.`);
        return this;
    }
}

// const ninja1 = new Ninja("Hyabusa");
// ninja1.sayName();
// ninja1.showStats();



class Sensei extends Ninja{
    constructor(name){
            super(name, 200, 10, 10)
        this.wisdom=10
    }
    speakWisdom(){
        super.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months");
        return this;
    }
}


const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();
