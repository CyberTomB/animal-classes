export default class Fox {
   constructor(
      name,
      color,
   ) {
      this.name = name;
      this.genus = 'mammal';
      this.flight = false;
      this.color = color;
   }

   changeColor(newColor) {
      console.log(`I used to be ${this.color}`)
      this.color = newColor
      console.log(`Now I am ${this.color}`)
   }
}