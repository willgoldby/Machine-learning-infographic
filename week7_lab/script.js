class Lion{
    constructor (name, age,) {
        this.name = name;
        this.age = age;
        this.type = "Lion";
        this.image = "images/lion.jpeg";
    }
}


class Tiger{
    constructor (name, age){
        this.name = name;
        this.age = age;
        this.type = "Tiger";
        this.image = "images/tiger.jpeg";
    }

    run(){
        console.log(this.name+" run!!!!")
    }
}

class Zebra {
    constructor (name, age){
        this.name = name;
        this.age = age;
        this.type = "Zebra";
        this.image = "images/zebra.jpeg";
    }
}
function generateRandomIndex(maxIndex) {
    var randomNumber = Math.floor(Math.random() * maxIndex);
    return randomNumber;
}

function generateRandomAge(aNumber){
    return Math.floor(Math.random() * aNumber);
}

function generateRandomName(){
    var indexOfNames = generateRandomIndex(maxIndex)
    return names[indexOfNames];
}

var names = ['Henry', 'Sara', 'Mike'];
var maxIndex = (names.length);

function onLoad() {
    var myAnimals = [new Lion(names[generateRandomIndex(maxIndex)], generateRandomAge(20)), new Tiger(names[generateRandomIndex(maxIndex)], generateRandomAge(20)), new Zebra(names[generateRandomIndex(maxIndex)], generateRandomAge(20))];
    var anAnimal = myAnimals[generateRandomIndex(maxIndex)]
    var animalPicture = anAnimal.image
    console.log(animal)
    document.getElementById("animal").src = animalPicture
    document.getElementById("name").innerHTML = anAnimal.name
    document.getElementById("age").innerHTML = anAnimal.age
    console.log(anAnimal.type)
    document.getElementById("type").innerHTML = anAnimal.type
    console.log(anAnimal instanceof Zebra)
    console.log(animal)

}



/*function Cat(name, breed, weight, age) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
    this.age = age;
}

var taro = new Cat("Taro", "mutt", 3, 12);
var cat = Object.getPrototypeOf(taro);
cat.sleep = function() {
    alert("z z z...");
}
taro.sleep();*/
