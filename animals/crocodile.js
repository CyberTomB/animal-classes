export default class Crocodile {
   constructor(
      name,
      legs,
   ) {
      this.name = name;
      this.genus = 'reptile';
      this.flight = false;
      this.legs = legs;
   }

   fly() {
      console.log("I flapped my arms as hard as I could, but didn't get off the ground.")
   }

   misidentify() {
      console.log("I'm not an Alligator!")
   }
}