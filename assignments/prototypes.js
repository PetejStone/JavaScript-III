/*
  Object oriented design is commonly used in video games.  For this part of the
  assignment you will be implementing several constructor functions with their
  correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.
  Use the objects at the bottom of the page to test your constructor functions.

  Each constructor function has unique properties and methods that are defined in
  their block comments below:
*/

/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/

function GameObject(param) {
  this.createdAt = param.createdAt,
  this.name = param.name,
  this.dimensions = param.dimensions
}

GameObject.prototype.destroy = function() {
  return `${this.name} was removed from the game`;
}
/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/
function CharacterStats(stats) {
  GameObject.call(this, stats),
  this.healthPoints = stats.healthPoints
}
CharacterStats.prototype = Object.create(GameObject.prototype);
CharacterStats.prototype.takeDamage = function(){

  return `${this.name} took damage`;
}
/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/

function Humanoid(attr) {
  GameObject.call(this, attr),
  CharacterStats.call(this, attr),
  this.team = attr.team,
  this.weapons = attr.weapons,
  this.language = attr.language
}

Humanoid.prototype = Object.create(CharacterStats.prototype);
Humanoid.prototype.greet = function() {
  return `${this.name} offers a greeting in ${this.language}.`
}

function Hero(attr) {
  Humanoid.call(this, attr),
  this.attack = attr.attack
}

Hero.prototype = Object.create(Humanoid.prototype);
Hero.prototype.death = function() {
  if (this.healthPoints <= 0) {
    return "you are dead";
  } else {
    return 'you are alive!'
  }
}

function Villain(attr) {
  Humanoid.call(this, attr),
  this.attack = attr.attack
}
Villain.prototype = Object.create(Humanoid.prototype);
Villain.prototype.death = function() {
  if (this.healthPoints <= 0) {
    return "you are dead";
  } else {
    return 'you are alive!'
  }
}


/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:


  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });

  const buffguy = new Hero({
    createdAt: new Date(),
    dimensions: {
      length: 3,
      width: 5,
      height: 5,
    },
    healthPoints: 20,
    name: 'Buffguy',
    team: 'My Own Team',
    weapons: [
      'Gun',
      'Bazooka',
    ],
    language: 'English',
    attack: function(name){
      name.healthPoints -= Math.floor(Math.random() * 3) + 1;//takes away a random number between 1-3 in health
      console.log(`Name: ${this.name} Health: ${name.healthPoints}`);
    }
  });

  const jerk = new Villain({
    createdAt: new Date(),
    dimensions: {
      length: 3,
      width: 5,
      height: 5,
    },
    healthPoints: 20,
    name: 'jerk',
    team: 'Villain Team',
    weapons: [
      'Ray Gun',
      'Sucker Punch',
    ],
    language: 'Sarcasm',
    attack: function(name){
      name.healthPoints -= Math.floor(Math.random() * 3) + 1;//takes away a random # between 1-3 in health
      console.log(`Name:${this.name}  Health:${name.healthPoints}`);
    }
  });

  //console.log(mage.createdAt); // Today's date
  //console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  // console.log(swordsman.healthPoints); // 15
  //console.log(mage.name); // Bruce
  //console.log(swordsman.team); // The Round Table
  // console.log(mage.weapons); // Staff of Shamalama
  // console.log(archer.language); // Elvish
   //console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  //console.log(mage.takeDamage()); // Bruce took damage.
  //console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
    // console.log(jerk.death());

  // Stretch task:
  // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.
  //* Give the Hero and Villains different methods that could be used to remove
  // health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villain and one a hero and fight it out with methods!

///To Play the Game, simply type 'matchStart()' in the console
  function matchStart(name) {
    for (let i=0; i <= jerk.healthPoints || i <= buffguy.healthPoints;  ) {
      jerk.attack(buffguy);//jerk attacks buffguy
      buffguy.attack(jerk);//buffguy attacks jerk
      if (jerk.healthPoints <= buffguy.healthPoints) {
        //sets i = healthpoints so loop keeps running
        i=jerk.healthPoints;
      } else {
        i=buffguy.healthPoints;
      } if (i <=0) {
        break; //once healthpoints reaches zero or below, exit the loop
      }

  }
  if (jerk.healthPoints > buffguy.healthPoints) {
    alert('Congrats Jerk, you won!');//if jerk's healthpoints are greater
  } else {
    alert('Congrats Buffguy, you won!');//if buffguy's healthpoints are greater
  }//resets the health score
  buffguy.healthPoints = 20;
  jerk.healthPoints = 20;
}
