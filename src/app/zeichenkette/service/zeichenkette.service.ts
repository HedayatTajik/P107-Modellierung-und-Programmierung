import { Injectable } from '@angular/core';
import { StrichCode } from '../model/strich-code';

@Injectable({
  providedIn: 'root',
})
export class ZeichenketteService {
  arrayOfStrichCode: StrichCode[] = [
    { id: 0, StrichCode: '000024740002506831001250012145' },
    { id: 1, StrichCode: '000024740002506831001250012145a' },
    { id: 2, StrichCode: '000024740012506831000250012145' },
  ];
  constructor() {}
  checkError(
    checkIfNummber: boolean,
    netWeight: string,
    grossWeight: string
  ): string {
    console.log('checkIfNummber', checkIfNummber);
    console.log('netWeight', netWeight);
    console.log('grossWeight', grossWeight);

    if (checkIfNummber === false) {
      return 'String enthält nicht ausschließlich Ziffern';
    } else if (checkIfNummber === true && netWeight < grossWeight) {
      return 'Kein Fehler';
    } else {
      return ' Nettogewicht ist größer als Bruttogewicht';
    }
  }
}