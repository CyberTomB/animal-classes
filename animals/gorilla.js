export default class Gorilla {
   constructor(
      name,
      weight,
      height
   ) {
      this.name = name
      this.weight = weight
      this.height = height
      this.bmi = Math.floor(this.weight * this.height)
   }
   size() {
      console.log(`This gorilla has a BMI of ${this.bmi}`)
   }
}