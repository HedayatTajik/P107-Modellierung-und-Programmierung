import { Component, OnInit } from '@angular/core';
import { GeneratorService } from '../generator.service';
import { of } from 'rxjs';
@Component({
  selector: 'app-password-generator',
  templateUrl: './password-generator.component.html',
  styleUrls: ['./password-generator.component.css']
})
export class PasswordGeneratorComponent implements OnInit {
  numberOfChar = 10;
  randomNumber: number = 0;
  passwords: string = '';
  randomNumberArray: number[] = [];
  savedPasswordArray = [];
  savedButton: boolean = false;

  constructor(private generatorService: GeneratorService) {}


  ngOnInit(): void {

  }



  generator(): void {
    this.randomNumberArray = [];
    for (let index = 0; index < this.numberOfChar; index++) {
      this.randomNumber = this.generatorService.mathRandom();
      this.randomNumberArray.push(this.randomNumber);
    }
    this.passwords = String.fromCharCode(...this.randomNumberArray);
    this.savedButton = true;

  }

  savePassword() {
    this.savedPasswordArray.push(this.passwords);
  }
  deleteItem(indexOfelement) {
    this.savedPasswordArray.splice(indexOfelement, 1);
  }
  deleteAllPassword() {
    this.savedPasswordArray = [];
    this.savedButton = false;
  }


}

