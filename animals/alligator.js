export default class Alligator {
   /**
    * 
    * @param {String} name
    * @param {Number} legs 
    */
   constructor(
      name,
      legs,
   ) {
      this.name = name;
      this.genus = 'reptile';
      this.flight = false;
      this.legs = legs;
   }
}