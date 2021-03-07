import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GrossWeightService {

  constructor() { }
  spliceGrossWeight(arg: string): string {
    let groosWeight = arg.slice(19, 24);
    console.log('groosWeight', groosWeight);
    return groosWeight;
  }
}
