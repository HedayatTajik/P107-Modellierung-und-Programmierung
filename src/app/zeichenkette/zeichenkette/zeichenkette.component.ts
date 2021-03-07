import { StrichCode } from './../model/strich-code';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-zeichenkette',
  templateUrl: './zeichenkette.component.html',
  styleUrls: ['./zeichenkette.component.css'],
})
export class ZeichenketteComponent implements OnInit {
  arrayOfStrichCode: StrichCode[] = [
    { id: 0, StrichCode: '000024740002506831001250012145' },
    { id: 1, StrichCode: '000024740002506831001250012145a' },
    { id: 2, StrichCode: '000024740012506831000250012145' },
  ];
  strichcodeString0: string = '000024740002506831001250012145';
  strichcodeString1: string = '000024740002506831001250012145a';
  strichcodeString2: string = '000024740012506831000250012145';
  NetWeightString: string;
  GrossWeightString: string;
  Fehlercode0 = 'kein Fehler';
  Fehlercode1 = 'String enthält nicht ausschließlich Ziffern';
  Fehlercode2 = 'Nettogewicht ist größer als Bruttogewicht';
  state: string = 'noch nich definiert';
  constructor() {}

  ngOnInit(): void {
    const checkIfOnlyNummberBoolean = this.checkIfOnlyNummber(
      this.strichcodeString0
    );
    console.log('checkIfOnlyNummber', checkIfOnlyNummberBoolean);
    this.NetWeightString = this.spliceNetWeight(this.strichcodeString0);
    this.GrossWeightString = this.spliceGrossWeight(this.strichcodeString0);
    this.state = this.checkError(
      checkIfOnlyNummberBoolean,
      this.NetWeightString,
      this.GrossWeightString
    );
    console.log(this.state);
  }

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
    } else if (netWeight > grossWeight) {
      return ' Nettogewicht ist größer als Bruttogewicht';
    }
  }

  checkIfOnlyNummber(arg: string) {
    for (let index = 0; index < arg.length; index++) {
      if (arg.charAt(index) >= '0' && arg.charAt(index) <= '9') {
      } else {
        return false;
      }
    }
    return true;
  }

  spliceNetWeight(arg: string): string {
    let netWeight = arg.slice(9, 14);
    console.log('netWeight', netWeight);
    return netWeight;
  }

  spliceGrossWeight(arg: string): string {
    let groosWeight = arg.slice(19, 24);
    console.log('groosWeight', groosWeight);
    return groosWeight;
  }
}
