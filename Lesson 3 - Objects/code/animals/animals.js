(function (global) {
	var Cat = null, Bird = null, Worm = null;

	var Animal = {
		canEat : [],
		eat: function(animal){
			var animalPrototype = Object.getPrototypeOf(animal);
			if(this.canEat.find(function(elem){ return elem === animalPrototype;})){
				return "Mniam!";
			} else {
				return "Blee!";
			}		
		}
	}

	Cat = Object.create(Animal);
	Bird = Object.create(Animal);
	Worm = Object.create(Animal);

	Cat.canEat = [Bird];
	Bird.canEat = [Worm];

	if (!global.UAM) {
		global.UAM = {};
	}

	global.UAM.Cat = Cat;
	global.UAM.Bird = Bird;
	global.UAM.Worm = Worm;

}(window));


/*
	var proto = Object.getPrototypeOf
	var Animal={
		eat:function(food){
			return {(proto(this)===Cat && proto(food)===Bird) || (proto(this)===Bird && proto(food)===Worm) 
				? "Mniam!":Blee!";"}
		}
	}

	Cat = Object.create(Animal);
	Bird = Object.create(Animal);
	Worm = Object.create(Animal);

	W zadaniu mamy 3 rodzaje zwierząt: koty, ptaki i robaki. Respektując prawa natury koty jedzą ptaki, a ptaki robaki.
	Zaimplementuj obiekty Cat, Bird i Worm tak, aby poniższy kod zwracał prawidłowe rezultaty:

	var cat1 = Object.create(Cat);
	var cat2 = Object.create(Cat);
	var bird = Object.create(Bird);
	var worm = Object.create(Worm);

	cat1.eat(bird); // "Mniam!"
	cat2.eat(bird); // "Mniam!"
	bird.eat(worm); // "Mniam!"
	worm.eat(cat1); // "Blee!"
	cat1.eat(cat2); // "Blee!"

	Dodatkowo wszystkie obiekty mają korzystać ze wspólnej metody eat.
*/


