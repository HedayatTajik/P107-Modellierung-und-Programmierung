import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneratorService {

  constructor() { }

  mathRandom(): number {
    let number = Math.floor(Math.random() * 126);

    if (
      number < 35 ||
      number === 39 ||
      number === 44 ||
      number === 46 ||
      number === 94 ||
      number === 95 ||
      number === 96
    ) {
      let flag = true;
      while (flag) {
        number = Math.floor(Math.random() * 126);
        if (
          number >= 35 &&
          number !== 39 &&
          number !== 44 &&
          number !== 46 &&
          number !== 94 &&
          number !== 95 &&
          number !== 96
        ) {
          flag = false;
        }
      }
    }
      //Testen
    if (
      number < 35 ||
      number === 39 ||
      number === 44 ||
      number === 46 ||
      number === 94 ||
      number === 95 ||
      number === 96
    ) {
      console.warn('Error', number);
    }

    return number;
  }
}
