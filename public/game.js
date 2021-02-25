const numMotherShips = 1;
const numAttackShips = 8;
const numDefenseShips = 5;
const totalShips = numAttackShips + numDefenseShips + numMotherShips;
const ships = [];
const motherShipDisplay = document.getElementById("motherShip");
const defenceShipDisplay = document.getElementById("defenceShip");
const attackShipDisplay = document.getElementById("attackShip");
class Ship {
  constructor(name, hp, damgePoints, id) {
    this.name = name;
    this.hp = hp;
    this.damgePoints = damgePoints;
    this.id = id;
  }
  takeHit() {
    this.hp = this.hp - this.damgePoints;
  }
  die() {
    this.hp = 0;
  }
  displayShips() {
    const printShip = `<p class="${this.id} shadow-sm"><img id="images" src="./img/${this.name}.svg" alt="image"> HP: ${this.hp}</p>`;
    document.getElementById(this.id).innerHTML += printShip;
  }
}

const createShips = () => {
  for (let index = 0; index < totalShips; index++) {
    let newShip;
    if (index < numMotherShips) {
      newShip = new Ship("mother-ship", 100, 9, "motherShip");
    } else if (index <= numAttackShips) {
      newShip = new Ship("attack-ship", 45, 12, "attackShip");
    } else if (index <= totalShips) {
      newShip = new Ship("defense-ship", 80, 10, "defenceShip");
    }
    ships.push(newShip);
  }
};

createShips();

const updateHtml = () => {
  motherShipDisplay.innerHTML = "";
  defenceShipDisplay.innerHTML = "";
  attackShipDisplay.innerHTML = "";
  ships.forEach(ship => ship.displayShips());
};

const endGame = () => {
  ships.forEach(ship => ship.die());
};

const dealDamage = () => {
  const randomIndex = Math.floor(Math.random() * ships.length);
  const randomShip = ships[randomIndex];
  randomShip.takeHit();
  if (randomShip.hp <= 0 && randomShip.name === "MotherShip") {
    endGame();
    alert("You killed the mother ship, so all the other ship died.");
  } else if (randomShip.hp <= 0) {
    ships.splice(randomIndex, 1);
  }
  updateHtml();
};

const resetGame = () => {
  window.location.reload();
};

updateHtml();

document.querySelector("#button").addEventListener("click", dealDamage);
document.querySelector("#buttonTwo").addEventListener("click", resetGame);
