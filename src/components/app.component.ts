import { Component } from '@angular/core';
//import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import {HttpService} from '../services/http.service';
@Component({
  selector: 'httpserver',
  styleUrls: ['./app.component.css'],
  template: `
      <h1>{{ title }}</h1>  
  
  <button (click)="onTestGet()"> Get Request </button>
  <br>
  <p> output get : {{jsonData}} </p>
  <br>
  <button (click)="onTestPost()"> Post Request </button>
  <p> output post: {{jsonPostData}} </p>
  <br>
  <h2> TEXT </h2>
  <button (click)="getText()"> Post Request </button>
  <p> output post: {{textData}} </p>
  `
})

export class HttpServer {

constructor(private httpService : HttpService) {

}


  title: string = 'Http Server';
 
  jsonData: string ;
  jsonPostData: string ;
  textData: string ;



 private onTestGet() {
   this.httpService.getJson().subscribe(
     data => 
       this.jsonData = JSON.stringify(data),
     error => alert (error),
     () => console.log("finished")
   );
 }


 private getText() {
   this.httpService.getText().subscribe(
     data => 
       this.textData = data,
     error => alert (error),
     () => console.log("finished text")
   );
 }

 private onTestPost() {
   this.httpService.postJson().subscribe(
     data => 
       this.jsonPostData = JSON.stringify(data),
     error => alert (error),
     () => console.log("finished posting")
   );
 }
}
