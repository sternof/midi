import { Component } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'httpserver',
  styleUrls: ['./app.component.css'],
  template: `
      <h1>{{ title }}</h1>  
  
  <button (click)="onTestGet()"> Get Request </button>
  <br>
  <p> output get : {{getData}} </p>
  <br>
  <button (click)="onTestPost()"> Post Request </button>
  <p> output post: {{postData}} </p>

  `
})

export class HttpServer {

constructor(private http : Http) {}

  title: string = 'Http Server';
 
  getData: string ;
  postData: string ;

  private getJsonCurTime() {
 // var url = '../model/data.json';
  var url = 'http://echo.jsontest.com/key/value/one/two';
  var url = 'http://date.jsontest.com/';
  var urltext ='../model/data.txt'; 
  //return this.http.get(url).map(res  => res.json());
  return this.http.get(urltext).map(res  => res.text());
  }

  private postJson() {
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

 private onTestGet() {
   this.getJsonCurTime().subscribe(
     data => 
       this.getData = JSON.stringify(data),
     error => alert (error),
     () => console.log("finished")
   );
 }

 private onTestPost() {
   this.postJson().subscribe(
     data => 
       this.postData = JSON.stringify(data),
     error => alert (error),
     () => console.log("finished posting")
   );
 }
}
