export default class Jackalope {
   constructor(
      name,
      horned
   ) {
      this.name = name;
      this.flight = false;
      this.horned = horned;

   }

   eat(food) {
      console.log(`Om nom, delicious ${food}!`)
   }
}