import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class KundennummerService {
  number: number;
  kundennummerService: number;
  constructor() {}



  numberGenerator(): number {
    let rundomNumber = Math.floor(Math.random() * 10);
    if (rundomNumber == 0) {
      let rundomNumber = Math.floor(Math.random() * 10);
      if (rundomNumber != 0) {
        return rundomNumber;
      }
    }
    return rundomNumber;
  }

}
