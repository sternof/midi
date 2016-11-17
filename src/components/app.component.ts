import { Component } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import {HttpService} from '../services/http.service';
import {StringService} from '../services/strings.service';


@Component({
  selector: 'httpserver',
  styleUrls: ['./app.component.css'],
  template: `
      <h1>{{ title }}</h1>  
  
  <button (click)="onTestGet()"> Get Request </button>
  <p> output get : {{jsonData}} </p>
  <div *ngFor= "let item of itemArray">  {{item.title}} </div>
  <button (click)="onTestPost()"> Post Request </button>
  <p> output post: {{jsonPostData}} </p>
    <div *ngFor= "let item of jsonPostDataArray">  {{item}} </div>

  <br>
  <h2> TEXT </h2>
  <button (click)="getText()"> Post Request </button>
  <pre> output text: {{textData}} </pre>
  <h2> STRINGS </h2>
  <button (click)="getStrings()"> Strings </button>

  `
})

export class HttpServer {

constructor(private httpService : HttpService, private strings : StringService) {

}


  title: string = 'Http Server';
  itemArray = [];
  jsonData: string ;
  jsonPostData: string ;
  jsonPostDataArray =[];
  textData: string ;



 private onTestGet() {
   this.httpService.getJson().subscribe(
     data => 
       this.jsonData = JSON.stringify(data),
     error => alert (error),
     () => console.log("finished")
   );
   ///// getting array from local file. 
   this.httpService.getJsonLocal().subscribe(
     data => 
       this.itemArray = data,
     error => alert (error),
     () => console.log("finished")
   );
 }


 private getText() {
   this.httpService.getText().subscribe(
     data => {
       this.textData = data;
     },
     error => alert (error),
     () => console.log("finished text")
   );
 }

 private onTestPost() {
   this.httpService.postJson().subscribe(
     data =>  {
       this.jsonPostData = JSON.stringify(data);
       this.jsonPostDataArray.push(JSON.stringify(data));

     },
     error => alert (error),
     () => console.log("finished posting")
   );
      this.httpService.postJson().subscribe(
     data => 
       this.jsonPostDataArray.push(JSON.stringify(data)),
     error => alert (error),
     () => console.log("finished posting 2")
   );
 }

 private getStrings() {
   let string = "what is this thing?";
   console.log(this.strings.stringToArray(string));
   console.log(this.strings.stringReverseWordOrder(string));
   console.log(this.strings.stringReverseInPlace(string));
   
 }
}
