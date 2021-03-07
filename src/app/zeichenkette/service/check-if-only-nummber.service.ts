import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CheckIfOnlyNummberService {
  constructor() {}

  checkIfOnlyNummber(arg: string) {
    for (let index = 0; index < arg.length; index++) {
      if (arg.charAt(index) >= '0' && arg.charAt(index) <= '9') {
      } else {
        return false;
      }
    }
    return true;
  }
}
