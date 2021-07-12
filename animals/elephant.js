export default class Elephant {
   constructor(
      name,
      memories,
   ) {
      this.name = name
      this.genus = 'mammals'
      this.flight = false
      this.memories = memories

   }
   recall() {
      console.log(`I can remember ${memories} things.`)
   }

   fly() {
      console.log("What do I look like, Dumbo?")
   }
}