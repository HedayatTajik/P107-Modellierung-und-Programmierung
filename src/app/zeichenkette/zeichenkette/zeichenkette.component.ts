import { ZeichenketteService } from './../service/zeichenkette.service';
import { CheckIfOnlyNummberService } from './../service/check-if-only-nummber.service';
import { NetWeightService } from './../service/net-weight.service';
import { GrossWeightService } from './../service/gross-weight.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-zeichenkette',
  templateUrl: './zeichenkette.component.html',
  styleUrls: ['./zeichenkette.component.css'],
})
export class ZeichenketteComponent implements OnInit {
  strichcodeString0: string = '000024740002506831001250012145';
  strichcodeString1: string = '000024740002506831001250012145a';
  strichcodeString2: string = '000024740012506831000250012145';
  NetWeightString: string;
  GrossWeightString: string;
  state: string = 'noch nich definiert';
  constructor(
    private grossWeightService: GrossWeightService,
    private netWeightService: NetWeightService,
    private checkIfOnlyNummberService: CheckIfOnlyNummberService,
    private zeichenketteService: ZeichenketteService
  ) { }

  x = 3;
  y = 1;
  summe = 0;
  schreiben = 0;
  ngOnInit(): void {
    this.sendMethode(this.strichcodeString1);


    
    // while (this.summe < 50) {
    //   this.summe = this.x + this.y;
    //   this.x += 2;
    //   console.log("x",this.x);
    //   console.log("summe",this.summe);
    // }
    // console.log("Endsumme",this.summe);

    // while(true){
    //   this.schreiben ++;
    //   console.log(this.schreiben, "„Ich muss immer meinen Lernschrittplaner ausfüllen“.");
    //   if(this.schreiben === 50)
    //   break
    // }
    // let summe = 0
    //     for (let index = 100; index <= 1000; index++) {
    //       summe = summe + index
    //       console.log("index",index)

    //     }
    //     console.log("summe",summe)


    // let summe = 0;
    // for (let z = 5; z > 0; z--) {
    //   summe = summe + z;
    //   console.log('z', z);
    //   console.log('summe', summe);
    // }


    // let array: number[] = [10,3,5,9,2,8,2,4,8,7]
    // let max = array[0]
    // let zahl
    // for(let index = 1; index <= array.length; index++){
    //   if(array[index] > max){
    //     max = array[index]
    //   }
    // }
    // console.log("zahl", max)



    // let messwertArray = [24, 0, 13, 0, 47, 55, 0];
    // let maxNummber = messwertArray[0]
    // let averageNumber = 0
    // let summeNumber = 0
    // for (let index = 0; index < messwertArray.length; index++) {
    //   summeNumber = summeNumber + messwertArray[index]
    //   if (maxNummber < messwertArray[index]) {
    //     maxNummber = messwertArray[index]
    //   }
    // }
    // averageNumber = summeNumber / messwertArray.length

    // console.log("maxNumb.", maxNummber)
    // console.log("summeNumber.", summeNumber)
    // console.log("averageNumber.", averageNumber)


    // //Aufgabe 16
    // let menge = 10
    // let rabbat = 0
    // if(menge >= 10 ){
    //   rabbat = 5
    //   if(menge >= 50){
    //     rabbat = 7
    //     if(menge >= 100){
    //       rabbat = 10
    //     }
    //   }
    // }
    // console.log("menge",menge)
    // console.log("rabbat",rabbat)


    //Aufgabe 19

    let maschNr = 0
    let map = new Map<string, number>();
    let obj = [
      { "MaschNr": "100", "Stillstand": 1 },
      { "MaschNr": "100", "Stillstand": 6 },
      { "MaschNr": "101", "Stillstand": 2 },
      { "MaschNr": "103", "Stillstand": 7 },
      { "MaschNr": "103", "Stillstand": 12 },
      { "MaschNr": "104", "Stillstand": 122 },
    ]
    obj.forEach(el => {
      if (map.has(el.MaschNr)) {
        maschNr = map.get(el.MaschNr) + el.Stillstand
        map.set(el.MaschNr, maschNr)
      }
      else {
        map.set(el.MaschNr, el.Stillstand)
      }
    })
    console.log("map ", map)

    map.forEach((value, key) => {
      if (value > 5 && value < 29) {
        console.log(key)
      }
      if (value > 30) {
        key = key + "*"
        console.log(key)
      }

    })



    
  }

  sendMethode(strichcodeString) {
    const checkIfOnlyNummberBoolean = this.checkIfOnlyNummberService.checkIfOnlyNummber(
      strichcodeString
    );

    this.NetWeightString = this.netWeightService.spliceNetWeight(
      strichcodeString
    );
    this.GrossWeightString = this.grossWeightService.spliceGrossWeight(
      strichcodeString
    );
    this.state = this.zeichenketteService.checkError(
      checkIfOnlyNummberBoolean,
      this.NetWeightString,
      this.GrossWeightString
    );
  }
}
