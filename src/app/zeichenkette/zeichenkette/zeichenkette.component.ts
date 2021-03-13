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
  ) {}

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
    let summe = 0
        for (let index = 100; index <= 1000; index++) {
          summe = summe + index
          console.log("index",index)


        }
        console.log("summe",summe)

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
