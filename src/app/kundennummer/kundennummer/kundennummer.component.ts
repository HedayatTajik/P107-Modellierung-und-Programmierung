import { KundennummerService } from './../kundennummer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kundennummer',
  templateUrl: './kundennummer.component.html',
  styleUrls: ['./kundennummer.component.css'],
})
export class KundennummerComponent implements OnInit {
  firstPosition: string = 'KD';
  oneNumber: number = 0;
  secoundPositionArray: number[] = [];
  secoundPosition: string;
  summeNumber: number = 0;
  savedButton: boolean = false;
  endNumber: string = '';
  arrayOfAboNummers: string[] = [];
  control: boolean = false;
  constructor(private kundennummerService: KundennummerService) {}

  ngOnInit(): void {
    this.numberGeneratorOnclick();
  }

  numberGeneratorOnclick() {
    this.summeNumber = 0;
    this.secoundPositionArray = [];
    for (let index = 1; index < 9; index++) {
      this.oneNumber = this.kundennummerService.numberGenerator();
      this.secoundPositionArray.push(this.oneNumber);
      this.summeNumber += this.oneNumber;
      this.secoundPosition = this.secoundPositionArray.join('');
    }
    this.endNumber =
      this.firstPosition + this.secoundPosition + this.summeNumber;
    this.savedButton = true;
    this.control = this.arrayOfAboNummers.includes(this.endNumber);
  }

  saveKundenNummer() {
    this.arrayOfAboNummers.push(this.endNumber);
    console.log(this.arrayOfAboNummers);
  }
  deleteItem(indexOfelement) {
    this.arrayOfAboNummers.splice(indexOfelement, 1);
  }
  deleteAllPassword() {
    this.arrayOfAboNummers = [];
    this.savedButton = false;
  }
}
