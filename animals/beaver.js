export default class Beaver {
   constructor(
      name,
      size
   ) {
      this.name = name;
      this.size = size;
      this.genus = 'mammal';
      this.flight = false;
   }

   dam(river) {
      console.log(`I'm going to pile up a bunch of wood to dam the ${river} river.`)
   }

}