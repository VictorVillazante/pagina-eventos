import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  isLoading$: BehaviorSubject<any> = new BehaviorSubject<boolean>(true);
  constructor() { }
  show(){
    this.isLoading$.next(true);
  }
  hide(){
    this.isLoading$.next(false);
  }
}
