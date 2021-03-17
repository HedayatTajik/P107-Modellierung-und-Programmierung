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
