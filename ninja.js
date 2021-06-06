class Ninja {
    constructor(name){
        this.speed = 3;
        this.strength = 3;
        this.health = 0;
        this.name = name; 
        
    }
    

    sayName(){
        console.log(this.name)
    }

    showStats(){
        console.log(`Name: ${this.name}, Strength: ${this.strength}, Speed: ${this.speed}, Health: ${this.health}`)
    }

    drinkSake(){
        this.health += 10;
        console.log("You've earned 10 health!")
    }
    
}
const ninja1 = new Ninja("Hyabusa")
ninja1.sayName()
ninja1.drinkSake()
ninja1.showStats()