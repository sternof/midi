import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';



@Injectable()
export class HttpService {

constructor (private http : Http ) {
}

  public getJson(url : string) {

  return this.http.get(url).map(res  => res.json());
  }

  public getJsonLocal( url: string) {
 // var url = 'http://echo.jsontest.com/key/value/one/two';
 // var url = 'http://date.jsontest.com/';
  return this.http.get(url).map(res  => res.json());
  }
  
  public getHttpRequest(url : string) {
    return this.http.request(url).map(res=>res.json());
  }

  public getText() {
  var urltext ='../model/data.txt'; 
  return this.http.get(urltext).map(res  => res.text());
  }


  public postJson(url : string) {
    var json = JSON.stringify( {id : 1 ,body: 'test',
  title : 'bla',userId: 1 });
  var params = 'data=' + json;
 // var params = 'just a string';
  var headers = new Headers();
  return this.http.post(url,json).map(res=>res.json());
 /* this.createHeaders(headers);
  return this.http.post(url, params, {
    headers: headers
  }).map (res=> res.json());*/
  }

  private createHeaders(headers: Headers) {
    headers.append('Content-Type',
    'text/html' );
  //      headers.append('Content-Type',
   // 'application/x-www-form-urlencoded' );
  }




/////
public getJsonFromServer() : Observable<any>{
  var url = '../model/pending.json';
  var urltext ='../model/text.txt'; 
  return this.http.get(url).map(res  => res.json());

}

}
