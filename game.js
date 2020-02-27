class ship {

    constructor(point) {
        this.point = point;
    }

    hitMother() {
        this.point = this.point - 9;
        return this.point;
    }

    hitDefence() {
        this.point = this.point - 10;
        return this.point;
    }

    hitAttack() {
        this.point = this.point - 12;
        return this.point;
    }
}
// PROPERTIES OF EACH SHIP 
const motherShip = new ship(100);
const defenceShip = new ship(80);
const attackShip = new ship(45);
const ships = [motherShip, defenceShip, attackShip];

// DISPLAY EVERY POINT 
const mother = document.getElementById('motherpoint').innerHTML = motherShip.point;
const defence = document.getElementById('defencepoint').innerHTML = defenceShip.point;
const attack = document.getElementById('attackpoint').innerHTML = attackShip.point;

// HITTING EACH SHIP AND DISPLAY IT 
const attachedMother = document.getElementById('motherpoint').innerHTML = motherShip.hitMother();
const attachedDefence = document.getElementById('defencepoint').innerHTML = defenceShip.hitDefence();
const attachedAttack = document.getElementById('attackpoint').innerHTML = attackShip.hitAttack();
const attached = [attachedMother, attachedDefence, attachedAttack];

// // HIT EACH SHIP 
// const motherHit = motherShip.hitMother();
// const defenceHit = defenceShip.hitDefence();
// const attackHit = attackShip.hitAttack();
// const hitArray = [motherHit, defenceHit, attackHit];

// CLICK FUNCTION 
const decrease = () => {
    const newScore = attached[Math.floor(Math.random() * attached.length)];
    return newScore;
}
