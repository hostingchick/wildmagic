import {Injectable} from '@angular/core';
import {SURGES} from './surges';
import {Surge} from './surge';

@Injectable({
  providedIn: 'root'
})
export class MagicService {

  constructor() {
  }

  getSurges(): Surge[] {
    return SURGES;
  }
}
