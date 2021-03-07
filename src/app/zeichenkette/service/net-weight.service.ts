import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NetWeightService {
  constructor() {}
  spliceNetWeight(arg: string): string {
    let netWeight = arg.slice(9, 14);
    console.log('netWeight', netWeight);
    return netWeight;
  }
}
