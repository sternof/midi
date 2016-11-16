import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';



@Injectable()
export class HttpService {

constructor (private http : Http ) {
}

  public getJson() {
  //var url = '../model/data.json';
 // var url = 'http://echo.jsontest.com/key/value/one/two';
  var url = 'http://date.jsontest.com/';
  return this.http.get(url).map(res  => res.json());
  }

  public getJsonLocal() {
  var url = '../model/data.json';
 // var url = 'http://echo.jsontest.com/key/value/one/two';
 // var url = 'http://date.jsontest.com/';
  return this.http.get(url).map(res  => res.json());
  }
  

  public getText() {
  var urltext ='../model/data.txt'; 
  return this.http.get(urltext).map(res  => res.text());
  }


  public postJson() {
    var json = JSON.stringify({var1: 'test',
  var2: 3, var3 : 'bla'});
  var params = 'json=' + json;
  var headers = new Headers();
  headers.append('Content-Type',
  'application/x-www-form-urlencoded' );
  return this.http.post('http://validate.jsontest.com', params, {
    headers: headers
  }).map (res=> res.json());

  }




/////
public getJsonFromServer() : Observable<any>{
  var url = '../model/pending.json';
  var urltext ='../model/text.txt'; 
  return this.http.get(url).map(res  => res.json());

}

}
