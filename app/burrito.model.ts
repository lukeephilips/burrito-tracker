export class Burrito {
  constructor (public type: string, public restaurant: string, public isSuper: boolean, public calories: number, public date: string) {

  }
  typesList: string[] = [
    'Carne asada',
    'Chicken',
    'Beef',
    'Veggie',
    'Chile verde',
    'Carnitas'
  ]
}
