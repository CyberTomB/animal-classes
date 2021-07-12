export default class Kangaroo {
   constructor(
      name,
      weight,
      height
   ) {
      this.name = name
      this.weight = weight
      this.height = height
      this.food = ['shrubs', 'flowers', 'bushes']
   }
   eat() {
      this.food.forEach(food =>
         console.log(`I ate those ${food}.`)
      )
   }
}