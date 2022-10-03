
class Ship {
  constructor(name, hull, firepower, accuracy) {
      this.name = name,
      this.hull = hull,
      this.firepower = firepower, 
      this.accuracy = accuracy
}
}

// Create player ship
class DefenderShip extends Ship {
    constructor(name, hull, firepower, accuracy) {
      super (name)
      this.name = name
      this.hull = 20;
      this.firepower = 5;
      this.accuracy = .7
    }
  //create method 
    attack() {
      let randomNum = Math.random()
      if (randomNum < this.accuracy) {
        invader.hull -= this.firepower;
        alert(`Your attack was successful! \n\n Good Job!`)
      } else {
        alert(`Your attack failed! \n\n Be careful!`)
      }
    }
  }
  
  const defender = new DefenderShip ('USS Assembly')
  
  
  // create alien ship
  class AlienShip extends Ship {
    constructor(name, hull, firepower, accuracy) {
      super (name)
      this.name = name
      this.hull = Math.floor(Math.random() * (7 - 3) + 3)
      this.firepower = Math.floor(Math.random() * (5 - 2) + 2)
      this.accuracy = (Math.floor(Math.random() * 3) + 6) / 10
    }

    //create method
    attack() {
      let randomNum = Math.random()
      if (randomNum < this.accuracy) {
        defender.hull -= this.firepower;
        alert(`You have been hit!`)
      } else {
        alert(`You have missed!`)
      }
    }
  }
   
  let invader = [];  //create array of 6 alien ship objects
    for (i = 0; i <6; i++) {
    invader[i] = new AlienShip ('alienShip')
  }
  
  //initiate Game
  const init = () => {
    alert('Welcome to Space Battle!');
    const response = prompt(`Enter 'p' to play or 'q' to exit.`);
    if (response.toLowerCase() === 'q') {
      alert(`Good-bye!`)
    } else if (response.toLowerCase() === 'p') {
      alert(`You are the captain of the USS Assembly.\n\nYour mission is to protect the Earth from an attack of aliens ships!.`)
      battle()
    } else {
      alert(`I don't understand your response.\n\nTry again next time!`)
    }
  }
  
  
  // Get Ready to Battle
 let invaderCount = 6;
  
  const battle = () => {

    while (invaderCount > 0) {
      if (invader.hull < 1) {
        invaderCount--
      }
  
      if (invaderCount > 0 && defender.hull > 0) {
        defender.attack(invader);
        invader.attack(defender);
      } else if (invaderCount < 1 && defender.hull < 1) {
        return alert(`Tie game!`)
      } else if (invaderCount < 1 && defender.hull > 0) {
        return alert(`You have defeated all aliens`)
      } else {
        return alert(`You lose!`)
      }
  
      const response = prompt(`Enter 'a' to attack or 'q' to retreat`)
      if (response.toLowerCase() === 'q') {
        alert(`You lose!`)
        defender.hull = 0;
        defender.firepower = 0;
        defender.accuracy = 0;
      } else if (response.toLowerCase() === 'a') {
        battle()
      } else {
        alert(`Try again!`)
      }
  
    }
  
 }

  console.log(defender)
  console.log(invader)