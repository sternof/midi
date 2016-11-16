import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';



@Injectable()
export class ListService {

constructor (private http : Http ) {
}




/////
public getJsonFromServer() : Observable<any>{
  var url = '../model/pending.json';
  var urltext ='../model/text.txt'; 
  return this.http.get(url).map(res  => res.json());

}

}
