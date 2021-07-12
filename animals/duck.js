export default class Duck {
   constructor(
      name,
      color,
   ) {
      this.name = name
      this.genus = 'bird'
      this.flight = true
      this.color = color
   }

   quack() {
      alert("QUACK!")
   }
}